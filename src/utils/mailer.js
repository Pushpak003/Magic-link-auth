import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

const sendMagiclink = async(email, token) => {
    const link = `${process.env.BASE_URL}/auth/verify?token=${token}`;
    await transporter.sendMail({
        from : process.env.EMAIL_USER,
        to: email,
        subject: "Here is your link to login",
       html: `<a href="${link}">Click here to log in</a>. This link will expire in 10 minutes.`,});
    };
export default sendMagiclink;