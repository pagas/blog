"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var mongoose = require("mongoose");
var config_1 = require("../config");
var PORT = config_1.default.port;
var MONGO_URI = 'mongodb://localhost:27017/blog';
app_1.default.listen(PORT, function () {
    console.log("Server started on port " + PORT);
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
    mongoose.connection.on('open', function () {
        console.info('Connected to Mongo.');
    });
    mongoose.connection.on('error', function (err) {
        console.error(err);
    });
});
