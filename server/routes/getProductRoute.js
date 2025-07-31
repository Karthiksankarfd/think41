const express = require("express");
const router = express.Router();
const productController = require("../controllers/getProducts");

router.get("/", productController); // GET /api/products/

module.exports = router;
