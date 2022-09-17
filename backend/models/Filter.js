const mongoose = require("mongoose");
const filterSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, },
    rating:  [String],
    price:  [ String],
    brand:  [ String]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Filter", filterSchema);