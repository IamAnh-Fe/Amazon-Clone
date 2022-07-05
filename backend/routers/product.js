const productController = require("../controllers/productController");
const router = require("express").Router();
const upload = require("../utils/multer")

router.get("/getAllProducts", productController.getAllProduct);
router.get("/getAllCategory", productController.getAllCategory);
router.post("/", upload.single("image"), productController.postProduct);
router.delete("/:id", productController.deleteProduct)


module.exports = router;
