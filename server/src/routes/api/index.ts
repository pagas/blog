import * as express from 'express';
import post from './post';
import main from './main';
import todo from './todo';
import user from './user';
const router = express.Router();

router.use(main);
router.use('/posts', post);
router.use('/todo', todo);
router.use('/user', user);

export default router;