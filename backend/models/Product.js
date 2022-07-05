const mongoose = require("mongoose");
const { TRUE } = require("sass");
const { string } = require("yup/lib/locale");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    subPrice: { type: Number, default: 99 },
    discount: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, require: true },
    image: { type: String, require: true },
    cloudinary_id: { type: String },
    isFreeShip: { type: Boolean, default: false },
    isShipVN: { type: Boolean, default: false },
    rating: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);