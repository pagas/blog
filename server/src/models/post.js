"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ArticleSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true, trim: true },
    body: { type: String, required: true },
    authorId: { type: String, required: true },
    created: { type: Date, default: Date.now, ref: 'User', required: true }
});
var Post = mongoose_1.model('Post', ArticleSchema);
exports.Post = Post;
