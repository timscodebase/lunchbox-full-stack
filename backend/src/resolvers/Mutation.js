const Mutations = {
  async createSandwich(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const sandwich = await ctx.db.mutation.createSandwich(
      { data: { ...args } },
      info
    );
    return sandwich;
  },
};

module.exports = Mutations;
