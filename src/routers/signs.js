// Controller
import controller from '../controllers/signs.js';

// Middleware
// Middleware ➜ Validator
import validatePayloadSignUp from '../middlewares/validators/signs/up.js';
import validatePayloadSignIn from '../middlewares/validators/signs/in.js';

// Middleware ➜ Hash
import generateHashPassword from '../middlewares/hashs/signs/up.js';
import verifyHashPassword from '../middlewares/hashs/signs/in.js';

// Middleware ➜ JWT
import signTokenJWT from '../middlewares/jwt/sign.js';

// Express
import { Router } from 'express';

const router = Router();

// Sign
// Sign ➜ Up
router.post('/up', validatePayloadSignUp, generateHashPassword, controller.Up);

// Sign ➜ In
router.post('/in', validatePayloadSignIn, verifyHashPassword, signTokenJWT, controller.In);

export default router;
