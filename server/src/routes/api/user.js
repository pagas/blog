"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRouter = express.Router();
var user_1 = require("../../models/user");
// POST route to register a user
userRouter.post('/api/register', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var user = new user_1.User({ email: email, password: password });
    user.save(function (err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        }
        else {
            res.status(200).send("Welcome to the club!");
        }
    });
});
exports.default = userRouter;
