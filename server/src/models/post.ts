import {Schema, model} from "mongoose";
import {IPostDocument} from './interfaces/IPostDocument';

export interface IPost extends IPostDocument {
}

const PostSchema = new Schema({
    title: {type: String, required: true, unique: true, trim: true},
    body: {type: String, required: true},
    authorId: {type: String, required: true, ref: 'User'},
    created: {type: Date, default: Date.now}
});

const Post = model<IPost>('Post', PostSchema);
export {Post};
