const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get(questionsController.findAll);

router.route("/company/:company")
  .get(questionsController.findCompany);


router.route("/catagory/:catagory")
  .get(questionsController.findCatagory)

//   //Get user submitted questions
// router.route("/userId/:userId")
//   .get(questionsController.findSaved)

module.exports = router;
