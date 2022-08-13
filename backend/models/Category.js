const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    slug: {type: String},
    listProduct:  [{
    type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
     }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", categorySchema);