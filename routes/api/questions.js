const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get(questionsController.findAll);

router.route("/company/:company")
  .get(questionsController.findCompany);

  // fix later
// router.route("/jobType/:jobType")
//   .get(questionsController.findJobType);

// router.route("/questionType/:questionType")
//   .get(questionsController.findquestionType);




  module.exports = router;



  