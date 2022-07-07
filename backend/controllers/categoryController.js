const Category = require("../models/Category")
const asyncHandler = require("express-async-handler");
const categoryController = {
      getAllCategory: asyncHandler(async (req, res) => {
    const getCategory = await Category.find({"Product.category" : "keyboard"} )
    res.send(getCategory);
  }),

    postCategory: asyncHandler(async (req, res) => {

   const newCategory = new Category(req.body);
   const saveCategory = await newCategory.save()
  if (newCategory) {
      return res
        .status(200)
        .send({ message: "New category Created", saveCategory });
    } else {
      res.send("error add category");
    }
    }),
}
module.exports = categoryController;