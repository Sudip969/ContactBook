const express = require("express");
const User = require("./features/models/userModel.js");
const Contact = require("./features/models/contactModel.js");
const urouter = require("./routes/user.js");
const crouter = require("./routes/contact.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./auth");
const session = require("express-session");

const app = express();
// Login.sync({force:true});
User.sync();
Contact.sync();
// User.sync({force:true});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// Set up session middleware
app.use(
  session({
    secret: "Mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and set up session persistence
app.use(passport.initialize());
app.use(passport.session());

app.use("/", urouter);
app.use("/", crouter);

app.listen(3000, () => {
  console.log("Server is listening ");
});
