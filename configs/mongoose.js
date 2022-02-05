const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Worldbook_Database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database");
});

module.exports = db;
