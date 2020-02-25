"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api");
var router = express.Router();
router.use('/api', api_1.default);
exports.default = router;
