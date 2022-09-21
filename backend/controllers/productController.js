const Product = require("../models/Product")
const cloudinary = require('../config/cloudinary/cloudinary')
const asyncHandler = require("express-async-handler");
const APIfeatures = require("../lib/features")
const PinComment = require("../utils/pinComment")

const productController = {
  //  //get all product
  getAllProduct: asyncHandler(async (req, res) => {
    const features = new APIfeatures(Product.find(), req.query)
      .paginating()
      .sorting()
      .searching()
      .filtering();
    const result = await Promise.allSettled([
      features.query,
      Product.countDocuments(), //count number of product.
    ]);

    const product = result[0].status === "fulfilled" ? result[0].value : [];
    const count = result[1].status === "fulfilled" ? result[1].value : 0;

    return res.status(200).json({product, count});
  }),
  //get product
  getProduct: asyncHandler(async (req, res) => {
    const features = new APIfeatures(Product.find({ "category": req.params.category}), req.query)
      .paginating()
      .sorting()
      .searching()
      .filtering();
      
      const result = await Promise.allSettled([
          features.query,
          Product.countDocuments(), //count number of product.
        ]);
        const product = result[0].status === "fulfilled" ? result[0].value : [];
        const count = result[1].status === "fulfilled" ? result[1].value : 0;
        return res.status(200).json({product, count});
      }),
 
  //GET ID PRODUCT
  findProductId: asyncHandler(async (req, res) => {
    const getProductId = await Product.findById(req.params.id);
    if (getProductId) {
      return res.status(200).send(getProductId);
    } else {
      res.send("error get ID product");
    }
  }),
  //Find Category
     findCategory: asyncHandler(async (req, res) => {
    const getCategory = await Product.find({ "category": "keyboards"});
    if (getCategory) {
      return res.status(200).send(getCategory);
    } else {
      res.send("error get category product");
    }
  }),


  //CREATE PRODUCT - ADMIN
  postProduct: asyncHandler(async (req, res) => {
    let files = req.files
    console.log(files)
    const images = []
    await Promise.all(
      files.map(async(file) => {
  const result1 = await cloudinary.uploader.upload(file.path, {
      folder: "amazon",
    })
    images.push({
      url: result1.secure_url,
    })
    // images[0] = {url : result1.secure_url}
    })
    )
    // const result = await cloudinary.uploader.upload(req.file, {
    //   folder: "amazon",
    // });
    const newProduct = new Product({
      name: req.body.name,
      category: req.body.category,
      originalPrice: req.body.originalPrice,
      salePrice: req.body.salePrice,
      price: req.body.price,
      subPrice: req.body.subPrice,
      discount: req.body.discount,
      brand: req.body.brand,
      images: images ,
      // cloudinary_id: result.public_id,
      rating: req.body.rating,
    });
    const saveProduct = await newProduct.save();
    // if (req.body.reviews) {
    //   const reviews = reviews.find({_id: req.body.reviews})
    //   await reviews.updateOne({$push: {listProduct: saveProduct._id}})
    // }
    if(saveProduct){
      return res
        .status(200)
        .send({ message: "New Product Created", saveProduct });
    } else {
      res.send("error add product");
    }
  }),
  //Update Product
updateProduct: asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.updateOne({ $set: req.body});    
        res.status(200).json("updated successfully!")
  } catch(err){
    res.status(500).json(err);
  }
  }),
  //Delete Product
  deleteProduct: asyncHandler(async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  }),
};
module.exports = productController;