const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  languages: [
    {
      type: String,
    },
  ],

  region: {
    type: String,
    enum: ["North", "South", "East", "West", "Central"],
  },
});

module.exports = mongoose.model("states", stateSchema);
