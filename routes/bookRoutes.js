const express = require("express");
const router = express.Router();
const { showBookById } = require("../controllers/bookController");

router.get("/book/:id", showBookById);

module.exports = router;
