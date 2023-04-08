const express = require("express");
const Login = require("./features/models/userModel.js");
// const User = require("./features/models/contactModel.js");
const router = require("./routes/user.js");
const bodyParser=require("body-parser");
const cors=require("cors");

const app = express();
// Login.sync({force:true});
Login.sync()
// User.sync()

app.use(bodyParser.json());
app.use(cors())
app.use("/", router);

app.listen(3000,() => {
  console.log("Server is listening ");
});
