const userController = require("../controllers/userController")
const router = require("express").Router();
const {verifyTokenAndAdmin} = require("../controllers/verifyToken")

router.delete("/:id",verifyTokenAndAdmin, userController.deleteUser)

module.exports = router;