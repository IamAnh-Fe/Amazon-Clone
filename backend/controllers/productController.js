const Product = require("../models/Product")
const cloudinary = require('../config/cloudinary/cloudinary')
const asyncHandler = require("express-async-handler");
const productController = {
  //create product - admin
  postProduct: asyncHandler(async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "amazon",
    });
    const newProduct = new Product({
      name: req.body.name,
      originalPrice: req.body.originalPrice,
      salePrice: req.body.salePrice,
      subPrice: req.body.subPrice,
      discount: req.body.discount,
      category: req.body.category,
      brand: req.body.brand,
      image: result.secure_url,
      cloudinary_id: result.public_id,
      rating: req.body.rating,
      isFreeShip: req.body.isFreeShip,
      isShipVN: req.body.isShipVN,
    });
    const saveProduct = await newProduct.save();
    if (saveProduct) {
      return res
        .status(200)
        .send({ message: "New Product Created", saveProduct });
    } else {
      res.send("error add product");
    }
  }),
  //get all product
  getAllProduct: async (req, res) => {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get all product
  getAllCategory: asyncHandler(async (req, res) => {
    const getCategory = await Product.find({"Product.category" : "keyboard"} )
    res.send(getCategory);
  }),
  //delete product
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = productController;