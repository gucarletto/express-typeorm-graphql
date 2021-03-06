import { User } from "./models/User";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;

      return await User.findOne({ where: { id: id } });
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const { email, password, name } = args;
      try {
        const user = User.create({
          email,
          name,
          password,
        });

        await user.save();

        return true;
      } catch (error) {
        return false;
      }
    }
  }
};