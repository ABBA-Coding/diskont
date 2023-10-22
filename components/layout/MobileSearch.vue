<template lang="html">
  <div class="container_xl mobile-search" :class="{ activeSearch: searchBlockHide }">
    <div>
      <div class="search-header">
        <button v-if="searchBlockHide" @click="searchBlockHide = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M36 23.5C36.8284 23.5 37.5 22.8284 37.5 22C37.5 21.1716 36.8284 20.5 36 20.5V23.5ZM11.9393 20.9393C11.3536 21.5251 11.3536 22.4749 11.9393 23.0607L21.4853 32.6066C22.0711 33.1924 23.0208 33.1924 23.6066 32.6066C24.1924 32.0208 24.1924 31.0711 23.6066 30.4853L15.1213 22L23.6066 13.5147C24.1924 12.9289 24.1924 11.9792 23.6066 11.3934C23.0208 10.8076 22.0711 10.8076 21.4853 11.3934L11.9393 20.9393ZM36 20.5L13 20.5V23.5L36 23.5V20.5Z"
              fill="#98A0A6"
            />
          </svg>
        </button>
        <div class="search_input_container">
          <input
            type="text"
            ref="search"
            :placeholder="`${$store.state.translations['main.search']} ...`"
            v-on:keyup.enter="searchAction"
            v-model="search"
            @focus="searchBlockHide = true"
          />
          <span
            class="search-btn"
            @click="searchAction"
            :class="{ disabled: search.length == 0 }"
          >
            <span v-html="navMic"></span>
            {{ $store.state.translations["main.search"] }}
          </span>
        </div>
      </div>
      <Transition name="bounce">
        <div
          class="seach-resoult-container"
          v-if="
            searchBlockHide &&
            (searchResoults.length > 0 ||
              searchProducts.length ||
              searchCategories.length)
          "
        >
          <div class="search-resoult-scroll">
            <div v-if="searchResoults.length > 0 && searchProducts.length == 0">
              <div class="search-tt">
                <h6>{{ $store.state.translations["main.searched"] }}</h6>
                <button @click="clearSearchResoults">
                  {{ $store.state.translations["main.cleaning"] }}
                </button>
              </div>
              <div class="search-resoults-list">
                <div
                  class="search-resoults"
                  v-for="resoult in searchResoults"
                  :key="resoult.id"
                >
                  <div
                    class="last_search_resoults"
                    @click="lastSearchResoultAction(resoult.resoult)"
                  >
                    <span v-html="searchClock"></span>
                    {{ resoult.resoult }}
                  </div>
                  <button @click="searchResoultDelete(resoult.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15.8925 8.0918L8.10547 15.8788"
                        stroke="#727474"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.8951 15.883L8.10156 8.08789"
                        stroke="#727474"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="search-grid">
              <div v-if="searchProducts.length > 0 && search.length > 2">
                <div class="search-popular">
                  <h6>{{ $store.state.translations["main.popular"] }}</h6>
                </div>
                <div class="search-resoults-list">
                  <div
                    class="search-resoults"
                    v-for="product in searchProducts"
                    :key="product?.id"
                  >
                    <nuxt-link :to="localePath(`/product/${product?.slug}`)">
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle
                            cx="9.80492"
                            cy="9.80492"
                            r="7.49047"
                            stroke="#727474"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.0156 15.4043L17.9523 18.3334"
                            stroke="#727474"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          /></svg
                      ></span>
                      {{ product?.name }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div v-if="searchCategories.length > 0 && search.length > 2">
                <div class="search-popular">
                  <h6>{{ $store.state.translations["main.categories"] }}</h6>
                </div>
                <div class="search-resoults-list">
                  <div
                    class="search-resoults"
                    v-for="category in searchCategories"
                    :key="category?.id"
                  >
                    <nuxt-link :to="localePath(`/categories-inner/${category?.slug}`)">
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle
                            cx="9.80492"
                            cy="9.80492"
                            r="7.49047"
                            stroke="#727474"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.0156 15.4043L17.9523 18.3334"
                            stroke="#727474"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          /></svg
                      ></span>
                      {{ category?.name }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      searchBlockHide: false,
      searchLastResoults: false,
      searchCategories: [],
      searchProducts: [],
      searchResoults: [],
      navMic: require("../../assets/svg/mic.svg?raw"),
    };
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
  },
  mounted() {
    if (!localStorage.getItem("search_resoults")) {
      localStorage.setItem("search_resoults", JSON.stringify([]));
    } else {
      this.searchResoults = JSON.parse(localStorage.getItem("search_resoults"));
    }
  },
  methods: {
    lastSearchResoultAction(res) {
      this.search = res;
      let searchVal = this.search.split("/").join("%2F");
      this.$router.push(this.localePath(`/search/${searchVal}`));
    },
    searchResoultDelete(id) {
      this.searchResoults = this.searchResoults.filter((item) => item.id != id);
      localStorage.setItem("search_resoults", JSON.stringify(this.searchResoults));
      this.searchResoults = JSON.parse(localStorage.getItem("search_resoults"));
    },
    clearSearchResoults() {
      localStorage.setItem("search_resoults", JSON.stringify([]));
      this.searchResoults = JSON.parse(localStorage.getItem("search_resoults"));
    },
    searchAction() {
      this.searchResoults.push({
        id:
          this.searchResoults.length > 0
            ? Math.max(...this.searchResoults.map((o) => o.id)) + 1
            : 1,
        resoult: this.search,
      });
      let searchVal = this.search.split("/").join("%2F");
      localStorage.setItem("search_resoults", JSON.stringify(this.searchResoults));
      this.$router.push(this.localePath(`/search/${searchVal}`));
    },
    async __GET_SEARCH() {
      try {
        const data = await this.$store.dispatch("fetchSearch/getSearch", {
          params: { search: this.search },
          headers: { lang: this.$i18n.locale },
        });
        this.searchProducts = data?.products;
        this.searchCategories = data?.categories;
      } catch (e) {}
    },
  },
  watch: {
    search(val) {
      if (val.length > 2) {
        this.__GET_SEARCH();
        this.searchLastResoults = false;
      } else {
        this.searchProducts = [];
        this.searchCategories = [];
      }
    },
    routerPath() {
      this.searchBlockHide = false;
      this.catalogMenu = false;
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
  },
};
</script>
<style lang="css">
.activeSearch {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 100vh;
}
.mobile-search {
  display: none;
  position: relative;
  background-color: #fff;
}
.mobile-search .search_input_container {
  width: 100%;
}
.mobile-search .seach-resoult-container {
  position: static;
  border: none;
  padding: 0;
  margin-top: 32px;
}
.activeSearch .search-header {
  border-bottom: 1.5px solid #eaeaea;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(37.5px);
}
.search-header {
  display: flex;
  gap: 14px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.mobile-search .search-resoult-scroll {
  max-height: 100vh;
}
.search-header button {
  background-color: transparent;
  border: none;
}
@media (max-width: 768px) {
  .mobile-search {
    display: block;
  }
}
</style>
