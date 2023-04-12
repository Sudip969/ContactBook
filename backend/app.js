const express = require("express");
const Login = require("./features/models/userModel.js");
const User = require("./features/models/contactModel.js");
const urouter = require("./routes/user.js");
const crouter = require("./routes/contact.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
// Login.sync({force:true});
Login.sync();
User.sync();
// User.sync({force:true});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use("/", urouter);
app.use("/", crouter);

app.listen(3000, () => {
  console.log("Server is listening ");
});
