const commentController = require("../controllers/commentController");
const router = require("express").Router();

router.get("/comments/:id", commentController.getComments);


module.exports = router;
