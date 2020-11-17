import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/redditclone', { useNewUrlParser: true,  useUnifiedTopology: true,   });

const stringRequired = {
  type: String,
  required: true,
};

let postsSchema = new mongoose.Schema({
  title: stringRequired,
  author: stringRequired,
  comments: [],
});

module.exports = mongoose.model("Posts", postsSchema);
