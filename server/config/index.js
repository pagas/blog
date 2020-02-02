"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenvFlow = require("dotenv-flow");
// config() will read your .env file, parse the contents, assign it to process.env.
dotenvFlow.config({});
exports.default = {
    port: process.env.PORT,
    databaseURL: process.env.DATABASE_URI,
    pwdSecret: process.env.PWD_SECRET,
    paypal: {
        publicKey: process.env.PAYPAL_PUBLIC_KEY,
        secretKey: process.env.PAYPAL_SECRET_KEY,
    },
    mailchimp: {
        apiKey: process.env.MAILCHIMP_API_KEY,
        sender: process.env.MAILCHIMP_SENDER,
    }
};
