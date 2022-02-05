const port = 8000;
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to worldbook");
});
app.listen(port, function (err) {
  if (err) {
    console.log("Error in creating a server");
    return;
  }
  console.log("server has been created on port:", port);
});
