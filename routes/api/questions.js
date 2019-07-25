const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get(questionsController.findAll);

router.route("/company/:company")
  .get(questionsController.findCompany);

router.route("/category/:category")
  .get(questionsController.findCategory)

router.route("/api/newQuestion")
  .post(questionsController.create)

module.exports = router;
