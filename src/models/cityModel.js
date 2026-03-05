const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
});

module.exports = mongoose.model("city", citySchema);