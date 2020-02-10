import * as express from 'express';
import {TodoModel} from '../../todo';
const todoRouter = express.Router();

todoRouter.get('/todo', async (req: express.Request, resp: express.Response) => {
    try {
        let items:any = await TodoModel.find({});
        items = items.map((item) => {
            return {id: item._id, description: item.description};
        });
        resp.json(items);
    } catch (err) {
        resp.status(500);
        resp.end();
        console.error(err)
    }
});

todoRouter.post('/todo', async (req: express.Request, resp: express.Response) => {
    const description = req.body['description'];
    const item = new TodoModel({description:description});
    await item.save();
    resp.end();
});

todoRouter.put('/todo/:id', async (req: express.Request, resp: express.Response) => {
    const description = req.params.body;
    const id = req.params.id;
    await TodoModel.findByIdAndUpdate(id, {description: description});
    resp.end();
});

todoRouter.delete('/todo/:id', async (req: express.Request, resp: express.Response) => {
    const id = req.params.id;
    await TodoModel.findByIdAndRemove(id);
    resp.end();
});

export default todoRouter;