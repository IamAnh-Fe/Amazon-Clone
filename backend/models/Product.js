const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    originalPrice: { type: Number },
    salePrice: { type: Number },
    price: { type: Number },
    sympol: {type: String, default: "$"},
    subPrice: { type: Number, default: 99 },
    discount: { type: Number },
    category: {type: String },
    brand: { type: String },
    rating: { type: Number },
    images : {type: Array, required: true },
    cloudinary_id: { type: String },
    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
