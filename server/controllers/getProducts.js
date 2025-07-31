const Products = require("../model/product");

async function getProducts(req, res) {
  try {
    // Get page & limit from query params, fallback to defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    // Fetch products with pagination
    const products = await Products.find().skip(skip).limit(limit);

    // Total count for pagination info
    const total = await Products.countDocuments();

    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: products,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = getProducts;
