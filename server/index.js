const express = require("express");
const app = express();
const connectDB = require("./db-config/dbconnection")
const loadcsv = require("./dataassets/importCSV");

// loadcsv(); // Uncomment to import CSV once

connectDB()


const getProductRoutes = require("./routes/getProductRoute"); 
const getProductById = require("./routes/getProductOnId")

// Middleware to handle product routes
app.use("/api/products", getProductRoutes); 
app.use("/api/products" , getProductById)
app.listen(5000, () => {
  console.log("Server is running on port 5000"); 
});
