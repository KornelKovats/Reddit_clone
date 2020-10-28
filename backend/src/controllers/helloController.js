import { helloService } from '../services';

export const helloController = {
  get(req, res) {
    try {
      let data = helloService.getHelloWorld();
      res.status(200).json(data);
    } catch (error) {
        next(error);
    }
  },
};