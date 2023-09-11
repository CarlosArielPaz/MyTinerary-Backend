// Model
import User from '../models/user.js';

// Sign
// Sign ➜ Up
const Up = async (req, res) => {
  try {
    // Body
    const body = req.body;

    // DB (create)
    const doc = await User.create(body);

    // Response (201 ➜ Created)
    return res.status(201).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

// Sign ➜ In
const In = async (req, res) => {
  //console.log(req.body);
  //console.log('-----------------------------------------------------------------');
  //console.log(req);
  //console.log(req.user);
  //console.log(req.user.name);
  //console.log(req.user.token);

  // Payload
  const payload = {
    name: req.user.name,
    surname: req.user.surname,
    token: req.user.token,
  };

  // Response (200 ➜ OK)
  return res.status(200).json(payload);
};

export default { Up, In };
