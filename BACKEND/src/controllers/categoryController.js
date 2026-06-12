const pool = require('../db');
const { categories } = require('../data');

const findCategory = (categoryId) =>
  categories.find((category) => category.id === Number(categoryId));

const findSubcategory = (category, subcategoryId) =>
  category?.subcategories.find(
    (subcategory) => subcategory.id === Number(subcategoryId)
  );

exports.listCategories = (req, res) => {
  res.json({ categories });
};

exports.getCategoryById = (req, res) => {
  const category = findCategory(req.params.categoryId);

  if (!category) {
    return res.status(404).json({ error: 'Category not found.' });
  }

  res.json({ category });
};

exports.getSubcategoryById = (req, res) => {
  const category = findCategory(req.params.categoryId);

  if (!category) {
    return res.status(404).json({ error: 'Category not found.' });
  }

  const subcategory = findSubcategory(category, req.params.subcategoryId);

  if (!subcategory) {
    return res.status(404).json({ error: 'Subcategory not found.' });
  }

  res.json({ subcategory });
};

exports.getSubcategoryPhotos = (req, res) => {
  const category = findCategory(req.params.categoryId);

  if (!category) {
    return res.status(404).json({ error: 'Category not found.' });
  }

  const subcategory = findSubcategory(category, req.params.subcategoryId);

  if (!subcategory) {
    return res.status(404).json({ error: 'Subcategory not found.' });
  }

  res.json({ photos: subcategory.photos });
};

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );

    res.status(201).json({
      message: 'User registered successfully',
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    const user = result.rows[0];

    // Save login history
    await pool.query(
      'INSERT INTO login_history (user_id) VALUES ($1)',
      [user.id]
    );

    res.json({
      message: 'Login successful',
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
};