const mongoose = require("mongoose");
const filterSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, },
    rating:  { type: String },
    price: { type: String},
    brand: { type: String}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Filter", filterSchema);