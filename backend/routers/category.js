const categoryController = require("../controllers/categoryController");
const router = require("express").Router();

router.post("/", categoryController.postCategory);
router.get("/getAllCategory", categoryController.getAllCategory);
router.get("/getListKeyboard", categoryController.getListKeyboard);



module.exports = router;
