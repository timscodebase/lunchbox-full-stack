const { forwardTo } = require("prisma-binding");

const Query = {
  sandwiches: forwardTo("db"),
  sandwich: forwardTo("db"),
  sandwichesConnection: forwardTo("db"),
  homepageFeaturedSandwiches: forwardTo("db"),
};

module.exports = Query;
