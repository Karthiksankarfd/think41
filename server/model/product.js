const mongoose = require("mongoose")

const Product = mongoose.Schema({
    id:{type:Number} ,
    cost:{type:Number } ,
    category:{type:String } ,
    name:{type:String} ,
    brand:{type:String},
    retail_price:{type:String},
    department:{type:String},
    sku:{type:String},
    distribution_center_id:{type:String}
})

module.exports = mongoose.model('product', Product);