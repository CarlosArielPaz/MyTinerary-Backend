// Bcrypt
import bcrypt from 'bcryptjs';

const hash = (req, res, next) => {
  try {
    // Hash ➜ Generate
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        throw err;
      }

      // Request ➜ Body (update)
      req.body.password = hash;

      next();
    });
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default hash;
