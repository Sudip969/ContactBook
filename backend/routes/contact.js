const express = require("express"); //express require
const router = express.Router();
const controller = require("../features/contact/contactController");
const authenticateToken = require("../features/Middleware/authorization.js");

router.post("/insert", authenticateToken, controller.insert);

router.get("/select/:userId", authenticateToken, controller.select);

router.get("/select/:userId/:name", authenticateToken, controller.select);

router.delete("/delete/:id", authenticateToken, controller.delete);

router.put("/update/:id", authenticateToken, controller.update);

module.exports = router;
