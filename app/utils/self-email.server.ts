import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

const filePath = path.join("./app/utils/self-email.server.html");

const source = fs.readFileSync(filePath, "utf-8").toString();
const template = handlebars.compile(source);

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

export async function sendSelfEmail({
  email,
  name,
  surname,
  content,
}: ContactForm) {
  const replacements = {
    content: content,
    websiteLink: "https://nutricionez.com/",
  };
  const htmlToSend = template(replacements);

  const mailOptions = {
    from: process.env.EMAIL,
    to: "nutricionez@gmail.com",
    subject: `Contacto de ${name} ${surname} - ${email}`,
    html: htmlToSend,
  };

  try {
    transporter.sendMail(mailOptions, function (error, _info) {
      if (error) {
        console.log("error!log!", error);
      }
    });
  } catch (e) {
    console.log("ERROR - SEND EMAIL !log!", e);
    return false;
  }
  return true;
}
