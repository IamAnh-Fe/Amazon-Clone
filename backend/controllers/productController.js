const Product = require("../models/Product")
const cloudinary = require('../config/cloudinary/cloudinary')
const asyncHandler = require("express-async-handler");
const APIfeatures = require("../lib/features")
const PinComment = require("../utils/pinComment")
const productController = {
  //get all product
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

    return res.status(200).json({ product, count });
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

  //CREATE PRODUCT - ADMIN
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

  //DELETE PRODUCT
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //Rating
  RatingProduct: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(req.params.id)
   if (product) {
     const existsUser = product.reviews.find((x) => x.name === req.body.name);
     console.log(existsUser);
     if (existsUser) {
       res.send({ message: "ban da danh gia san pham nay" });
     } else {
       product.reviews.push(req.body);
    console.log(req.body);

       const updateProduct = await product.save();
       res.send(updateProduct);
     }
   } else {
     res.status(400).send({ message: "product not found" });
   }
  }),
  //Comment
  CommentProduct: asyncHandler(async (req, res) => {
     const product = await Product.findById(req.params.id);
     if (product) {
       product.comments.push(req.body);
       const updateCommentProduct = await product.save();
       res.send(updateCommentProduct);
     } else {
       res.status(400).send({ message: "product not found" });
     }
  }),

  //Reply Comment
  RepCommentProduct: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const indexComment = product.comments.findIndex(
        (item) => item._id == req.body.idComment
      );
      product.comments[indexComment].replies.push(req.body);

      await product.save();
      res.send(product);
    } else {
      res.status(400).send({ message: "product not found" });
    }
  }),

  //Pin Comment
  PinCommentProduct: asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const indexComment = product.comments.findIndex(
          (item) => item._id == req.body.idComment
        );
        product.comments[indexComment] = req.body;
        PinComment(product.comments, indexComment, 0);

        await product.save();
        res.send(product);
      } else {
        res.status(400).send({ message: "product not found" });
      }
  }),
  // Blog Product 
  BlogProduct: asyncHandler(async (req, res) => {
     const product = await Product.findById({ _id: req.params.id });

     if (product) {
       product.blog = req.body.blogContent;
       await product.save();
       res.send(product);
     } else {
       res.send({ message: "product not found" });
     }
   })
};


module.exports = productController;