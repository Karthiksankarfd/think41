import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const navigateTo = (id) => {
    navigate(`product/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading products...</p>;

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="w-64 p-4 border border-gray-200 rounded-lg shadow hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600"><strong>Brand:</strong> {product.brand}</p>
          <p className="text-sm text-gray-600"><strong>Category:</strong> {product.category}</p>
          <p className="text-sm text-gray-800 mt-2"><strong>Price:</strong> ₹{parseFloat(product.retail_price).toFixed(2)}</p>
          <button
            onClick={() => navigateTo(product.id)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Index;
