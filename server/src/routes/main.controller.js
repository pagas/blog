"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var jwt = require("jsonwebtoken");
var user_1 = require("../models/user");
var config_1 = require("../config");
var request_authentication_1 = require("../middleware/request_authentication");
var mainRouter = express.Router();
exports.mainRouter = mainRouter;
mainRouter.get('/api/home', function (req, res) {
    res.send('Welcome, Dovile!');
});
mainRouter.get('/api/secret', request_authentication_1.requestAuthentication, function (req, res) {
    res.send('The password is potato');
});
mainRouter.post('/api/authenticate', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    user_1.User.findOne({ email: email }, function (err, user) {
        if (err) {
            console.error(err);
            res.status(500)
                .json({
                error: 'Internal error please try again'
            });
        }
        else if (!user) {
            res.status(401)
                .json({
                error: 'Incorrect email or password'
            });
        }
        else {
            user.comparePassword(password).then(function (same) {
                if (!same) {
                    res.status(401)
                        .json({
                        error: 'Incorrect email or password'
                    });
                }
                else {
                    // Issue token
                    var payload = { email: email };
                    var token = jwt.sign(payload, config_1.default.pwdSecret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                        .sendStatus(200);
                }
            }).catch(function (err) {
                res.status(500)
                    .json({
                    error: 'Internal error please try again'
                });
            });
        }
    });
});
mainRouter.get('/checkToken', request_authentication_1.requestAuthentication, function (req, res) {
    res.sendStatus(200);
});
