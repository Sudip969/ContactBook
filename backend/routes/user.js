const express = require("express"); //express require
const router = express.Router();
const passport = require("passport");
const controller = require("../features/user/userController");
// const auth = require("../features/Middleware/authorization.js")

router.post("/user/signup", controller.insert);
router.post("/user/login", controller.login);
router.post("/user/googleLogin", controller.googleLogin);

router.get("/user/select/:token", controller.select);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Redirect to the frontend URL after successful authentication
    const frontendUrl = "http://localhost:8080/";
    res.redirect(`${frontendUrl}?id=${req.user.user_email}`);
  }
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    console.log("Successfully loggedOut");
  }); // Passport's logout method
  // res.redirect("http://localhost:8080");
  // res.send("succesfully loggedOut");
});
// router.get("/select/:name", controller.select);

// router.delete("/delete/:id", controller.delete);

// router.put("/update/:id", controller.update);

module.exports = router;
