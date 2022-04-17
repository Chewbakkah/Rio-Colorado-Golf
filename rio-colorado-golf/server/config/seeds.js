const db = require("./connection");
const { User, Pricing } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    firstName: "test",
    lastName: "admin",
    email: "testadmin@test.com",
    password: "password123",
    role: "admin",
  });
  await User.create({
    firstName: "test",
    lastName: "member",
    email: "testmember@test.com",
    password: "password123",
    role: "member",
    membershipDate: "11/25/2021",
  });
  await User.create({
    firstName: "test",
    lastName: "user",
    email: "testuser@test.com",
    password: "password123",
    role: "user",
  });

  await Pricing.deleteMany();

  await Pricing.insertMany([
    {
      service: "Regular",
      price: "$34",
      priceTimeFrame: "Weekday",
    },
    {
      service: "SR/JR",
      price: "$29",
      priceTimeFrame: "Weekday",
    },
    {
      service: "9-Holes",
      price: "$24",
      priceTimeFrame: "Weekday",
    },
    {
      service: "Twilight",
      price: "$28",
      priceTimeFrame: "Weekday",
    },
    {
      service: "Walking",
      price: "$20",
      priceTimeFrame: "Weekday",
    },
    {
      service: "Regular",
      price: "$44",
      priceTimeFrame: "Weekend/Holiday",
    },
    {
      service: "SR/JR",
      price: "$33",
      priceTimeFrame: "Weekend/Holiday",
    },
    {
      service: "9-Holes",
      price: "$29",
      priceTimeFrame: "Weekend/Holiday",
    },
    {
      service: "Twilight",
      price: "$33",
      priceTimeFrame: "Weekend/Holiday",
    },
    {
      service: "Walking",
      price: "$25",
      priceTimeFrame: "Weekend/Holiday",
    },
    {
      service: "Single/3-Some",
      price: "Add $5/Person",
      priceTimeFrame: "None",
    },
    {
      service: "Replay: 9-Holes",
      price: "$12",
      priceTimeFrame: "None",
    },
    {
      service: "Replay: 18-Holes",
      price: "$17",
      priceTimeFrame: "None",
    },
    {
      service: "Range: Small",
      price: "$6",
      priceTimeFrame: "None",
    },
    {
      service: "Range: Large",
      price: "$9",
      priceTimeFrame: "None",
    },
    {
      service: "Returned Checks",
      price: "$40",
      priceTimeFrame: "None",
    },
  ]);

  process.exit();
});
