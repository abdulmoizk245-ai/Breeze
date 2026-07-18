import { sendEnquiryEmail } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = String(body.email || "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await sendEnquiryEmail({
      subject: `New Newsletter Signup: ${email}`,
      replyTo: email,
      text: `Email: ${email}`,
      html: `<p><strong>Email:</strong> ${email}</p>`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("newsletter signup send failed:", err);
    return Response.json(
      { error: "Failed to sign up. Please try again later." },
      { status: 502 }
    );
  }
}
