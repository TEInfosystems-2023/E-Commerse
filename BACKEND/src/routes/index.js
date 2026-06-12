const express = require('express');
const exampleController = require('../controllers/exampleController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.get('/hello', exampleController.hello);
router.get('/categories', categoryController.listCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.get(
  '/categories/:categoryId/subcategories/:subcategoryId',
  categoryController.getSubcategoryById
);
router.get(
  '/categories/:categoryId/subcategories/:subcategoryId/photos',
  categoryController.getSubcategoryPhotos
);

router.post('/register', categoryController.registerUser);
router.post('/login', categoryController.loginUser);

module.exports = router;
