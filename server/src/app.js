"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var cookieParser = require("cookie-parser");
var request_logger_middleware_1 = require("./middleware/request_logger_middleware");
var routes_1 = require("./routes");
var app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(cookieParser());
// TODO - add more middle ware
app.use(request_logger_middleware_1.requestLoggerMiddleware);
app.use(routes_1.default);
exports.default = app;
