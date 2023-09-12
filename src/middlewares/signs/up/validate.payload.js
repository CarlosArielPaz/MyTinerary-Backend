// Joi ➜ Schema
import validatePayloadSchema from './validate.payload.schema.js';

const validatePayload = async (req, res, next) => {
  try {
    // Request ➜ Body
    const body = req.body;

    // Joi ➜ Schema ➜ Validate
    await validatePayloadSchema.validateAsync(body, { abortEarly: false });

    next();
  } catch (error) {
    // Response ➜ Status (422 ➜ Unprocessable Entity)
    return res.status(422).json({ error });
  }
};

export default validatePayload;
