// Controller
import controller from '../../controllers/api/cities.js';

// Express
import { Router } from 'express';

const router = Router();

// CRUD
// CRUD ➜ Create
router.post('/', controller.Create);

// CRUD ➜ Read
router.get('/:id', controller.Read);
router.get('/', controller.Search);

// CRUD ➜ Update
router.put('/:id', controller.Update);

// CRUD ➜ Delete
router.delete('/:id', controller.Delete);

export default router;
