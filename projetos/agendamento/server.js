const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, phone, service, date, time } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "leandrocs.sani@gmail.com",
      pass: "Hacker@7777"
    }
  });

  const mailOptions = {
    from: "seu-email@gmail.com",
    to: "destinatario@email.com",
    subject: "Novo agendamento de barbearia",
    html: `
      <p>Nome: ${name}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${phone}</p>
      <p>Serviço: ${service}</p>
      <p>Data: ${date}</p>
      <p>Hora: ${time}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erro ao enviar o email.");
    } else {
      console.log("Email enviado com sucesso.");
      res.send("Email enviado com sucesso.");
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.");
});