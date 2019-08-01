const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/user"
router.route("/")
.get(userController.findAll)

router.route("/savedQuestions/:user")
.get(userController.findSaved)

router.route("/submittedQuestions")
.get(userController.findSubmitted)

router.route("/saveQuestion")
.put(userController.saveQuestion)

module.exports = router;