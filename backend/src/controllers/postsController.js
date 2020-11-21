import postsSchema from '../models/posts';
import userSchema from '../models/users'; 
import commentSchema from '../models/comments';


export const postsController = {
  async get(req, res, next) {
    try {
      let post = await postsSchema.findOne({_id: "5fb6c8e2dfef6a5186b01212"});

      res.json(post);
    } catch (error) {
        next(error);
    }
  },
};



 /*let user = await userSchema.findOne({ username: "Kornel14"});
      let newcomment = await commentSchema.create({ author: user, text: "test comment"});

      let post = await postsSchema.findOne({_id: "5fb6c8e2dfef6a5186b01212"});
      post.comments.push(newcomment);
      post.save();
      postsSchema.findOne({_id: "5fb6c8e2dfef6a5186b01212"})
      .populate('comments')
      .exec((err, comment)=>{
        console.log(comment);
        res.status(200).json(comment);
      });*/