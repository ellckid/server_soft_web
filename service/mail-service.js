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


<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
		rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<title>Soft web</title>
</head>
<style>
	body {
		font-family: "Comfortaa", cursive;
		background-color: #FFDC8D;
		margin: 0;
	}
	.logo{
		height: 10%;
		width: auto;
		display: flex;
		margin: 5% auto;
	}

	@media (min-width:600px) {
		.mail{
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #FFDC8D;
			margin: 0 auto;
			width: 600px;
			height: 600px;
		}
		.mail_title{
			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 700;
			font-size: 36px;
			line-height: 40px;
			text-align: center;

			color: #000000;
		}
		.mail_h2_title{
			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 18px;
			text-align: center;

			color: #001227;
		}
		.mail_h3_title{
			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 16px;
			text-align: center;

			color: #00070F;
		}
		.mail_link{
			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 22px;
			text-align: center;

			color: #53A0ED;
		}
	}
	@media (max-width:601px) {
		.mail{
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #FFDC8D;
			margin: 0 auto;
			width: 300px;
			height: 600px;
		}
		.mail_title{
			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 40px;
			text-align: center;

			color: #000000;
		}
		.mail_h2_title{
			width: 90%;
			margin: 0 auto;

			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 18px;
			text-align: center;

			color: #001227;
		}
		.mail_h3_title{
			width: 90%;
			margin: 0 auto;

			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
			text-align: center;

			color: #00070F;
		}
		.mail_link{
			width: 90%;
			margin: 0 auto;

			font-family: 'Comfortaa';
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			text-align: center;

			color: #53A0ED;
		}
	}
	.mail_page{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 70%;
		gap: 5%;
		background-color: #fff;
		border-radius: 50px;
	}

</style>

<body >
<div class="mail">
	<img class="logo" src="https://ellckid.com/assets/img/logo.png" />
	<div class="mail_page">
		<h1 class="mail_title"> Привет !</h1>
		<h2 class="mail_h2_title">Рады видеть Вас в нашем интернет магазине</h2>
		<h3 class="mail_h3_title">Для завершения регистрации перейдите по ссылке ниже</h3>
		<a  class="mail_link" href=${link}> ${link}</a>
	</div>
</div>
</body>

</html>

                `
        })
    }
}

module.exports = new MailService();
