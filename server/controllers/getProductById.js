const Product = require("../model/product");

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ id: Number(id) }); // ✅ custom field `id`

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getProductById;
