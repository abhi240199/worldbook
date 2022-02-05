const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("home");
});
router.use("/user", require("./user"));

module.exports = router;
