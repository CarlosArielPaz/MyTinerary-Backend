// Schema
import schema from './schemas/in.js';

const validate = (req, res, next) => {
  try {
    // Validate
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Response (422 ➜ Unprocessable Entity)
      return res.status(422).json({ error });
    } else {
      next();
    }
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ error });
  }
};

export default validate;
