import {Document} from 'mongoose';

export interface IPostDocument extends Document {
    title: string;
    body: string;
    authorId: string;
    created: Date
}