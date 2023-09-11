export const actions = {
  async getBranches({}, payload) {
    const res = await this.$axios.$get(`/branches`, { ...payload });
    return res;
  },
};
