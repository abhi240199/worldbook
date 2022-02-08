const express = require("express");
const userController = require("../controllers/user_controller");
const router = express.Router();

router.get("/sign-in", userController.sigIn);
router.get("/sign-up", userController.sigUp);
router.get("/profile", userController.profile);

router.post("/create", userController.create);
module.exports = router;
