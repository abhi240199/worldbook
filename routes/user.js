const express = require("express");
const passport = require("passport");
const userController = require("../controllers/user_controller");
const router = express.Router();

router.get("/sign-in", userController.sigIn);
router.get("/sign-up", userController.sigUp);
router.get("/profile", passport.checkAuthentication, userController.profile);
router.get("/log-out", userController.logOut);

router.post("/create", userController.create);

router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "user/sign-in" }),
  userController.createSession
);
module.exports = router;
