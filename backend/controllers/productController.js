const Product = require("../models/Product")

const productController = {
  //create product - admin
   postProduct : async (req,res) => {
      const result = await cloudinary.uploader.upload(req.file.path, {
    folder: "amazon",
  });
     try {
         const newProduct = new Product({
          title: res.body.title,
          discount: res.body.discount,
          category: res.body.category,
          price: res.body.price,
          image: result.secure_url,
          cloudinary_id: result.public_id,
          rating: res.body.rating,
         });
         const saveProduct = await newProduct.save()

            res.status(200).json(saveProduct);
        } catch (err) {
            res.status(500).json(err)
        }
   },
   //get all product
   getAllProduct : async (req, res) => {
     try {
       const product = await Product.find()
       res.status(200).json(product);
      } catch(err){
        res.status(500).json(err);
        
      }
    },
    //delete product
    deleteProduct : async (req, res) => {
      try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product deleted");
    } catch (err) {
      res.status(500).json(err);
    }
    }
  }
module.exports = productController;