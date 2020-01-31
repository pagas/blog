"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TodoSchema = new mongoose.Schema({
    description: String
});
var TodoModel = mongoose.model('Todo', TodoSchema);
exports.TodoModel = TodoModel;
