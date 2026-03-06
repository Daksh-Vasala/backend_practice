const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  
  price: {
    type: Number,
  },

  color:[{
    type: String
  }],

  size:{
    enum: ["S", "M", "L", "XL"],
    type: String
  }
})

module.exports = mongoose.model("products", productSchema);