// Bcrypt
import bcrypt from 'bcrypt';

// Model
import User from '../../../models/user.js';

const verifyUserValid = async (req, res, next) => {
  try {
    // Request ➜ Body
    const { email, password } = req.body;

    // DB ➜ User (find)
    const doc = await User.findOne({ email }).select('_id name surname email password');

    if (!doc) {
      // Response ➜ Status (401 ➜ Unauthorized)
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // User
    const user = JSON.parse(JSON.stringify(doc));

    // Hash ➜ Compare
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      // Response (401 ➜ Unauthorized)
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Request ➜ User (create)
    req.user = user;

    next();
  } catch (error) {
    // Response ➜ Status (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default verifyUserValid;
