// Controller
import controller from '../../controllers/api/itineraries.js';

// Express
import { Router } from 'express';

const router = Router();

// CRUD
// CRUD ➜ Create
router.post('/', controller.Create);

// CRUD ➜ Read
router.get('/:id', controller.Read);
router.get('/', controller.ReadAll);
router.get('/city/:id', controller.ReadCity);

// CRUD ➜ Update
router.put('/:id', controller.Update);

// CRUD ➜ Delete
router.delete('/:id', controller.Delete);

export default router;
