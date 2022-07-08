const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    subPrice: { type: Number, default: 99 },
    discount: { type: Number },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number },
    image: { type: String, require: true },
    cloudinary_id: { type: String },
    isFreeShip: { type: Boolean, default: false },
    isShipVN: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
