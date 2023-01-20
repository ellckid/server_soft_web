require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var https = require('https');
var fs = require('fs');
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware');

var options = {
    ca: fs.readFileSync("/etc/letsencrypt/live/ellckid.com/fullchain.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/ellckid.com/cert.pem"),
    key: fs.readFileSync("/etc/letsencrypt/live/ellckid.com/privkey.pem")
};

const PORT = process.env.PORT || 5100;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware); // всегда последний


var server = https.createServer(options, app);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        server.listen(PORT, () => console.log('server started'))
    } catch (e) {
        console.log(e);
    }
}

start();