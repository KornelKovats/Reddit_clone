import userSchema from "../models/users";

export const userRepo = {
  async getUser(username) {
    return await userSchema.findOne({ username: username });
  },
};
