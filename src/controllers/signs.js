// JWT
import jwt from 'jsonwebtoken';

// Model
import User from '../models/user.js';

// Sign
// Sign Up
const Up = async (req, res) => {
  try {
    // Request ➜ Body
    const body = req.body;

    // DB ➜ Create
    const doc = await User.create(body);

    // JWT ➜ Token (sign)
    const token = jwt.sign({ _id: doc._id }, process.env.APP_HTTP_JWT_KEY, { algorithm: 'HS256', expiresIn: '1h' });

    // Response ➜ Payload
    const payload = {
      name: doc.name,
      surname: doc.surname,
      email: doc.email,
      token,
    };

    // Response ➜ Status (201 ➜ Created)
    return res.status(201).json(payload);
  } catch (error) {
    // Response ➜ Status (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

// Sign In
const In = async (req, res) => {
  // Request ➜ User
  const user = req.user;

  // Payload
  const payload = {
    name: user.name,
    surname: user.surname,
    email: user.email,
    token: user.token,
  };

  // Response ➜ Status (200 ➜ OK)
  return res.status(200).json(payload);
};

const InToken = (req, res) => {};

// Sign Out
const Out = (req, res) => {};

export default { Up, In, InToken, Out };
