const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const connectDb = require('../db-config/dbconnection'); // your file
const Product = require('../model/product');    // your model
const path = require("path")


const filePath = path.resolve(__dirname, '..', 'dataassets', 'products.csv');
fs.createReadStream(filePath)
async function importCSV() {
  await connectDb(); // connect to DB

  const records = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      // Optionally convert strings to numbers, dates, etc.
      records.push(row);
    })
    .on('end', async () => {
      try {
        await Product.insertMany(records);
        console.log('✅ CSV data imported to MongoDB Atlas');
      } catch (err) {
        console.error('❌ Error inserting data:', err);
      } finally {
        mongoose.connection.close();
      }
    });
}

module.exports =  importCSV;
