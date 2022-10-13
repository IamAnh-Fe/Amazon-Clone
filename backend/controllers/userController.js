const User = require('../models/User');
const APIfeatures = require('../lib/features');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../config/cloudinary/cloudinary');

const userController = {
    //GET ALL USER
    getAllUsers: asyncHandler(async (req, res) => {
        const features = new APIfeatures(User.find(), req.query).paginating15().sorting().searching().filtering();
        const result = await Promise.allSettled([
            features.query,
            User.countDocuments(), //count number of product.
        ]);
        const user = result[0].status === 'fulfilled' ? result[0].value : [];
        const count = result[1].status === 'fulfilled' ? result[1].value : 0;
        return res.status(200).json({ user, count });
    }),
    //Update User
    updateUser: asyncHandler(async (req, res) => {
        console.log('update: ', req.body);
        const user = await User.findById(req.params.id);
        // await cloudinary.uploader.destroy(product.cloudinary_id);

        let result;
        if (req.file) {
            result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'amazon',
            });
            console.log(result);
        }

        if (user) {
            user.username = req.body.username;
            user.phone = req.body.phone;
            user.address = req.body.address;
            user.avatar = result?.secure_url || user.avatar;
            // const updateUser = await user.save();
            await user.updateOne({ $set: user });
            res.status(200).json('updated successfully!');
        }
    }),
    //DELETE A USER
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User deleted');
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = userController;
