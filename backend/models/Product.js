const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please Enter title"],
      unique: true,
    },
    category: {
      type: String,
    required: [true, "Please Enter Product Category"],
    },
    price: {
      type: Number,
    required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],

    },
    discount: {
      type: Number,
      default: 0,

    },
    rating: {
      type: Number,
      require: true,
    },
    images: {
      type: String
    },
     cloudinary_id: { type: String }


  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);