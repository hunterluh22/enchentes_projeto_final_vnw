const express = require("express");
const router = express.Router();

const controller = require("../controllers/abrigosController");

router.get("/", controller.getAbrigos);
router.post("/", controller.createAbrigo);

module.exports = router;