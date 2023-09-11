export const actions = {
  async getBrands({}, payload) {
    const res = await this.$axios.$get(`/brands`, { ...payload });
    return res;
  },
  async getBrandsBySlug({}, payload) {
    const res = await this.$axios.$get(`/brands/${payload.id}`,{...payload.params});
    return res;
  },
};
