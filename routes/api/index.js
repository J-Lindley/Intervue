const router = require("express").Router();
const questionsRoute = require("./questions");
const userRoute = require("./user");

router.use("/questions", questionsRoute);
router.use("/user", userRoute);

module.exports = router;