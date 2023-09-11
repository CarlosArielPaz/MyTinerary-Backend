// Mongoose
import mongoose from 'mongoose';

// Schema
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    itineraries: [{ type: mongoose.Types.ObjectId, ref: 'Itinerary', require: true }],
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

// Model
const model = mongoose.model('City', schema, 'cities');

export default model;
