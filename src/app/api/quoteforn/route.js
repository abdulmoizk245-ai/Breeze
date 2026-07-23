
import { sendEnquiryEmail } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMERIC_RE = /^\d+$/;

function validate(body) {
  const errors = {};

  const name = String(body.name || "").trim();
  const zip = String(body.zip || "").trim();
  const age = String(body.age || "").trim();
  const height = String(body.height || "").trim();
  const weight = String(body.weight || "").trim();
  const medications = String(body.medications || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!name) errors.name = "Full name is required.";

  if (!zip) {
    errors.zip = "Zip code is required.";
  } else if (!NUMERIC_RE.test(zip)) {
    errors.zip = "Zip code must contain numbers only.";
  }

  if (!age) {
    errors.age = "Age is required.";
  } else if (Number(age) < 0 || Number(age) > 120) {
    errors.age = "Enter a valid age.";
  }

  if (!height) errors.height = "Height is required.";

  if (!weight) {
    errors.weight = "Weight is required.";
  } else if (!NUMERIC_RE.test(weight)) {
    errors.weight = "Weight must contain numbers only.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  return {
    errors,
    values: { name, zip, age, height, weight, medications, email, phone },
  };
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
    return Response.json(
      { error: "Validation failed.", errors },
      { status: 400 },
    );
  }

  const { name, zip, age, height, weight, medications, email, phone } = values;

  try {
    await sendEnquiryEmail({
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      text: `Name: ${name}
Zip Code: ${zip}
Age: ${age}
Height: ${height}
Weight: ${weight}
Maintenance Medications: ${medications || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Zip Code:</strong> ${zip}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Weight:</strong> ${weight}</p>
        <p><strong>Maintenance Medications:</strong> ${medications || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("quote form send failed:", err);
    return Response.json(
      { error: "Failed to send request. Please try again later." },
      { status: 502 },
    );
  }
}
