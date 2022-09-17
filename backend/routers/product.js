const productController = require("../controllers/productController");
const router = require("express").Router();
const upload = require("../utils/multer")
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");


router.get("/getAllProducts", productController.getAllProduct);
router.get("/list/:category", productController.getProduct);
router.get("/list-keyboards", productController.findCategory);

router.get("/:id", productController.findProductId);

router.post("/", upload.array('url'),productController.postProduct);

router.put("/:id", productController.updateProduct);


router.delete(":id", productController.deleteProduct)


module.exports = router;