const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Using passport to set up new GoogleStrategy and begin authentication.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have a record and don't need to create a new record, just sign user in.
          done(null, existingUser);
        } else {
          // We don't yet have this user, create a new one in the database.
          new User({
            googleId: profile.id,
            userName: profile.displayName,
            userPhoto: profile._json.picture
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
