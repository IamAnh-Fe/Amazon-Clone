const mongoose = require("mongoose");
const filterSchema = new mongoose.Schema(
  {
    category: { type: String },
    brand:  [ String]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Filter", filterSchema);