const Products = require("../model/product");

async function getProducts(req, res) {
  try {
    const products = await Products.find().limit(20);
    console.log(products)
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    // ✅ Send the response
    return res.status(200).json(products);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = getProducts;
