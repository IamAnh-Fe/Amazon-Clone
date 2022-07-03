const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/", productController.postProduct);
router.get("/getAllProducts", productController.getAllProduct);
router.delete("/:id", productController.deleteProduct)


module.exports = router;
