import { helloService } from '../services';
import  postsSchema  from '../models/posts';
import mongoose from 'mongoose';

export const helloController = {
  async get(req, res, next) {
    try {
      console.log(postsSchema);
      
      console.log(mongoose.connection.readyState);
      let asd = await postsSchema.create({title: "New COVID Vacine", author: "Robbert mcDonald"});
      
      const data = await postsSchema.find({title: "New COVID Vacine"});
      //let data = helloService.getHelloWorld();
      res.status(200).json(data);
    } catch (error) {
        next(error);
    }
  },
};