import {Schema, model} from "mongoose";
import {IPostDocument} from './interfaces/IPostDocument';

export interface IPost extends IPostDocument {
}

const ArticleSchema = new Schema({
    title: {type: String, required: true, unique: true, trim: true},
    body: {type: String, required: true},
    authorId: {type: String, required: true},
    created: {type: Date, default: Date.now, ref: 'User', required: true}
});

const Post = model<IPost>('Post', ArticleSchema);
export {Post};
