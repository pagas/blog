import * as express from 'express';
const mainRouter = express.Router();

mainRouter.get('/api/home', function(req, res) {
    res.send('Welcome!');
});
mainRouter.get('/api/secret', function(req, res) {
    res.send('The password is potato');
});

export {mainRouter};