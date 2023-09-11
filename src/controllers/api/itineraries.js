// Model
import Itinerary from '../../models/itinerary.js';

// CRUD
// CRUD ➜ Create
const Create = async (req, res) => {
  try {
    // Request (body)
    const { name, operator, image, duration, price, hashtags, _idCity } = req.body;

    // Verify (data)
    if (!name || !operator || !image || !duration || !price || !hashtags || !_idCity) {
      // Response (400 ➜ Bad Request)
      return res.status(400).json({ message: 'Missing send data' });
    }

    // DB (model)
    let itinerary = new Itinerary({
      name,
      operator,
      image,
      duration,
      price,
      likes: 0,
      hashtags,
      _idCity,
    });

    // DB (save)
    const doc = await itinerary.save();

    // Response (201 ➜ Created)
    return res.status(201).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

// CRUD ➜ Read
const Read = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // DB (find)
    //const doc = await Itinerary.findById(id, 'name operator image duration price likes hashtags _idCity');
    const doc = await Itinerary.findById(id);

    // Response (200 ➜ OK)
    return res.status(200).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

const ReadAll = async (req, res) => {
  try {
    // DB (find)
    const docs = await Itinerary.find();

    // Response (200 ➜ OK)
    return res.status(200).json(docs);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

const ReadCity = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // DB (find)
    const docs = await Itinerary.find({ _idCity: id }).sort({ name: 'asc' });

    // Response (200 ➜ OK)
    return res.status(200).json(docs);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

// CRUD ➜ Update
const Update = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // Request (body)
    const { name, operator, image, duration, price, likes, hashtags } = req.body;

    // Verify (data)
    if (!name || !operator || !image || !duration || !price || !likes || !hashtags) {
      // Response (400 ➜ Bad Request)
      return res.status(400).json({ message: 'Missing send data' });
    }

    // DB (update)
    const doc = await Itinerary.findByIdAndUpdate(id, { name, operator, image, duration, price, likes, hashtags });

    // Response (200 ➜ OK)
    return res.status(200).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

// CRUD ➜ Delete
const Delete = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // DB (delete)
    const doc = await Itinerary.findByIdAndDelete(id);

    // Response (200 ➜ OK)
    return res.status(200).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

export default { Create, Read, ReadAll, ReadCity, Update, Delete };
