const commentController = require("../controllers/commentController");
const router = require("express").Router();

router.get("/comment/:id", commentController.getComments);


module.exports = router;
