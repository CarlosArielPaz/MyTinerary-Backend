// Middleware
// Middleware ➜ Sign Up
import validatePayloadSignUp from '../middlewares/signs/up/validate.payload.js';
import verifyUserExistsSignUp from '../middlewares/signs/up/verify.user.exists.js';
import generateHashPasswordSignUp from '../middlewares/signs/up/generate.hash.password.js';

// Middleware ➜ Sign In
import validatePayloadSignIn from '../middlewares/signs/in/validate.payload.js';
import verifyUserValidSignIn from '../middlewares/signs/in/verify.user.valid.js';
import generateTokenJWTSignIn from '../middlewares/signs/in/generate.token.jwt.js';

// Middleware ➜ Sign In Token

// Middleware ➜ Sign Out

// Controller
import controller from '../controllers/signs.js';

// Express
import { Router } from 'express';

// Router
const router = Router();

// Router ➜ Sign Up
router.post('/up', validatePayloadSignUp, verifyUserExistsSignUp, generateHashPasswordSignUp, controller.Up);

// Router ➜ Sign In
router.post('/in', validatePayloadSignIn, verifyUserValidSignIn, generateTokenJWTSignIn, controller.In);
router.post('/in/token', controller.InToken);

// Router ➜ Sign Out
router.post('/out', controller.Out);

export default router;
