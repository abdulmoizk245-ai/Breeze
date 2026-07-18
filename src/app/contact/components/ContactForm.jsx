"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaTimes,
} from "react-icons/fa";

const initialValues = {
  fullName: "",
  phone: "",
  email: "",
  coverage: "",
  message: "",
};

const coverageChoices = [
  "Private PPO Health Plan",
  "Family Coverage",
  "Dental & Vision",
  "Medicare Supplement Plan",
  "Small Business Coverage",
  "Not Sure Yet",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Name looks too short.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.coverage) {
    errors.coverage = "Select a coverage option.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a bit about what you need.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a few more details.";
  }

  return errors;
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
    <div className="pointer-events-none fixed inset-x-0 top-6 z-[100] flex justify-center px-4 sm:justify-end sm:px-6">
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
          <p className="mt-0.5 text-sm leading-6 opacity-80">
            {toast.message}
          </p>
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

const fieldBase =
  "mt-2 w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:bg-white focus:ring-4";

function fieldClass(hasError) {
  return `${fieldBase} ${
    hasError
      ? "border-primary-300 focus:border-primary-400 focus:ring-primary-100"
      : "border-slate-200 focus:border-primary-400 focus:ring-primary-100"
  }`;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      if (!mounted.current) return;

      setToast({
        type: "success",
        title: "Message sent",
        message: "Thanks! Brenda Ruiz will reach out to you shortly.",
      });
      setValues(initialValues);
      setErrors({});
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

      <form
        noValidate
        onSubmit={handleSubmit}
        className="rounded-[1.75rem] bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-slate-800">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={values.fullName}
              onChange={handleChange("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              className={fieldClass(errors.fullName)}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs font-medium text-primary-500">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-800">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Your phone number"
              value={values.phone}
              onChange={handleChange("phone")}
              aria-invalid={Boolean(errors.phone)}
              className={fieldClass(errors.phone)}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs font-medium text-primary-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-800">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your email"
              value={values.email}
              onChange={handleChange("email")}
              aria-invalid={Boolean(errors.email)}
              className={fieldClass(errors.email)}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs font-medium text-primary-500">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-800">
              Coverage Interest
            </label>
            <select
              value={values.coverage}
              onChange={handleChange("coverage")}
              aria-invalid={Boolean(errors.coverage)}
              className={`${fieldClass(errors.coverage)} ${
                values.coverage ? "text-slate-900" : "text-slate-500"
              }`}
            >
              <option value="">Select an option</option>
              {coverageChoices.map((option) => (
                <option key={option} value={option} className="text-slate-900">
                  {option}
                </option>
              ))}
            </select>
            {errors.coverage && (
              <p className="mt-1.5 text-xs font-medium text-primary-500">
                {errors.coverage}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="text-sm font-semibold text-slate-800">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us what kind of coverage you are looking for..."
              value={values.message}
              onChange={handleChange("message")}
              aria-invalid={Boolean(errors.message)}
              className={`${fieldClass(errors.message)} resize-none`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs font-medium text-primary-500">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-500 disabled:pointer-events-none disabled:opacity-70"
        >
          {submitting ? (
            <>
              Sending
              <FaSpinner className="h-3.5 w-3.5 animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <FaPaperPlane className="h-3.5 w-3.5" />
            </>
          )}
        </button>

        <p className="mt-4 text-center text-xs leading-6 text-slate-500">
          By submitting this form, you agree to be contacted about health
          insurance options that may fit your needs.
        </p>
      </form>
    </>
  );
}
