import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    fetch(`http://localhost:5000/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p className="text-center mt-10 text-lg">Loading product...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">No product found.</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <div className="space-y-2 text-sm text-gray-700">
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Department:</strong> {product.department}</p>
        <p><strong>SKU:</strong> {product.sku}</p>
        <p><strong>Retail Price:</strong> ₹{parseFloat(product.retail_price).toFixed(2)}</p>
        <p><strong>Cost Price:</strong> ₹{parseFloat(product.cost).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
