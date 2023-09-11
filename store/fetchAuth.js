export const actions = {
  async postLogin({}, data) {
    const res = await this.$axios.$post(`/auth/login`, data);
    return res;
  },

  async getProfileInfo({}) {
    const res = await this.$axios.$get(`/profile/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
  async getProfileDiCoins({}) {
    const res = await this.$axios.$get(`/profile/dicoins`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
  async postLogOut({}) {
    const res = await this.$axios.$post(
      `/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
        },
      }
    );
    return res;
  },
  async putProfileInfo({}, data) {
    const res = await this.$axios.$put(`/profile/update`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
  async postCheckNumber({}, data) {
    const res = await this.$axios.$post(`/auth/check`, data, {
      headers: {
        Accept: "application/json",
      },
    });
    return res;
  },
  async postCheckNumberForget({}, data) {
    const res = await this.$axios.$post(`/auth/check?forget=1`, data);
    return res;
  },
  async postRegisterWithSms({}, data) {
    const res = await this.$axios.$post(`/auth/register`, data);
    return res;
  },
  async putProfileName({}, data) {
    const res = await this.$axios.$put(`/profile/edit_name`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
  async postOrder({}, data) {
    const res = await this.$axios.$post(`/order`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      },
    });
    return res;
  },
  async postClickOrder({}, data) {
    const res = await this.$axios.$post(`/order/one_click`, data);
    return res;
  },
};
