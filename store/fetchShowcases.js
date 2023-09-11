export const actions = {
  async getShowcases({}, payload) {
    const res = await this.$axios.$get(`/showcases`, { ...payload });
    return res;
  },
  async getShowcasesBySlug({}, payload) {
    const res = await this.$axios.$get(`/showcases/${payload.slug}`, {
      ...payload.params,
    });
    return res;
  },
};
