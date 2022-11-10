import nodemailer from "nodemailer";

export type ContactForm = {
  name: string;
  surname: string;
  email: string;
  content: string;
};

export async function sendEmail({
  email,
  name,
  surname,
  content,
}: ContactForm) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `Contact from ${name} ${surname}`,
    html: `<h1>Contact from website</h1><p>${content}</p>`,
  };

  console.log("mailOptions!log!", mailOptions);

  transporter.sendMail(mailOptions, function (error, info) {
    console.log("error!log!", error);
    console.log("info!log!", info);
  });
}
