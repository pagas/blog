"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var request_logger_middleware_1 = require("./request_logger_middleware");
var todo_controller_1 = require("./routes/todo.controller");
var main_controller_1 = require("./routes/main.controller");
var user_controller_1 = require("./routes/user.controller");
var app = express();
app.use(cors());
app.use(bodyparser.json());
// TODO - add more middle ware
app.use(request_logger_middleware_1.requestLoggerMiddleware);
app.use(todo_controller_1.todoRouter);
app.use(main_controller_1.mainRouter);
app.use(user_controller_1.userRouter);
exports.default = app;
