import { sendEnquiryEmail } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = {};
  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();

  if (!name) errors.name = "Full name is required.";
  if (!phone) errors.phone = "Phone number is required.";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  return { errors, values: { name, phone, email } };
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

  const { name, phone, email } = values;

  try {
    await sendEnquiryEmail({
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("quote form send failed:", err);
    return Response.json(
      { error: "Failed to send request. Please try again later." },
      { status: 502 }
    );
  }
}
