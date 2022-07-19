const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    name: String,
    comment: String,
    id: String,
    star: Number,
    reply: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
