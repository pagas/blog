import * as express from 'express';
import post from './post';
import main from './main';
import todo from './todo';
import user from './user';
const router = express.Router();

router.use('/post', post);
router.use('/main', main);
router.use('/todo', todo);
router.use('/user', user);

export default router;