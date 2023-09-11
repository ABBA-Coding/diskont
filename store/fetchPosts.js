export const actions = {
  async getPosts({}, payload) {
    const res = await this.$axios.$get(`/posts`, { ...payload });
    return res;
  },
  async getPostsBySlug({}, payload) {
    const res = await this.$axios.$get(`/posts/${payload.id}`, {
      ...payload.params,
    });
    return res;
  },
};
