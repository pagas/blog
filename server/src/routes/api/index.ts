import * as express from 'express';
import articles from './articles';
import main from './main';
import todo from './todo';
import user from './user';
const router = express.Router();

router.use('/articles', articles);
router.use('/main', main);
router.use('/todo', todo);
router.use('/user', user);

export default router;