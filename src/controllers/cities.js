// Model
import City from '../models/city.js';

// CRUD
// CRUD ➜ Create
const Create = async (req, res) => {
  try {
    // Request (body)
    const { name, country, image } = req.body;

    // Verify (data)
    if (!name || !country || !image) {
      // Response (400 ➜ Bad Request)
      return res.status(400).json({ message: 'Missing send data' });
    }

    // DB (model)
    let city = new City({
      name,
      country,
      image,
    });

    // DB (save)
    const json = await city.save();

    // Response (201 ➜ Created)
    return res.status(201).json(json);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: err.message });
  }
};

// CRUD ➜ Read
const Read = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // DB (find)
    const json = await City.find({ _id: id });

    // Response (200 ➜ OK)
    return res.status(200).json(json);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: err.message });
  }
};

const ReadAll = async (req, res) => {
  try {
    // Request (query)
    const { search } = req.query;

    // Regular expression
    const re = new RegExp(search ? `^(${search})` : '', 'i');

    // DB (find)
    const json = await City.find({ name: re }, 'name country image').sort({ name: 'asc' });

    // Response (200 ➜ OK)
    return res.status(200).json(json);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: err.message });
  }
};

// CRUD ➜ Update
const Update = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // Request (body)
    const { name, country, image } = req.body;

    // Verify (data)
    if (!name || !country || !image) {
      // Response (400 ➜ Bad Request)
      return res.status(400).json({ message: 'Missing send data' });
    }

    // DB (update)
    const json = await City.findByIdAndUpdate(id, { name, country, image });

    // Response (200 ➜ OK)
    return res.status(200).json(json);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: err.message });
  }
};

// CRUD ➜ Delete
const Delete = async (req, res) => {
  try {
    // Request (params)
    const { id } = req.params;

    // DB (delete)
    const json = await City.findByIdAndDelete(id);

    // Response (200 ➜ OK)
    return res.status(200).json(json);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: err.message });
  }
};

export default { Create, Read, ReadAll, Update, Delete };
