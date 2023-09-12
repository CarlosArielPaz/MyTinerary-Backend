// Model
import User from '../../../models/user.js';

const verifyUserExists = async (req, res, next) => {
  try {
    // Request ➜ Body
    const { email } = req.body;

    // DB ➜ User (find)
    const doc = await User.findOne({ email }).select('_id');

    if (doc) {
      // Response ➜ Status (406 Not Acceptable)
      return res.status(406).json({ error: 'Existing user' });
    }

    next();
  } catch (error) {
    // Response ➜ Status (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default verifyUserExists;
