const mongoose = require("mongoose");
const categoryThumbSchema = new mongoose.Schema(
  {
        image: { type: String, require: true },
        cloudinary_id: { type: String },
        name: { type: String},
        slug: { type: String},
  },
  { timestamps: true }
);
module.exports = mongoose.model("CategoryThumb", categoryThumbSchema);