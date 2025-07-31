const express = require("express");
const router = express.Router();
const getProductById = require("../controllers/getProductById");

router.get("/:id", getProductById);

module.exports = router;
