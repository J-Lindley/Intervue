const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get(questionsController.findAll);

//Find all unique categories
router.route("/categories")
  .get(questionsController.allCategories);

//Show questions from a given company
router.route("/company/:company")
  .get(questionsController.findCompany);

//Show questions in a given category
router.route("/category/:category")
  .get(questionsController.findCategory)

//Add new questions
router.route("/newQuestion")
  .post(questionsController.create)

//Thumbs up/down
router.route("/thumbsUp/:id")
  .get(questionsController.thumbsUp)

module.exports = router;
