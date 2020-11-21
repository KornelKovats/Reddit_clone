import mongoose from "mongoose";
const Schema = mongoose.Schema;
import userSchema from "./users";


const stringRequired = {
  type: String,
  required: true,
};

let commentSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  text: stringRequired,
});

module.exports = mongoose.model("Comment", commentSchema);
