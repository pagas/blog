"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var config_1 = require("../config");
var requestAuthentication = function (req, res, next) {
    var token = req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    }
    else {
        jwt.verify(token, config_1.default.pwdSecret, function (err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            }
            else {
                //req.email = decoded.email;
                next();
            }
        });
    }
};
exports.requestAuthentication = requestAuthentication;
