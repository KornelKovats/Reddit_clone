import mongoose from 'mongoose';
import postsSchema from '../models/posts';

export const postsController = {
  async get(req, res, next) {
    try {
      console.log(mongoose.connection.readyState);
      let asd = await postsSchema.create({title: "New COVID Vacine", author: "Robbert mcDonald"});
      const data = await postsSchema.find({title: "New COVID Vacine"});
      res.status(200).json(data);
    } catch (error) {
        next(error);
    }
  },
};