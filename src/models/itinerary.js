import mongoose from 'mongoose';

// Schema
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    operator: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    duration: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    likes: {
      type: Number,
      require: true,
    },
    hashtags: {
      type: [String],
      require: true,
    },
    _idCity: { type: mongoose.Types.ObjectId, ref: 'City', require: true },
  },
  {
    timestamps: true,
  },
);

// Model
const model = mongoose.model('Itinerary', schema, 'itineraries');

export default model;
