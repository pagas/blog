"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// User.js
var mongoose_1 = require("mongoose");
var bcrypt = require("bcrypt");
var saltRounds = 10;
var UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
UserSchema.pre('save', function (next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        var document_1 = this;
        return bcrypt.hash(document_1.password, saltRounds).then(function (hash) {
            document_1.password = hash;
            next();
        });
    }
    else {
        next();
    }
});
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};
var User = mongoose_1.model('User', UserSchema);
exports.User = User;
