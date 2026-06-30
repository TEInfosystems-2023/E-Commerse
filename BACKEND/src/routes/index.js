const express = require("express");
const exampleController = require("../controllers/exampleController");
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");

const router = express.Router();

// Test Route
router.get("/hello", exampleController.hello);

// Category Routes
router.get("/categories", categoryController.listCategories);

router.get(
  "/categories/:categoryId",
  categoryController.getCategoryById
);

router.get(
  "/categories/:categoryId/subcategories/:subcategoryId",
  categoryController.getSubcategoryById
);

router.get(
  "/categories/:categoryId/subcategories/:subcategoryId/photos",
  categoryController.getSubcategoryPhotos
);

// Authentication Routes
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/verify-email/:token", authController.verifyEmail);

module.exports = router;