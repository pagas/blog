"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var requestAuthenticationMiddleware = function (req, res, next) {
    var token = req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    }
    else {
        jsonwebtoken_1.default.verify(token, config_1.default.pwdSecret, function (err, decoded) {
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
exports.requestAuthenticationMiddleware = requestAuthenticationMiddleware;
