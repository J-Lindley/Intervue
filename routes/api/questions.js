const router = require("express").Router();
const booksController = require("../../controllers/questionsController");

// Matches with "/api/books"
router.route("/")
  .get(questionsController.findAll);

router.route("/company/:company")
  .get(questionsController.findCompany);

  module.exports = router;
  