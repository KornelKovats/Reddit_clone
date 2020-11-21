import mongoose from "mongoose";
const Schema = mongoose.Schema;
import userSchema from './users';
import commentSchema from './comments';


const stringRequired = {
  type: String,
  required: true,
};

let postsSchema = new mongoose.Schema({
  title: stringRequired,
  text: stringRequired,
  author: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    username: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
});

module.exports = mongoose.model("Posts", postsSchema);
