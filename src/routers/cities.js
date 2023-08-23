import { Router } from 'express';

import { Create, Read, ReadAll, Update, Delete } from '../controllers/cities.js';

const router = Router();

// CRUD
// CRUD ➜ Create
router.post('/', Create);

// CRUD ➜ Read
router.get('/:id', Read);
router.get('/', ReadAll);

// CRUD ➜ Update
router.put('/:id', Update);

// CRUD ➜ Delete
router.delete('/:id', Delete);

export default router;
