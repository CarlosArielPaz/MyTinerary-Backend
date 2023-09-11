// Model
import City from '../../models/city.js';

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
/*     let city = new City({
      name,
      country,
      itineraries: [],
      image,
    }); */

    // DB (save)
    //const doc = await city.save();

    // DB (create)
    const doc = await City.create({
      name,
      country,
      itineraries: [],
      image,
    });

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
    const doc = await City.findById(id, 'name country image itineraries').populate({ path: 'itineraries', select: 'name operator image duration price likes hashtags', options: { sort: { createdAt: 'asc' } } });

    // Response (200 ➜ OK)
    return res.status(200).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

const Search = async (req, res) => {
  try {
    // Request (query)
    const { search } = req.query;

    // Regular expression
    const re = new RegExp(search ? `^(${search})` : '', 'i');

    // DB (find)
    const docs = await City.find({ name: re }, 'name country image itineraries').sort({ name: 'asc' });

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
    const { name, country, image } = req.body;

    // Verify (data)
    if (!name || !country || !image) {
      // Response (400 ➜ Bad Request)
      return res.status(400).json({ message: 'Missing send data' });
    }

    // DB (update)
    const doc = await City.findByIdAndUpdate(id, { name, country, image });

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
    const doc = await City.findByIdAndDelete(id);

    // Response (200 ➜ OK)
    return res.status(200).json(doc);
  } catch (error) {
    // Response (500 ➜ Internal Server Error)
    return res.status(500).json({ message: error.message });
  }
};

export default { Create, Read, Search, Update, Delete };
