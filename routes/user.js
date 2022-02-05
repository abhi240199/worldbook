const express = require("express");
const router = express.Router();

router.get("/sign-in", function (req, res) {
  res.render("signin");
});
router.get("/sign-up", function (req, res) {
  res.render("signup");
});
router.get("/profile", function (req, res) {
  res.render("profile");
});

module.exports = router;
