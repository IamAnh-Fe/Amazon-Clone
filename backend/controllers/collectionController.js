const Collection = require('../models/Collection');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../config/cloudinary/cloudinary');

const collectionController = {
    getAllCollection: asyncHandler(async (req, res) => {
        const getCollection = await Collection.find();
        res.send(getCollection);
    }),

    postCollection: asyncHandler(async (req, res) => {
        const newCollection = new Collection({
            title: req.body.title,
        });
        const saveCollection = await newCollection.save();
        if (newCollection) {
            return res.status(200).send({ message: 'New collection Created', saveCollection });
        } else {
            res.send('error add collection');
        }
    }),

    productFeed: asyncHandler(async (req, res) => {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'amazon',
        });
        console.log(req.body);
        const product = await Collection.findById(req.params.id);
        console.log(product);
        if (product) {
            product.items.push({
                name: req.body.name,
                slug: req.body.slug,
                image: result.secure_url,
                cloudinary_id: result.public_id,
            });
            const updateProductFeed = await product.save();
            console.log(updateProductFeed);
            res.send(updateProductFeed);
        } else {
            res.status(400).send({ message: 'product not found' });
        }
    }),
};
module.exports = collectionController;
