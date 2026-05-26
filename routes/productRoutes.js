const express = require("express");

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// CREATE PRODUCT
router.post("/", createProduct);

// GET ALL PRODUCTS
router.get("/", getProducts);

// GET SINGLE PRODUCT
router.get("/:id", getSingleProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;