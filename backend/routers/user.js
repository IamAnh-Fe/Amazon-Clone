const userController = require("../controllers/userController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");
const upload = require("../utils/multer")

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);
//UPDATE USER
router.put("/:id",upload.single('avatar'),  userController.updateUser);
//DELETE USER
router.delete("/:id", verifyTokenAndAdmin, userController.deleteUser);

module.exports = router;