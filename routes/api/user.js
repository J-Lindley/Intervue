const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/user"
router.route("/")
.get(userController.findAll)

router.route("/savedQuestions/:user")
.get(userController.findSaved)

router.route("/findUser")
.get(userController.findUser);

router.route("/submittedQuestions/:user")
.get(userController.findSubmitted)

router.route("/saveQuestion")
.put(userController.saveQuestion)

router.route("/submitQuestion")
.put(userController.submitQuestion)

router.route("/deleteQuestion")
.delete(userController.deleteQuestion)

module.exports = router;