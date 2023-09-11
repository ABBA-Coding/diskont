export const actions = {
  async getCategories({}, payload) {
    const res = await this.$axios.$get(`/categories`, { ...payload });
    return res;
  },
  async getCategoriesBySlug({}, payload) {
    const res = await this.$axios.$get(`/categories/${payload.id}`, {
      ...payload.params,
    });
    return res;
  },
};
