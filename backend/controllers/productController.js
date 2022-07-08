const Product = require("../models/Product")
const cloudinary = require('../config/cloudinary/cloudinary')
const asyncHandler = require("express-async-handler");

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}


const productController = {
  //get all product
  getAllCategory: asyncHandler(async (req, res) => {
    const features = new APIfeatures(Product.find(), req.query)
      .paginating()
      .sorting()
      .filtering();
    const product = await features.query
       res.send(product)
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
};
module.exports = productController;