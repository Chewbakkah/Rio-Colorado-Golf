const { User } = require("../models");
const stripe = require("stripe")(
  "sk_test_51KaO22FV5HS8ufgmSBzTduwrg87SPn7ELoyDgOvQbBo3njBaGOn4fuFsrVFwvn3GXIzUe7ZzpfxiAdLIzYLWTjYu006xIUPkBl"
);

const resolvers = {
  Query: {},
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const token = signToken(user);
    return { token, user };
  },
  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
    }

    throw new AuthenticationError("Not logged in");
  },
};

module.exports = resolvers;
