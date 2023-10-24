export const state = () => ({
  auth: false,
  authVisible: false,
  cart: [],
  like: [],
  comparison: [],
  profile: {},
  dicoin: {},
  translations: {},
  locations: {},
  siteInfo: {},
  modal: false,
  loader: false,
});

export const mutations = {
  getTranslations(state, payload) {
    state.translations = payload;
  },
  openModal(state, payload) {
    state.modal = payload;
  },
  loaderHandler(state, payload) {
    state.loader = payload;
  },
  getLocations(state, payload) {
    state.locations = payload;
  },
  logout(state) {
    localStorage.removeItem("dis_auth_token");
    state.auth = false;
  },
  getProfileInfo(state, payload) {
    state.profile = payload;
  },
  getDiCoinInfo(state, payload) {
    state.dicoin = payload;
  },
  getSiteInfo(state, payload) {
    state.siteInfo = payload;
  },
  authHandler(state, payload) {
    const token = payload;
    token ? (state.auth = true) : (state.auth = false);
  },
  authVisibleChange(state, payload) {
    state.authVisible = payload;
  },
  addToStore(state, payload) {
    let cart = JSON.parse(localStorage.getItem(payload.name));
    if (cart.includes(payload.id)) {
      cart.splice(cart.indexOf(payload.id), 1);
    } else {
      cart.push(payload.id);
    }
    localStorage.setItem(payload.name, JSON.stringify(cart));
    state[payload.name] = cart;
  },
  addToCart(state, payload) {
    let cart = JSON.parse(localStorage.getItem(payload.name));
    if (cart.find((item) => item.id == payload.obj.id)) {
      cart = cart.filter((item) => item.id != payload.obj.id);
    } else {
      cart.push(payload.obj);
    }
    localStorage.setItem(payload.name, JSON.stringify(cart));
    state[payload.name] = cart;
  },
  deleteToCart(state, payload) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter((item) => item.id != payload);
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = cart;
  },
  productCountUp(state, payload) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let findItem = cart.find((item) => item.id == payload.id);
    findItem.count = findItem.count + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = cart;
  },
  productCountDown(state, payload) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let findItem = cart.find((item) => item.id == payload.id);
    if (findItem.count > 1) {
      findItem.count = findItem.count - 1;
    } else {
      cart = cart.filter((item) => item.id != payload.id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = cart;
  },
  reloadStore(state) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      state.cart = cart;
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    if (localStorage.getItem("like")) {
      const like = JSON.parse(localStorage.getItem("like"));
      state.like = like;
    } else {
      localStorage.setItem("like", JSON.stringify([]));
    }
    if (localStorage.getItem("comparison")) {
      const comparison = JSON.parse(localStorage.getItem("comparison"));
      state.comparison = comparison;
    } else {
      localStorage.setItem("comparison", JSON.stringify([]));
    }
  },
};
export const actions = {
  profileInfo({ commit }, payload) {
    this.$axios
      .$get("/profile/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
        },
      })
      .then((res) => {
        commit("getProfileInfo", res?.user);
        commit("authHandler", res?.user);
      })
      .catch((e) => {
        if (e.response.status == 401) {
          try {
            this.$axios.$post(
              "/auth/logout",
              {},
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                    "dis_auth_token"
                  )}`,
                },
              }
            );
            commit("logout");
          } catch (e) {
            commit("logout");
          }
        }
      });
  },
  logout({ commit }, payload) {
    try {
      this.$axios.$post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
          },
        }
      );
      commit("logout");
    } catch (e) {
      commit("logout");
    }
  },
  dicoinInfo({ commit }, payload) {
    this.$axios.$get("/dicoins").then((res) => {
      commit("getDiCoinInfo", res?.dicoin);
    });
  },
  siteInfo({ commit }, payload) {
    this.$axios.$get("/info", { ...payload }).then((res) => {
      commit("getSiteInfo", res?.info);
    });
  },
};
