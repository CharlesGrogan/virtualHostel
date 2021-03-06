const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/auth"
router.route("/signup")
  .post(userController.signup);

router.route("/login")
  .post(userController.login);

router.route("/logout")
  .get(userController.logout);

router.route("/checklogin")
  .get(userController.checklogin)
module.exports = router;