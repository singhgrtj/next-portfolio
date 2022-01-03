export const nodemailer = require('nodemailer');

export default function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    if (!req.body) {
        res.status(400).send({ body: 'Body parameters are required' })
        return
    }
    
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        }
    });
      
    const mailOptions = {
        from: 'singhgrtj@gmail.com',
        to: 'singhgrtj@gmail.com',
        subject: 'singhgrtj Portfolio Website',
        text: `Email sent by ${name} with email ${email} with a message of: ${message}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            res.status(200).send({ success: 'Email sent!' })
        }
    });
}