import { Document } from 'mongoose';

export interface IArticleDocument extends Document {
    title: string;
    body: string;
    authorId: string;
}