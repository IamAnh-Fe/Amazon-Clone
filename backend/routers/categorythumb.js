const categoryThumbController = require("../controllers/categoryThumbController");
const router = require("express").Router();
const upload = require("../utils/multer")

router.get("/getAllCategoryThumb", categoryThumbController. getAllCategoryThumb);
router.post("/", upload.single("image"),categoryThumbController. postCategoryThumb);


module.exports = router;