import { postsRepo } from "../repositories/postsRepo";


export const postsService = {
  async getAllPost() {
    return await postsRepo.getPosts();
  },
};
