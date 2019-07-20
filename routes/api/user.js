const router = require("express").Router();
const userController = require("../../controllers/userController");


// Matches with "/api/user"
router.route("/")
.get(userController.findAll)
  // .delete(userController.__id);
//finish setting these up
// router.route("/myQuestions/:myQuestions")
//   .put(userController.myQuestions);

// router.route("/jobType/:jobType")
//   .get(userController.myQuestions);
module.exports = router;