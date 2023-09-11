export const actions = {
  async getBanners({}, payload) {
    const res = await this.$axios.$get(`/banners`, { ...payload });
    return res;
  },
  async getBannersBySlug({}, id) {
    const res = await this.$axios.$get(`/banners/${id}`);
    return res;
  },
};
