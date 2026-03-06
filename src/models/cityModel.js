const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },

  landmarks: [
    {
      type: String,
    },
  ],

  cityType: {
    type: String,
    enum: ["Metro", "Urban", "Town"],
  },
});

module.exports = mongoose.model("city", citySchema);


//{
//   "landmarks": ["Sabarmati Ashram", "Kankaria Lake"],
//   "cityType": "Metro"
// }