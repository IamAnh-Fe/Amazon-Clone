const User = require("../models/User");
const APIfeatures = require("../lib/features")
const asyncHandler = require("express-async-handler");

const userController = {
  //GET ALL USER
  getAllUsers: asyncHandler(async (req, res) => {
 const features = new APIfeatures(User.find(), req.query)
      .paginating15()
      .sorting()
      .searching()
      .filtering();
    const result = await Promise.allSettled([
      features.query,
      User.countDocuments(), //count number of product.
    ]);
    const user = result[0].status === "fulfilled" ? result[0].value : [];
    const count = result[1].status === "fulfilled" ? result[1].value : 0;    
    return res.status(200).json({user, count});
  }),

  //DELETE A USER
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;