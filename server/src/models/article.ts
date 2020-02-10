import {Schema, model} from "mongoose";
import {IArticleDocument} from './interfaces/IArticleDocument';

export interface IArticle extends IArticleDocument {
}

const ArticleSchema = new Schema({
    title: {type: String, required: true, unique: true, trim: true},
    body: {type: String, required: true},
    authorId: {type: String, required: true},
    created: {type: Date, default: Date.now, ref: 'User', required: true}
});

const Article = model<IArticle>('Article', ArticleSchema);
export {Article};
