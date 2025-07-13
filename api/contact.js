const express = require('express'); const nodemailer = require('nodemailer');
const app = express(); app.use(express.json()); app.use(express.urlencoded({ extended: true }));
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'your@email.com', pass: 'your_app_password' }
  });
  const mailOptions = { from: email, to: 'your@email.com', subject: `Message from ${name}`, text: message };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(500).send('Error'); res.send('Sent!');
  });
});
app.listen(3000);
