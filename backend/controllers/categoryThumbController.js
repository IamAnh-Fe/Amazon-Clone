const CategoryThumb = require('../models/CategoryThumb');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../config/cloudinary/cloudinary');

const categoryThumbController = {
    getAllCategoryThumb: asyncHandler(async (req, res) => {
        const getThumb = await CategoryThumb.find();
        return res.send(getThumb);
    }),

    postCategoryThumb: asyncHandler(async (req, res) => {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'amazon',
        });
        const newCategoryThumb = new CategoryThumb({
            image: result.secure_url,
            cloudinary_id: result.public_id,
            name: req.body.name,
            slug: req.body.name,
        });
        const saveCategoryThumb = await newCategoryThumb.save();
        if (newCategoryThumb) {
            return res.status(200).send({ message: 'New category thumb Created', saveCategoryThumb });
        } else {
            res.send('error add category thumbnail');
        }
    }),
};
module.exports = categoryThumbController;
