// User.js
import {Schema, Model, model} from 'mongoose';
import * as bcrypt from 'bcrypt';
import {IUserDocument} from './interfaces/IUserDocument';

const saltRounds = 10;

export interface IUser extends IUserDocument {
    comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

UserSchema.pre('save', function (next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
        // Saving reference to this because of changing scopes
        const document: any = this;
        return bcrypt.hash(document.password, saltRounds).then((hash: string) => {
            document.password = hash;
            next();
        });
    } else {
        next();
    }
});

UserSchema.methods.comparePassword = function (password): Promise<boolean> {
    return bcrypt.compare(password, this.password);
}

const User = model<IUser>('User', UserSchema);
export {User};

