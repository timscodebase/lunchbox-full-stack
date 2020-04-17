const Query = {
  async sandwiches(parent, args, ctx, info) {
    const sandwiches = await ctx.db.query.sandwiches();
    return sandwiches;
  },
};

module.exports = Query;
