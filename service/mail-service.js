const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            // port: 587,
            // secure: false,
            service: "gmail",
            auth: {
                user: 'soft.web.mail.ru@gmail.com',
                pass: 'ldntcmradqmqbfjd'
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: "soft.web.mail.ru@gmail.com",
            to,
            subject: "Подтверждение почты на сайте " + process.env.API_URL,
            text: "",
            html:
                `
                <div>
                    <h1>Перейдите по ссылке для подтверждения аккаунта  </h1>
                    <a href=${link}> ${link}</a>
                </div>
                `
        })
    }
}

module.exports = new MailService();