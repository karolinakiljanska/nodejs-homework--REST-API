const nodemailer = require("nodemailer");

const { BREVO_EMAIL, BREVO_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: true,
  auth: {
    user: BREVO_EMAIL,
    pass: BREVO_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: BREVO_EMAIL };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
