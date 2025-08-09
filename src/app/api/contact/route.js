import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Create a Nodemailer transporter using your Gmail SMTP details
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL, // Your Gmail address from .env.local
        pass: process.env.GMAIL_APP_PASSWORD, // Your App Password from .env.local
      },
    });

    // Define the email content
    const mailOptions = {
      from: process.env.GMAIL_EMAIL, // Sender address
      to: "gourav.getfound@gmail.com", // Recipient address (your own)
      subject: `New Consultation Request from ${name}`,
      html: `
        <p>You have a new consultation request from your website.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}
