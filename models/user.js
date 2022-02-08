const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    user_name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
