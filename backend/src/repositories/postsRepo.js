import postsSchema from "../models/posts";

export const postsRepo = {
  async getPosts() {
    return await postsSchema.find({});
  },
};
