const categoryController = require("../controllers/categoryController");
const router = require("express").Router();

router.post("/", categoryController.postCategory);
router.get("/getAllCategory", categoryController.getAllCategory);
// router.get("/getListKeyboard", categoryController.getListKeyboard);
router.get("/:category", categoryController.findCategory)



module.exports = router;
