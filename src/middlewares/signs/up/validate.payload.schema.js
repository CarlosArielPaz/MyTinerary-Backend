// Joi
import joi from 'joi';

const validatePayloadSchema = joi.object({
  name: joi.string().trim().min(3).max(30).required(),

  surname: joi.string().trim().min(3).max(30).required(),

  email: joi.string().trim().email().required(),

  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,50}$')).required(),

  image: joi.string().min(0).max(250),

  country: joi.string().min(0).max(50),
});

export default validatePayloadSchema;
