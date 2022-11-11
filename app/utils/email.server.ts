import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

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
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `Contact from ${name} ${surname}`,
    html: `<h1>Contact from website</h1><p>${content}</p>`,
  };

  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error!log!", error);
      }
      if (info) {
        console.log("info!log!", info);
      }
    });
  } catch (e) {
    console.log("ERROR - SEND EMAIL !log!", e);
    return false;
  }
  return true;
}
