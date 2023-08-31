// Controller
import Controller from '../controllers/cities.js';

// Express
import { Router } from 'express';

const router = Router();

// CRUD
// CRUD ➜ Create
router.post('/', Controller.Create);

// CRUD ➜ Read
router.get('/:id', Controller.Read);
router.get('/', Controller.ReadAll);

// CRUD ➜ Update
router.put('/:id', Controller.Update);

// CRUD ➜ Delete
router.delete('/:id', Controller.Delete);

export default router;
