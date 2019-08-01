const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/user"
router.route("/")
.get(userController.findAll)

router.route("/user/savedQuestions")
.get(userController.findSaved)

router.route("user/submittedQuestions")
.get(userController.findSubmitted)


module.exports = router;