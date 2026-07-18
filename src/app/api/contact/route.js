import { sendEnquiryEmail } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = {};
  const fullName = String(body.fullName || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.coverage || body.subject || "").trim();
  const message = String(body.message || "").trim();

  if (!fullName) errors.fullName = "Full name is required.";
  if (!phone) errors.phone = "Phone number is required.";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!subject) errors.coverage = "Subject/coverage is required.";
  if (!message) errors.message = "Message is required.";

  return { errors, values: { fullName, phone, email, subject, message } };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { errors, values } = validate(body);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const { fullName, phone, email, subject, message } = values;

  try {
    await sendEnquiryEmail({
      subject: `New Contact Form Enquiry: ${subject}`,
      replyTo: email,
      text: `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nCoverage Interest: ${subject}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Coverage Interest:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }
}
