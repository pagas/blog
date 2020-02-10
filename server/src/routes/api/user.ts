import * as express from 'express';
const userRouter = express.Router();
import {User} from '../../models/user';

// POST route to register a user
userRouter.post('/api/register', function(req, res) {
    const { email, password } = req.body;
    const user = new User({ email, password });
    user.save(function(err) {
        if (err) {
            res.status(500)
                .send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    });
});

export default userRouter;