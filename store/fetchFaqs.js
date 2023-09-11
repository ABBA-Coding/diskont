export const actions = {
  async getFaq({}, payload) {
    const res = await this.$axios.$get(`/faq`, { ...payload });
    return res;
  },
};
