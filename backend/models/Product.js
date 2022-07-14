const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: {type: String},
  comment: {type: String},
  star: {type: Number},
},
{timestamps: true})

const replyCommentSchema = new mongoose.Schema({
  content: {type: String},
  isAdmin: {type: Boolean},
  nameUser: {type: String},
  byUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
},
{timestamps: true}
)

const commentSchema = new mongoose.Schema({
  author: {type: String},
  status: {type: String},
  isAdmin: {type: Boolean},
  avatar: {type: String},
  content: {type:String},
  byUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  replies: [replyCommentSchema]
},
{timestamps: true})

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number },
    subPrice: { type: Number, default: 99 },
    discount: { type: Number },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    numReviews: { type: Number },
    rating: { type: Number },
    image: { type: String, require: true },
    cloudinary_id: { type: String },
    isFreeShip: { type: Boolean, default: false },
    isShipVN: { type: Boolean, default: false },
     
    reviews: [reviewSchema],
    comments: [commentSchema],

  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
