const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/2026_test")
    .then(() => {
      console.log("Database connected ✅");
    })
    .catch(() => {
      console.log("Database failed to connect ❌");
    })
}

module.exports = dbConnect;