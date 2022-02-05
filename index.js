const port = 8000;
const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("signup");
});
app.listen(port, function (err) {
  if (err) {
    console.log("Error in creating a server");
    return;
  }
  console.log("server has been created on port:", port);
});
