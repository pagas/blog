import {Post} from '../models/post';
import {Request, Response} from 'express';

async function getAll(req:Request, res:Response) {
    const posts = await Post.find().limit(10);
    res.json(posts);
}

function getId(req:Request, res:Response) {
    return Post.findById(req.params.id);
}

function removeId(req:Request, res:Response) {
    return Post.findByIdAndRemove(req.params.id);
}

async function create(req:Request, res:Response) {
    const post = await Post.create(req.body);
    res.json(post);
}

function updateId(req:Request, res:Response) {
    return Post.findByIdAndUpdate(req.params.id, req.params.data);
}

export {getId, getAll, removeId, updateId, create}