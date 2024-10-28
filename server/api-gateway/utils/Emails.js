require("dotenv").config();
const nodemailer = require("nodemailer");

// Debugging: Check environment variables
console.log("EMAIL:", process.env.EMAIL);
console.log("EMAIL_PASSWORD:", process.env.PASSWORD);

const transporter = nodemailer.createTransport({
  service: "gmail", // Ensure you're using Gmail SMTP here
  secure: false, // Use TLS for secure connection
  auth: {
    // type: "login",
    user: process.env.EMAIL, // Your email
    pass: process.env.PASSWORD, // App Password if 2FA is on
  },
  // logger: "true",
  // debug: "true",
  // Optional: set to true if your production environment has stricter SSL policies
  tls: {
    rejectUnauthorized: false,
  },
});

exports.sendMail = async (receiverEmail, subject, body) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: receiverEmail,
      subject: subject,
      html: body,
    });
    console.log(`Email sent successfully to ${receiverEmail}`);
  } catch (error) {
    console.error("Error sending email:", error.message, error.stack);
  }
};
