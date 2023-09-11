// Mongoose
import mongoose from 'mongoose';

// Schema
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    surname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

// Model
const model = mongoose.model('User', schema, 'users');

export default model;
