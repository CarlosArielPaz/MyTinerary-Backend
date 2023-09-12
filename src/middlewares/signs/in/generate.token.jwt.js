// JWT
import jwt from 'jsonwebtoken';

const generateTokenJWT = (req, res, next) => {
  try {
    // Request ➜ User
    const user = req.user;

    // JWT ➜ Token (sign)
    const token = jwt.sign({ _id: user._id }, process.env.APP_HTTP_JWT_KEY, { algorithm: 'HS256', expiresIn: '1h' });

    // Request ➜ User (update)
    req.user.token = token;

    next();
  } catch (error) {
    // Response ➜ Status (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default generateTokenJWT;
