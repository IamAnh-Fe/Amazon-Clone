const authController = require("../controllers/authController");
const passport = require("passport");
const router = require("express").Router();
const { verifyToken } = require("../controllers/verifyToken");
const CLIENT_URL = "http://localhost:3000/";

//REGISTER
router.post("/register", authController.registerUser);

router.post('/activation', authController.activateEmail)
//REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);
//LOG IN
router.post("/login", authController.loginUser);

router.post('/forgot', authController.forgotPassword)

router.post('/reset', authController.resetPassword)
//LOG OUT
router.post("/logout", verifyToken, authController.logOut);

// Social Login






module.exports = router;
