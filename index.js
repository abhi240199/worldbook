const port = 8000;
const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const mongoose = require("./configs/mongoose");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());
app.use(cookieParser());
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in creating a server");
    return;
  }
  console.log("server has been created on port:", port);
});
