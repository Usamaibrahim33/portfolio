import nodemailer from 'nodemailer';
import fs from 'fs';
import renderEmail from '../../client/components/RenderEmail';

// Send email
    // Define your Gmail credentials
const gmailUser = 'usamaibrahimusman@gmail.com';
const gmailPass = 'pxvj ypjk xlbv vkxc ';


const message = fs.readFileSync('')

    // Create transporter with Gmail service
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailUser,
        pass: gmailPass
    }
});



const sendInfoToMyGmail = (req, res) => {
    const {firstName, secondName, email, textarea} = req.body;
    

    let mailOptions = {
        from: `${firstName} ${secondName} <${email}>`, // Sender's email address
        to: 'netw5783@gmail.com', // Recipient's email address
        subject: `New Contact from ${firstName} ${secondName}`, // Email subject
        text: textarea // Email body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Message sent successfully:', info.response);
            sendAutoMaticReply(email)
            return res.status(200).json({"message": "successfully send "})
        }
    });

};

const sendAutoMaticReply = (email) => {
    let replyOptions = {
        from: `othello Ltd ${gmailUser}`,
        to: `${email}`,
        subject: 'Thank you for contacting Othello Ltd',
        text: 'Thank you for contacting our team. \n We have received your message and will get back to you within 24 hours.',

    }

    transporter.sendMail(replyOptions, (error, info) => {
        if(error) {
            console.log('Error', error)
        } else {
            console.log('reply sent successfully:', info.response);
        }
    })
}






export default sendInfoToMyGmail;