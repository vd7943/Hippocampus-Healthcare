import sendEmail from "../utils/sendEmail.js";
import { config } from "dotenv";

config();

export const contactForm = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;

    if (!firstName || !phone || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const emailSubject = `New Contact Form Submission from ${firstName}`;
    const emailContent = `
  <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #226930; color: #ffffff; padding: 20px; text-align: center; font-size: 22px; font-weight: bold;">
      Hippocampus Healthcare - New Contact Form Submission
    </div>
    <div style="padding: 20px; background-color: #f8fff8;">
      <p style="font-size: 16px; color: #333; margin-bottom: 12px;">
        <strong style="color: #226930;">Name:</strong> ${firstName} ${lastName}
      </p>
      <p style="font-size: 16px; color: #333; margin-bottom: 12px;">
        <strong style="color: #226930;">Email:</strong> ${email}
      </p>
      <p style="font-size: 16px; color: #333; margin-bottom: 12px;">
        <strong style="color: #226930;">Phone:</strong> ${phone}
      </p>
      <p style="font-size: 16px; color: #333; margin-bottom: 12px;">
        <strong style="color: #226930;">Enquiry:</strong> ${message}
      </p>
      <hr style="border: none; border-top: 1px solid #46b21e; margin: 20px 0;" />
      <p style="font-size: 15px; color: #555;">
        <strong style="color: #226930;">Submission Date:</strong> ${submissionDate}
      </p>
    </div>
    <div style="background-color: #46b21e; color: #ffffff; text-align: center; padding: 12px; font-size: 14px;">
      © Hippocampus Healthcare | This message was generated automatically
    </div>
  </div>
`;

    await sendEmail("contact@sohiljain.com", emailSubject, emailContent);

    res.status(200).json({ message: "Message Sent Successfully!" });
  } catch (error) {
    console.error("Error sending contact form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
