const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "https://res.cloudinary.com/dxk9kfxk1/image/upload/v1662368154/amazon/default._CR0_0_1024_1024_SX460__kxjqwa.jpg"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
