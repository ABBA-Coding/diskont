export const actions = {
  async getTopBars({}, payload) {
    const res = await this.$axios.$get(`/bars`, {
      ...payload,
    });
    return res;
  },
};
