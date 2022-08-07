const mongoose = require("mongoose");
const productFeed = new mongoose.Schema({
        image: { type: String, require: true },
        cloudinary_id: { type: String },
        name: { type: String},
        slug: { type: String},
})
const collectionSchema = new mongoose.Schema({
    title: { type: String },
    items:[productFeed ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Collection", collectionSchema);
