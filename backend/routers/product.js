const productController = require("../controllers/productController");
const router = require("express").Router();
const upload = require("../utils/multer")

router.post("/", upload.single("image"), productController.postProduct);
router.get("/getAllProducts", productController.getAllProduct);
router.delete("/:id", productController.deleteProduct)


module.exports = router;
