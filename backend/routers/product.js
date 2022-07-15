const productController = require("../controllers/productController");
const router = require("express").Router();
const upload = require("../utils/multer")

// router.get("/getAllProducts", productController.getAllProduct);
router.get("/getAllProduct", productController.getAllProduct);
router.get("/:id", productController.findProductId)
router.post("/", upload.single("image"), productController.postProduct);

router.post("/rate/:id", productController.RatingProduct)
router.post("/comment/:id", productController.CommentProduct);
router.post("/pin/comment/:id", productController.PinCommentProduct);
router.post("/rep/comment/:id", productController.RepCommentProduct);

router.delete("/delete/:id", productController.deleteProduct)


module.exports = router;
