const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/Worldbook_Database", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(
  "mongodb://worldbookabhi:Coaderabhi@cluster0-shard-00-00.zwitd.mongodb.net:27017,cluster0-shard-00-01.zwitd.mongodb.net:27017,cluster0-shard-00-02.zwitd.mongodb.net:27017/Worldbook_Database?ssl=true&replicaSet=atlas-x1i2l4-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database");
});

module.exports = db;
