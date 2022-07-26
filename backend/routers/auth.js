const authController = require("../controllers/authController");

const router = require("express").Router();
const { verifyToken } = require("../controllers/verifyToken");

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
router.post("/google_login", authController.googleLogin);

// router.post('/facebook_login', userCtrl.facebookLogin)

module.exports = router;
