const port = process.env.PORT || 8000;
const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("./configs/mongoose");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const passportLocal = require("./configs/passport_local_strategy");

app.use(express.urlencoded());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    name: "Worldbook_db",
    secret: "abhiworldbook",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 1000 },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/Worldbook_Database",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in creating a server");
    return;
  }
  console.log("server has been created on port:", port);
});
