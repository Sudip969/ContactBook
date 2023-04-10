const express = require("express"); //express require
const router = express.Router();
const controller = require("../features/contact/contactController");
const authenticateToken = require("../features/Middleware/authorization.js")

router.post("/insert", controller.insert);

router.get("/select",authenticateToken, controller.select);

router.get("/select/:name", controller.select);

router.delete("/delete/:id", controller.delete);

router.put("/update/:id", controller.update);

module.exports = router;
