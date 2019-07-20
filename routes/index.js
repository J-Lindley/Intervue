const passport = require('passport');
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

/* GET Google Authentication API. */
//denis said these should be in their own passport folder
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );
// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/", session: false }),
//   function(req, res) {
//       var token = req.user.token;
//       res.redirect("http://localhost:3000?token=" + token);
//   }
// );

// API Routes
router.use("/api/", apiRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;