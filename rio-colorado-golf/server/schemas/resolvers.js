const { User, Pricing } = require("../models");
const { signToken } = require("../utils/auth");

// FUTURE DEVELOPMENT: STRIPE IMPLEMENTATION

//const stripe = require("stripe")(
//  "sk_test_51KaO22FV5HS8ufgmSBzTduwrg87SPn7ELoyDgOvQbBo3njBaGOn4fuFsrVFwvn3GXIzUe7ZzpfxiAdLIzYLWTjYu006xIUPkBl"
//);
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    //return all users
    users: async () => {
      return await User.find().select("-__v -password");
    },
    //return single user by email???
    user: async (parent, { email }) => {
      return User.findOne({ email }).select("-__v -password");
    },
    //return all services
    services: async () => {
      return await Pricing.find();
    },

    // ISSUES
    servicesByTime: async (parent, { timeFrame }) => {
      return await Pricing.find({ priceTimeFrame: timeFrame });
    },

// FUTURE DEVELOPMENT: STRIPE IMPLEMENTATION

    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "orders.products",
    //       populate: "category",
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ products: args.products });
    //   const line_items = [];

    //   const { products } = await order.populate("products").execPopulate();

    //   for (let i = 0; i < services.length; i++) {
    //     const product = await stripe.products.create({
    //       name: products[i].name,
    //       description: products[i].description,
    //       images: [`${url}/images/${products[i].image}`],
    //     });

    //     const price = await stripe.prices.create({
    //       product: product.id,
    //       unit_amount: products[i].price * 100,
    //       currency: "usd",
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1,
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items,
    //     mode: "payment",
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`,
    //   });

    //   return { session: session.id };
    // },
  },
  Mutation: {
    // create a user with whatever is passed in as the args. Signs a token returning an object which combines user data and token
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // handle login functionality
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

    updateUser: async (parent, args) => {
      return await User.findByIdAndUpdate(args._id, args, {
        new: true,
      });
    },

    // HAD TO BE UPDATED TYPEDEFS TOO
    deleteUser: async (parent, { _id }) => {
      return await User.findByIdAndDelete(_id);
    },

    addService: async (parent, args) => {
      return await Pricing.create(args);
    },

    // HAD TO BE UPDATED
    updateService: async (parent, args) => {
      return await Pricing.findByIdAndUpdate(args._id, args, { new: true });
    },

    // HAD TO BE UPDATED
    deleteService: async (parent, { _id }) => {
      return await Pricing.findByIdAndDelete(_id);
    },
  },
};

module.exports = resolvers;
