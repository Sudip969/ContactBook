const express = require("express"); //express require
const router = express.Router();
const controller = require("../features/user/userController");
// const auth = require("../features/Middleware/authorization.js")

router.post("/user/signup", controller.insert);
router.post("/user/login", controller.login);

router.get("/user/select/:token", controller.select);

// router.get("/select/:name", controller.select);

// router.delete("/delete/:id", controller.delete);

// router.put("/update/:id", controller.update);

module.exports = router;
