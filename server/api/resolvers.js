import { User } from "../models/user";

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    }
  }
}
export { resolvers };