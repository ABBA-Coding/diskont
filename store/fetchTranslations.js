export const actions = {
  async getTranslations({}, payload) {
    const res = await this.$axios.$get(`/translates`, { ...payload });
    return res;
  },
  async getLanguages({}, payload) {
    const res = await this.$axios.$get(`/languages`, { ...payload });
    return res;
  },
};
