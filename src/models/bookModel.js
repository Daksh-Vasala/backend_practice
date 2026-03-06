const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  formats: [
    {
      type: String,
    },
  ],

  language: {
    type: String,
    enum: ["English", "Hindi", "Gujarati", "Spanish"],
  },
});

module.exports = mongoose.model("books", bookSchema);
