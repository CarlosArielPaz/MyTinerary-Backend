// Bcrypt
import bcrypt from 'bcrypt';

const generateHashPassword = async (req, res, next) => {
  try {
    // Request ➜ Body
    const { password } = req.body;

    // Hash ➜ Generate
    const hash = await bcrypt.hash(password, 10);

    // Request ➜ Body (update)
    req.body.password = hash;

    next();
  } catch (error) {
    // Response ➜ Status (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default generateHashPassword;
