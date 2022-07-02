const Product = require("../models/Product")

const productController = {
   postProduct : async (req,res) => {
     try {
          //Create new user
      const newProduct = await new Product({
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        discout: req.body.discout,
        rating: req.body.title,
        image: req.body.title,
      });
            const product = await newProduct.save();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err)
        }
   }

}
module.exports = productController;