const filterController = require("../controllers/filterController");
const router = require("express").Router();

router.post("/", filterController.postFilter);
router.get("/:category", filterController.getFilter);


module.exports = router;
