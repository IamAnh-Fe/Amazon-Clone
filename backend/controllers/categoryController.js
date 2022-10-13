const Category = require('../models/Category');
const asyncHandler = require('express-async-handler');
const APIfeatures = require('../lib/features');

const categoryController = {
    //     getListKeyboard: asyncHandler(async (req, res) => {
    //   const getKeyboard = await Category.find({  "category": "keyboards"}).populate("listProduct")
    //   console.log(getKeyboard)
    //   res.json(getKeyboard);
    // }),
    getAllCategory: asyncHandler(async (req, res) => {
        const getCategory = await Category.find().populate('listProduct');
        res.send(getCategory);
    }),

    findCategory: asyncHandler(async (req, res) => {
        const getCategory = await Category.find({ category: req.params.category }).populate('listProduct');
        if (getCategory) {
            return res.status(200).send(getCategory);
        } else {
            res.send('error get ID product');
        }
    }),

    postCategory: asyncHandler(async (req, res) => {
        const newCategory = new Category(req.body);
        const saveCategory = await newCategory.save();
        if (newCategory) {
            return res.status(200).send({ message: 'New category Created', saveCategory });
        } else {
            res.send('error add category');
        }
    }),
};
module.exports = categoryController;
