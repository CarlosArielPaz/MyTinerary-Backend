// JWT
import jwt from 'jsonwebtoken';

const token = (req, res, next) => {
  try {
    // JWT ➜ Token (sign)
    jwt.sign({ project: 'MyTinerary' }, process.env.APP_HTTP_JWT_KEY, { algorithm: 'HS256' }, (err, token) => {
      if (err) {
        throw err;
      }

      // Request ➜ User (update)
      req.user.token = token;

      next();
    });
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default token;
