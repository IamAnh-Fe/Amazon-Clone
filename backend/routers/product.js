const productController = require("../controllers/productController");
const router = require("express").Router();
const upload = require("../utils/multer")

// router.get("/getAllProducts", productController.getAllProduct);
router.get("/getAllProduct", productController.getAllProduct);
router.get("/:id", productController.findProductId)

router.post("/", upload.any(),productController.postProduct);

router.post("/rate/:id", productController.RatingProduct)


router.delete("/delete/:id", productController.deleteProduct)


module.exports = router;