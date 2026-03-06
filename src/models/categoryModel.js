const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  
  description: {
    type: String,
    default: "",
  },

  tags: [
    {
      type: String,
    },
  ],

  type: {
    type: String,
    enum: ["Technical", "Educational", "Fiction", "Non-Fiction"],
  },
});

module.exports = mongoose.model("Category", categorySchema);
