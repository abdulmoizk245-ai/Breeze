
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaTimes,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaShieldAlt,
  FaUser,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaRulerVertical,
  FaWeight,
  FaPills,
  FaEnvelope,
  FaPhone,
  FaStar,
  FaCheck,
} from "react-icons/fa";

const initialValues = {
  name: "",
  zip: "",
  age: "",
  height: "",
  weight: "",
  medications: "",
  email: "",
  phone: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_ONLY_RE = /\D/g;
const NUMERIC_FIELDS = new Set(["zip", "weight"]);

const BENEFITS = [
  "No-obligation, free quote",
  "A real licensed agent follows up",
  "Nationwide provider network",
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }

  if (!values.zip.trim()) {
    errors.zip = "Zip code is required.";
  }

  if (!values.age.trim()) {
    errors.age = "Age is required.";
  } else if (Number(values.age) < 0 || Number(values.age) > 120) {
    errors.age = "Enter a valid age.";
  }

  if (!values.height.trim()) {
    errors.height = "Height is required.";
  }

  if (!values.weight.trim()) {
    errors.weight = "Weight is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

const fieldBase =
  "peer mt-1.5 w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4";

function fieldClass(hasError) {
  return `${fieldBase} ${
    hasError
      ? "border-primary-300 focus:border-primary-400 focus:ring-primary-100"
      : "border-slate-200 focus:border-primary-400 focus:ring-primary-100"
  }`;
}

function Field({ label, error, icon: Icon, span, children }) {
  return (
    <div className={span ? "sm:col-span-2" : ""}>
      <label className="text-sm font-semibold text-slate-800">{label}</label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors peer-focus:text-primary-500" />
        {children}
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-primary-500">{error}</p>
      )}
    </div>
  );
}

function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;
  const isSuccess = toast.type === "success";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-6 z-[1010] flex justify-center px-4 sm:justify-end sm:px-6">
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border p-4 shadow-2xl backdrop-blur-md ${
          isSuccess
            ? "border-secondary-200 bg-secondary-50/95 text-secondary-900"
            : "border-primary-200 bg-white/95 text-primary-900"
        }`}
      >
        {isSuccess ? (
          <FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary-600" />
        ) : (
          <FaExclamationCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
        )}
        <div className="flex-1">
          <p className="text-sm font-semibold">{toast.title}</p>
          <p className="mt-0.5 text-sm leading-6 opacity-80">{toast.message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss notification"
          className="shrink-0 rounded-full p-1 opacity-60 transition hover:opacity-100"
        >
          <FaTimes className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function QuoteModal({ isOpen, onClose }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [visible, setVisible] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  // Lock background scroll + trigger entrance animation while open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => {
        document.body.style.overflow = original;
        cancelAnimationFrame(raf);
        setVisible(false);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (field) => (e) => {
    const raw = e.target.value;
    const value = NUMERIC_FIELDS.has(field)
      ? raw.replace(DIGITS_ONLY_RE, "")
      : raw;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setToast({
        type: "error",
        title: "Please fix the highlighted fields",
        message: "A few details still need your attention before sending.",
      });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/quoteforn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");
      if (!mounted.current) return;

      setToast({
        type: "success",
        title: "Quote request sent",
        message: "Thanks! A licensed agent will reach out to you shortly.",
      });
      setValues(initialValues);
      setErrors({});

      // Give the user a moment to see the success toast, then close
      setTimeout(() => {
        if (mounted.current) onClose();
      }, 1500);
    } catch {
      if (!mounted.current) return;
      setToast({
        type: "error",
        title: "Message not sent",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      if (mounted.current) setSubmitting(false);
    }
  };

  return (
    <>
      <Toast toast={toast} onClose={() => setToast(null)} />

      <div
        className={`fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Close button pinned to the page corner, above the header/nav */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote form"
          className="fixed right-4 top-4 z-[1020] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/70 text-white shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-primary-400 hover:bg-primary-600 active:scale-90 active:bg-primary-700 sm:right-6 sm:top-6"
        >
          <FaTimes className="h-4 w-4 transition-transform duration-200" />
        </button>

        <div
          className={`relative flex w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[1.75rem] bg-white shadow-2xl transition-all duration-300 ${
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-95 opacity-0"
          }`}
        >
          {/* Sidebar — desktop only */}
          <div className="relative hidden w-[38%] shrink-0 flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-600 via-primary-600 to-primary-800 p-8 text-white lg:flex">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10"
            />

            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <FaShieldAlt className="h-5 w-5" />
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight">
                Get covered in minutes.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Answer a few quick questions and a licensed agent will follow
                up with a personalized quote — no pressure, no jargon.
              </p>

              <ul className="mt-8 space-y-3">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <FaCheck className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="flex -space-x-0.5 text-secondary-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="text-xs text-white/80">
                <span className="font-semibold text-white">4.9/5</span> from
                12,000+ members
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="w-full overflow-y-auto p-6 sm:p-8">
            <div className="mb-6 lg:hidden">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <FaShieldAlt className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Get Your Free Quote
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    No obligation — a real person will follow up.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mb-6 hidden text-xl font-bold text-slate-900 lg:block">
              Your details
            </h3>

            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name} icon={FaUser} span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={handleChange("name")}
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass(errors.name)}
                  />
                </Field>

                <Field label="Zip Code" error={errors.zip} icon={FaMapMarkerAlt}>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 78731"
                    value={values.zip}
                    onChange={handleChange("zip")}
                    aria-invalid={Boolean(errors.zip)}
                    className={fieldClass(errors.zip)}
                  />
                </Field>

                <Field label="Age" error={errors.age} icon={FaBirthdayCake}>
                  <input
                    type="number"
                    min="0"
                    max="120"
                    placeholder="Your age"
                    value={values.age}
                    onChange={handleChange("age")}
                    aria-invalid={Boolean(errors.age)}
                    className={fieldClass(errors.age)}
                  />
                </Field>

                <Field label="Height" error={errors.height} icon={FaRulerVertical}>
                  <input
                    type="text"
                    placeholder={`e.g. 5' 9"`}
                    value={values.height}
                    onChange={handleChange("height")}
                    aria-invalid={Boolean(errors.height)}
                    className={fieldClass(errors.height)}
                  />
                </Field>

                <Field label="Weight" error={errors.weight} icon={FaWeight}>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 160"
                    value={values.weight}
                    onChange={handleChange("weight")}
                    aria-invalid={Boolean(errors.weight)}
                    className={fieldClass(errors.weight)}
                  />
                </Field>

                <Field label="Maintenance Medications" icon={FaPills} span>
                  <input
                    type="number"
                    min="0"
                    placeholder="How many do you take?"
                    value={values.medications}
                    onChange={handleChange("medications")}
                    className={fieldClass(false)}
                  />
                </Field>
              </div>

              <div className="flex gap-3 rounded-xl bg-primary-50 p-4 text-sm text-slate-700">
                <FaShieldAlt className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                <p>
                  <strong className="font-semibold text-slate-800">
                    Covering more than one person?
                  </strong>{" "}
                  Add your email and phone number below so an agent can
                  follow up with a customized family quote.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email Address" error={errors.email} icon={FaEnvelope}>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange("email")}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass(errors.email)}
                  />
                </Field>

                <Field label="Phone Number" error={errors.phone} icon={FaPhone}>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    className={fieldClass(errors.phone)}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-500 disabled:pointer-events-none disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    Sending
                    <FaSpinner className="h-3.5 w-3.5 animate-spin" />
                  </>
                ) : (
                  <>
                    Get My Quote
                    <FaPaperPlane className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}