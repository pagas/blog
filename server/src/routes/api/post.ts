import * as express from 'express';
const router = express.Router();
import * as postController from '../../controllers/post';

router.get('/', postController.getAll);

router.post('/create', postController.create);

router.put('/update/:id', postController.updateId);

router.get('/:id', postController.getId);

router.delete('/:id', postController.removeId);


export default router;