import { helloService } from '../services';
import postsSchema from '../models/posts';

export const helloController = {
  async get(req, res, next) {
    try {
      let asd = await postsSchema.create({title: "New COVID Vacine", author: "Robbert mcDonald"});
      console.log(asd);
      
      const data = await postsSchema.find({title: "New COVID Vacine"}).exec();
      //let data = helloService.getHelloWorld();
      res.status(200).json(data);
    } catch (error) {
        next(error);
    }
  },
};