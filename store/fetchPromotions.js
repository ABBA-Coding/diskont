export const actions = {
  async getPromotions({}, payload) {
    const res = await this.$axios.$get(`/promotions`, { ...payload });
    return res;
  },
  async getPromotionsBySlug({}, payload) {
    const res = await this.$axios.$get(`/promotions/${payload.slug}`, {
      ...payload.params,
    });
    return res;
  },
};
