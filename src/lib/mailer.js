import nodemailer from "nodemailer";

export const RECIPIENTS = [
  "info@breezyhealthsolutions.com",
  "bruiz.billing@gmail.com",
  "abdulmoizk245@gmail.com",
];

let transporter;

function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function sendEnquiryEmail({ subject, replyTo, text, html }) {
  await getTransporter().sendMail({
    from: `"Breezy Health Solutions" <${process.env.SMTP_USER}>`,
    to: RECIPIENTS,
    replyTo,
    subject,
    text,
    html,
  });
}
