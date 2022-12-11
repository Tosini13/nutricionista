import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

const filePath = path.join("./app/utils/email.server.html");

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
};

export async function sendEmail({ email, name, surname }: ContactForm) {
  const replacements = {
    firstName: name,
    lastName: surname,
    phoneNumber: "+34601533664",
    instagramLink: ".",
    whatsappLink: ".",
    websiteLink: "https://nutricionez.com/",
  };
  const htmlToSend = template(replacements);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `Respuesta automática`,
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
