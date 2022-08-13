const filterController = require("../controllers/filterController");
const router = require("express").Router();

router.post("/", filterController.postFilter);
router.get("/getAllFilter", filterController.getAllFilter);


module.exports = router;
