"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true, trim: true },
    body: { type: String, required: true },
    authorId: { type: String, required: true, ref: 'User' },
    created: { type: Date, default: Date.now }
});
var Post = mongoose_1.model('Post', PostSchema);
exports.Post = Post;
