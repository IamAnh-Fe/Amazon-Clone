const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {type: String},
  comment: {type: String},
  star: {type: Number},
},
{timestamps: true})

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    price: { type: Number },
    sympol: {type: String, default: "$"},
    subPrice: { type: Number, default: 99 },
    discount: { type: Number },
    category: { type: mongoose.Schema.Types.ObjectId,
                ref: "Category" },
    brand: { type: String, required: true },
    numReviews: { type: Number },
    rating: { type: Number },
    image: { type: String, require: true },
    images : {type: Array},
    cloudinary_id: { type: String },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
