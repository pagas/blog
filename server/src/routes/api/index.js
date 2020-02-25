"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var post_1 = require("./post");
var main_1 = require("./main");
var todo_1 = require("./todo");
var user_1 = require("./user");
var router = express.Router();
router.use('/post', post_1.default);
router.use('/main', main_1.default);
router.use('/todo', todo_1.default);
router.use('/user', user_1.default);
exports.default = router;