// Model
import User from '../../../models/user.js';

// Bcrypt
import bcrypt from 'bcryptjs';

const authenticated = async (req, res, next) => {
  try {
    // Body
    const { email } = req.body;

    // DB ➜ User (find)
    let doc = await User.findOne({ email });
    //console.log("DOC 1", doc);
    
    if (!doc) {
      // Response (401 ➜ Unauthorized)
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    //const user = doc.toObject();
    const user = JSON.parse(JSON.stringify(doc));

    //console.log("DOC 2", user);
    //console.log("DOC 3", user._id);
    //console.log("DOC 4", user.name);

    // Hash ➜ Verify
    bcrypt.compare(req.body.password, user.password, (err, valid) => {
      if (err) {
        throw err;
      }

      if (!valid) {
        // Response (401 ➜ Unauthorized)
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Request ➜ User (create)
      //req.user = JSON.parse(JSON.stringify(doc));
      req.user = user;

      next();
    });
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default authenticated;
