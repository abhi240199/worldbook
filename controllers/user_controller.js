const User = require("../models/user");
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    console.log("password Not matched");
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (user) {
      console.log("User already exists");
      return res.redirect("back");
    } else {
      User.create(req.body, function (err, user) {
        if (err) return err;
        console.log("New user created", user);
        return res.redirect("/user/sign-in");
      });
    }
  });
};
module.exports.sigIn = function (req, res) {
  return res.render("signin");
};
module.exports.sigUp = function (req, res) {
  return res.render("signup");
};
module.exports.profile = function (req, res) {
  return res.render("profile");
};
