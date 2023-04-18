const passport = require("passport");
const jwtToken = require("./features/JwtToken/jwtToken");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const User = require("./features/models/userModel");

const GOOGLE_CLIENT_ID =
  "83595211147-p389b2uh2h1atqkb0hedr8e3fgkp09b2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOne({
        where: { googleId: profile.id },
      })
        .then((user) => {
          if (user) {
            done(null, user);
          } else {
            // If the user does not exist, create a new user in the database
            const user = {
              user_name: profile.displayName,
              user_email: profile.email,
            };
            let token = jwtToken(user);

            User.create({
              googleId: profile.id,
              user_name: profile.displayName,
              user_email: profile.emails[0].value,
              tokens: token,
            })
              .then((newUser) => {
                done(null, newUser);
              })
              .catch((err) => {
                console.log(err.message);
                done(err);
              });
          }
        })
        .catch((err) => {
          done(err);
        });
    }
  )
);

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err.message);
    });
});
