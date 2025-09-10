/* eslint-env node */

import functions from "firebase-functions";
import nodemailer from "nodemailer";

// Replace with your email credentials
const gmailUser = "niteshdevarsetty@gmail.com";
const gmailPass = "hfqe qjzr zvse scat"; // Use an App Password, not your Gmail password

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
});

// Cloud Function to send email
export const sendContactEmail = functions.https.onCall(async (data) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: gmailUser,
    to: "2100031156.cse.h@gmail.com", // Your admin email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
});