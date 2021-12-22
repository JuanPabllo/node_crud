import { Router } from 'express';
import { CreateCategoryController } from './controller/CreateCategoryController';
import { CreateVideoController } from './controller/CreateVideoController';
import { DeleteCategoryController } from './controller/DeleteCategoryController';
import { GetAllCategoriesController } from './controller/GetAllCategoriesController';
import { GetAllVideosController } from './controller/GetAllVideosController';
import { UpdateCategoryController } from './controller/UpdateCategoryController';

const router = Router();

router.post('/categories', new CreateCategoryController().handle);
router.get('/categories', new GetAllCategoriesController().handle);
router.delete('/categories/:id', new DeleteCategoryController().handle);
router.put('/categories/:id', new UpdateCategoryController().handle);

router.post('/videos', new CreateVideoController().handle);
router.get('/videos', new GetAllVideosController().handle);

export { router };
