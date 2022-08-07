const collectionController = require("../controllers/collectionController");
const router = require("express").Router();
const upload = require("../utils/multer")

router.post("/", collectionController.postCollection);
router.post("/:id", upload.single("image"), collectionController.productFeed);
router.get("/getAllCollection", collectionController.getAllCollection);


module.exports = router;
