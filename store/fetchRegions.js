export const actions = {
  async getRegions({}, payload) {
    const res = await this.$axios.$get(`/regions`, {
      ...payload,
    });
    return res;
  },
  async postAddress({}, payload) {
    const res = await this.$axios.$post(`/addresses`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
  async editAddress({}, payload) {
    const res = await this.$axios.$put(`/addresses/${payload.id}`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
};
