// Controller
import controller from '../controllers/signs.js';

// Middleware
// Middleware ➜ Sign Up
import validatePayloadSignUp from '../middlewares/signs/up/validate.payload.js';
import verifyUserExistsSignUp from '../middlewares/signs/up/verify.user.exists.js';
import generateHashPasswordSignUp from '../middlewares/signs/up/generate.hash.password.js';

// Middleware ➜ Sign In
import validatePayloadSignIn from '../middlewares/signs/in/validate.payload.js';
import verifyUserValidSignIn from '../middlewares/signs/in/verify.user.valid.js';
import generateTokenJWTSignIn from '../middlewares/signs/in/generate.token.jwt.js';

// Middleware ➜ Sign Out



//import validatePayloadSignIn from '../middlewares/validators/signs/in.js';

// Middleware ➜ Hash

// Middleware ➜ JWT
//import signTokenJWT from '../middlewares/jwt/sign.js';

// Express
import { Router } from 'express';

// Router
const router = Router();

// Router ➜ Sign Up
router.post('/up', validatePayloadSignUp, verifyUserExistsSignUp, generateHashPasswordSignUp, controller.Up);

// Router ➜ Sign In
router.post('/in', validatePayloadSignIn, verifyUserValidSignIn, generateTokenJWTSignIn, controller.In);

export default router;
