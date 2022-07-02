const productController = require("../controllers/productController");
const router = require("express").Router();
router.post("/", productController.postProduct);


module.exports = router;
