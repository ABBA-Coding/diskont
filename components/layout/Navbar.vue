<template lang="html">
  <div class="header-navbar">
    <div class="container_xl header-navbar_web">
      <div class="d-flex header-navbar_container">
        <div class="d-flex align-items-center">
          <nuxt-link :to="localePath('/')">
            <!-- <span v-html="navLogo" class="nav_logo"> </span
          > -->
            <span class="nav_logo">
              <img :src="$store.state.siteInfo?.sm_logo" alt=""
            /></span>
          </nuxt-link>
          <button class="catalog-btn" @click="catalogMenu = !catalogMenu">
            <span v-if="catalogMenu"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
              >
                <path
                  d="M2.25649 11.0884C1.74652 11.5984 0.919684 11.5984 0.409708 11.0884C-0.100267 10.5784 -0.100267 9.75161 0.409708 9.24163L3.61608 6.03527L0.744068 3.16326C0.217105 2.63629 0.217106 1.78192 0.744069 1.25495C1.27103 0.727992 2.12541 0.727991 2.65237 1.25495L5.52438 4.12696L8.74054 0.910808C9.25051 0.400833 10.0773 0.400833 10.5873 0.910808C11.0973 1.42078 11.0973 2.24762 10.5873 2.75759L7.37117 5.97375L10.2432 8.84576C10.7701 9.37272 10.7701 10.2271 10.2432 10.7541C9.71621 11.281 8.86183 11.281 8.33487 10.7541L5.46286 7.88205L2.25649 11.0884Z"
                  fill="#fff"
                /></svg
            ></span>
            <span v-else v-html="navCategory"></span>

            {{ $store.state.translations["main.directory"] }}
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
                          <nuxt-link
                            :to="localePath(`/categories-inner/${category?.slug}`)"
                          >
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
        <div class="header-navbar_navbar d-flex">
          <ul class="d-flex justify-content-between w-100 align-items-center">
            <li
              @click="
                $store.state.auth
                  ? $router.push(localePath('/profile/my-orders'))
                  : $store.commit('authVisibleChange', true)
              "
            >
              <!-- <span class="count-index">12</span> -->
              <span class="nav-icons" v-html="navOrder"></span
              >{{ $store.state.translations["main.orders"] }}
            </li>
            <li
              @click="$router.push(localePath('/likes'))"
              :class="{ navbar_block_active: $route.name == 'likes' }"
            >
              <span class="count-index" v-if="$store.state.like.length > 0">{{
                $store.state.like.length
              }}</span>

              <span class="nav-icons" v-html="navLike"></span>
              {{ $store.state.translations["main.likes"] }}
            </li>
            <li
              id="cart"
              @click="$router.push(localePath('/basket'))"
              :class="{ navbar_block_active: $route.name == 'basket' }"
            >
              <span class="count-index" v-if="$store.state.cart.length > 0">{{
                $store.state.cart.length
              }}</span>

              <span class="nav-icons" v-html="navBasket"></span>
              {{ $store.state.translations["main.cart"] }}
            </li>
            <li
              @click="$router.push(localePath('/comparison'))"
              :class="{ navbar_block_active: $route.name == 'comparison' }"
            >
              <span class="count-index" v-if="$store.state.comparison.length > 0">{{
                $store.state.comparison.length
              }}</span>
              <span class="nav-icons comparison-icon" v-html="navComp"></span>
              {{ $store.state.translations["main.comparison"] }}
            </li>
            <li
              class="nav_profile user_profile flex-row"
              @click="toProfile(true)"
              v-if="$store.state.auth"
            >
              <span v-html="navUser"></span>
              <p>
                {{
                  $store.state.auth && $store.state.profile.name
                    ? $store.state.profile.name
                    : "profil"
                }}
              </p>
            </li>
            <li class="nav_profile flex-row" @click="toProfile(true)" v-else>
              <span v-html="navUser"></span>
              <p>{{ $store.state.translations["main.profil"] }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-mobile container_xl w-100">
      <div class="d-flex align-items-center">
        <button @click="catalogMenu = !catalogMenu" class="drawer-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M9.99902 12.5029H35.0003M9.99902 22.5004H35.0003M9.99902 32.4979H35.0003"
              stroke="#98A0A6"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <nuxt-link :to="localePath('/')"
          ><span class="nav_logo" v-html="navLogoMobile"></span
        ></nuxt-link>
      </div>
      <!-- <div class="coin_btn" @click="$router.push(localePath('/d-coin/about'))">
        <span><nuxt-img format="webp" src="/coin.png" alt="" /></span>
        {{ $store.state.profile?.dicoin?.quantity }}
        {{ $store.state.translations["main.dicoin"] }}
      </div> -->
    </div>
    <Transition duration="550" name="nested">
      <div class="catalog-menu-container outer" v-if="catalogMenu">
        <div class="position-relative w-100 inner">
          <div class="catalog-menu-left-bg"></div>
          <div
            class="container_xl d-flex position-relative menu-scroll"
            style="z-index: 2"
          >
            <div class="catalog-menu-content web_categories">
              <div class="catalog-menu-list">
                <ul>
                  <li
                    v-for="category in categories"
                    :key="category?.id"
                    @click="$router.push(localePath(`/categories/${category?.slug}`))"
                    @mouseover="targetCategory(category)"
                    :class="{
                      'catalog-menu-list-active': activeCategory?.id == category?.id,
                    }"
                  >
                    <p class="category-name">
                      <img v-if="category?.md_icon" :src="category?.md_icon" alt="" />
                      <span
                        class="mx-0"
                        v-if="category?.icon_svg"
                        v-html="category?.icon_svg"
                      ></span
                      >{{ category?.name }}
                    </p>
                    <span v-if="activeCategory?.id == category?.id"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                      >
                        <path
                          d="M0.800427 0.286251C0.617141 0.469593 0.514176 0.718224 0.514176 0.977469C0.514176 1.23671 0.617141 1.48535 0.800427 1.66869L4.9976 5.86586L0.800427 10.063C0.707049 10.1532 0.632567 10.2611 0.581328 10.3804C0.530089 10.4997 0.503118 10.628 0.50199 10.7578C0.500862 10.8876 0.5256 11.0163 0.574758 11.1365C0.623917 11.2566 0.696512 11.3658 0.788309 11.4576C0.880106 11.5494 0.989265 11.622 1.10942 11.6711C1.22957 11.7203 1.35831 11.745 1.48813 11.7439C1.61794 11.7428 1.74623 11.7158 1.86551 11.6646C1.98479 11.6133 2.09268 11.5388 2.18286 11.4455L7.07125 6.55708C7.25454 6.37373 7.3575 6.1251 7.3575 5.86586C7.3575 5.60661 7.25454 5.35798 7.07125 5.17464L2.18286 0.286251C1.99952 0.102965 1.75089 0 1.49165 0C1.2324 0 0.983769 0.102965 0.800427 0.286251Z"
                          fill="#09454f"
                        /></svg
                    ></span>
                  </li>
                </ul>
              </div>
              <div class="catalog-menu-body">
                <div class="d-flex categories-page-title mt-0 mb-5 align-items-end">
                  <MainTitle :title="activeCategory?.name" />
                  <span class="d-flex align-items-end"
                    >{{ activeCategory?.products_count }}
                    {{ $store.state.translations["main.products"] }}</span
                  >
                </div>
                <div class="catalog-menu-items">
                  <div>
                    <ul
                      v-for="categoryChild in chunkIntoN(activeCategory?.children, 3)[0]"
                      :key="categoryChild?.id"
                    >
                      <h4
                        @click="
                          $router.push(
                            localePath(`/categories-inner/${categoryChild?.slug}`)
                          )
                        "
                      >
                        {{ categoryChild?.name }}
                      </h4>
                      <nuxt-link
                        :to="localePath(`/categories-inner/${lastChild?.slug}`)"
                        v-for="lastChild in categoryChild?.children"
                        :key="lastChild?.id"
                      >
                        {{ lastChild?.name }}
                      </nuxt-link>
                    </ul>
                  </div>
                  <div>
                    <ul
                      v-for="categoryChild in chunkIntoN(activeCategory?.children, 3)[1]"
                      :key="categoryChild?.id"
                    >
                      <h4
                        @click="
                          $router.push(
                            localePath(`/categories-inner/${categoryChild?.slug}`)
                          )
                        "
                      >
                        {{ categoryChild?.name }}
                      </h4>
                      <nuxt-link
                        :to="localePath(`/categories-inner/${lastChild?.slug}`)"
                        v-for="lastChild in categoryChild?.children"
                        :key="lastChild?.id"
                      >
                        {{ lastChild?.name }}
                      </nuxt-link>
                    </ul>
                  </div>
                  <div>
                    <ul
                      v-for="categoryChild in chunkIntoN(activeCategory?.children, 3)[2]"
                      :key="categoryChild?.id"
                    >
                      <h4
                        @click="
                          $router.push(
                            localePath(`/categories-inner/${categoryChild?.slug}`)
                          )
                        "
                      >
                        {{ categoryChild?.name }}
                      </h4>
                      <nuxt-link
                        :to="localePath(`/categories-inner/${lastChild?.slug}`)"
                        v-for="lastChild in categoryChild?.children"
                        :key="lastChild?.id"
                      >
                        {{ lastChild?.name }}
                      </nuxt-link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog-menu-content mobile_categories">
              <div v-if="currentCategory" class="category_drop cuurent-box">
                <h4
                  @click="
                    dropAction(
                      categories.find((elem) => elem?.id == currentCategory?.parent_id)
                    )
                  "
                  class="current-category"
                >
                  <span v-html="dropArrow" class="rotate90 back-svg"></span>
                  <p class="category-name">
                    <img
                      v-if="currentCategory?.md_icon"
                      :src="currentCategory?.md_icon"
                      alt=""
                    />
                    <span
                      class="mx-0"
                      v-if="currentCategory?.icon_svg"
                      v-html="currentCategory?.icon_svg"
                    ></span
                    >{{ currentCategory?.name }}
                  </p>
                </h4>
                <ul class="category-drop-board mt-0" :class="{ 'height-auto': true }">
                  <div class="mt-3">
                    <li v-for="childCat in currentCategory.children" :key="childCat?.id">
                      <h5
                        @click="dropAction(childCat)"
                        v-if="childCat?.children?.length > 0"
                      >
                        {{ childCat?.name }}
                      </h5>
                      <nuxt-link
                        v-else
                        :to="
                          localePath(
                            currentCategory?.parent_id
                              ? `/categories-inner/${childCat?.slug}`
                              : `/categories/${childCat?.slug}`
                          )
                        "
                        >{{ childCat?.name }}</nuxt-link
                      >
                    </li>
                  </div>
                </ul>
              </div>
              <div
                v-if="!currentCategory"
                class="category_drop"
                v-for="category in categories"
                :key="category?.id"
              >
                <h4 @click="dropAction(category)">
                  <p class="category-name">
                    <img v-if="category?.md_icon" :src="category?.md_icon" alt="" />
                    <span
                      class="mx-0"
                      v-if="category?.icon_svg"
                      v-html="category?.icon_svg"
                    ></span
                    >{{ category?.name }}
                  </p>
                  <span v-html="dropArrow" class="rotatem90"></span>
                </h4>
              </div>
            </div>
            <div class="close-space" @click="catalogMenu = false"></div>
          </div>
          <div class="mobile_lang">
            <div
              v-for="locale in locales"
              :class="{ active: $i18n.locale == locale.code }"
              :key="locale.id"
              @click="$router.push(switchLocalePath(locale.code))"
            >
              {{ locale.name }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <AuthModals />
    <div
      class="seach-resoult-mask"
      v-if="searchBlockHide"
      @click="searchBlockHide = false"
    ></div>

    <div class="menue"></div>
  </div>
</template>
<script>
import MainTitle from "../Main-title.vue";
import Vnotification from "../vnotification.vue";
import AuthModals from "./AuthModals.vue";
export default {
  name: "Navbar",
  props: ["categoryVisible"],
  data() {
    return {
      locales: [
        { id: 1, code: "uz", name: "O'z" },
        // {
        //   id: 2,
        //   code: "en",
        //   name: "ENG",
        // },
        {
          id: 3,
          code: "ru",
          name: "Ру",
        },
      ],
      searchLastResoults: true,
      searchBlockHide: false,
      catalogMenu: false,
      search: "",
      navLogo: require("../../assets/svg/green-logo.svg?raw"),
      navLogoMobile: require("../../assets/svg/green-logo-mobile.svg?raw"),
      searchClock: require("../../assets/svg/searchClock.svg?raw"),
      navMic: require("../../assets/svg/mic.svg?raw"),
      navSearch: require("../../assets/svg/search.svg?raw"),
      navLike: require("../../assets/svg/Heart.svg?raw"),
      navBasket: require("../../assets/svg/Buy.svg?raw"),
      navComp: require("../../assets/svg/nav-comp.svg?raw"),
      navOrder: require("../../assets/svg/Order_light.svg?raw"),
      navUser: require("../../assets/svg/User_alt_light.svg?raw"),
      navCategory: require("../../assets/svg/category_menu.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      categories: [],
      searchProducts: [],
      searchCategories: [],
      activeCategory: null,
      currentCategory: null,
      targetPage: false,
      searchResoults: [],
      activeDrop: [],
      dropArrow: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.67301 17.5592 0.67301 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.67301 1.64932 0.67301 1.16116 1.16117C0.67301 1.64932 0.67301 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z"
                      fill="black"
                    /></svg
                >`,
    };
  },

  async fetch() {
    const [categoriesData] = await Promise.all([
      this.$store.dispatch("fetchCategories/getCategories", {
        headers: {
          lang: this.$i18n.locale,
        },
      }),
    ]);
    this.categories = categoriesData?.data;
    this.activeCategory = categoriesData?.data[0];
  },

  computed: {
    routerPath() {
      return this.$route.path;
    },
    langChange() {
      return this.$i18n.locale;
    },
  },
  async mounted() {
    if (!localStorage.getItem("search_resoults")) {
      localStorage.setItem("search_resoults", JSON.stringify([]));
    } else {
      this.searchResoults = JSON.parse(localStorage.getItem("search_resoults"));
    }
  },
  methods: {
    dropAction(obj) {
      if (this.currentCategory?.id != obj?.id && obj?.id) {
        this.currentCategory = { ...obj };
      } else {
        this.currentCategory = null;
      }
      console.log("val", this.currentCategory);
    },
    clearSearchResoults() {
      localStorage.setItem("search_resoults", JSON.stringify([]));
      this.searchResoults = JSON.parse(localStorage.getItem("search_resoults"));
    },
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
    chunkIntoN(arr, n) {
      const size = Math.ceil(arr.length / n);
      return Array.from({ length: n }, (v, i) => arr.slice(i * size, i * size + size));
    },
    toProfile(name) {
      this.targetPage = name;
      if (this.$store.state.auth) {
        this.$router.push("/profile/personal-info");
      } else {
        this.$store.commit("authVisibleChange", true);
      }
    },

    targetCategory(obj) {
      this.activeCategory = obj;
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
    categoryVisible() {
      this.catalogMenu = true;
    },
    search(val) {
      if (val.length > 2) {
        this.__GET_SEARCH();
        this.searchLastResoults = false;
      } else {
        this.searchProducts = [];
        this.searchCategories = [];
      }
    },
    async langChange() {
      const [categoriesData] = await Promise.all([
        this.$store.dispatch("fetchCategories/getCategories", {
          headers: {
            lang: this.$i18n.locale,
          },
        }),
      ]);
      this.categories = categoriesData?.data;
      this.activeCategory = categoriesData?.data[0];
    },
    async routerPath(val) {
      if (val == "/") this.search = "";
      this.searchBlockHide = false;
      this.targetPage = false;
      this.catalogMenu = false;
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },

    catalogMenu(val) {
      if (val) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      } else {
        this.currentCategory = null;

        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
      }
    },
  },
  components: { MainTitle, Vnotification, AuthModals },
};
</script>
<style lang="css">
/* .nav-icons svg path {
  fill: var(--color_green);
} */
.cuurent-box {
  padding-left: 16px;
}

.current-category span {
  position: absolute;
  left: 10px;
}
.back-svg svg {
  width: 15px;
}
.rotate90 {
  transform: rotate(90deg);
}
.rotatem90 {
  transform: rotate(-90deg);
}
.category-name {
  display: flex;
  gap: 7px;
  white-space: initial;
}
.category-name span,
.category-name img {
  width: 23px;
  height: 23px;
}
.height-auto.category-drop-board {
  padding-bottom: 34px;
}
.category-drop-board {
  max-height: 0;
  overflow: hidden;
  position: relative;
  transition: max-height 0.25s ease-out;
  /* padding-bottom: 34px; */
}
.category-drop-board div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 12px;
}
.category-drop-board a,
.category-drop-board h5 {
  color: #00162c;
  font-family: var(--SB_400);
  font-size: 16px;
  font-style: normal;
  line-height: 20px; /* 125% */
  letter-spacing: 0.2px;
}

.category_drop h4 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px 8px;
  border-radius: 11.732px;
  color: #5f5f5f;
  font-family: var(--SB_600);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.554px; /* 122.21% */
  letter-spacing: 0.196px;
}
.close-space {
  width: 33%;
}
.header-navbar {
  position: relative;
  display: flex;
  align-items: center;
  max-height: 62px;
}
.catalog-menu-body .main-title {
  margin-bottom: 0 !important;
}
.catalog-menu-body > span {
  margin-left: 32px;
}
.catalog-menu-container {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  top: 100%;
  background: rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(2.5px); */
  position: absolute;
}
.catalog-menu-content {
  padding-top: 95px;
  /* margin-top: 63px; */
  background: #fff;
  height: 100vh;
  width: 77%;
  padding-right: 65px;
  display: flex;
}
.catalog-menu-left-bg {
  position: absolute;
  width: 50%;
  background: #fff;
  top: 0;
  left: -100px;
  height: 100%;
}
.catalog-menu-list {
  min-width: 253px;
  max-width: 255px;
  margin-right: 28px;
  max-height: 100vh;
  overflow-y: scroll;
  padding-bottom: 140px;
}
.catalog-menu-list::-webkit-scrollbar {
  display: none;
}
.catalog-menu-list ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
}
.catalog-menu-list ul li {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 15.6428px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.195536px;
  color: #5f5f5f;
  padding: 12px;
  /* padding-right: 20px; */
  border-radius: 11.7321px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  position: relative;
  white-space: nowrap;
}
.catalog-menu-list ul li span {
  margin-left: 7px;
}
.catalog-menu-list-active {
  background: #f7f7f7;
  color: var(--color_green) !important;
}
.catalog-menu-list ul li:hover {
  background: #f7f7f7;
  color: var(--color_green);
}
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}
.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}
.nested-enter-active {
  transition: all 0.3s ease-in-out;
}
.nested-leave-active .inner {
  animation: menu-in 0.25s reverse;
}
.nested-enter-active .inner {
  animation: menu-in 0.5s;
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  transition: all 0.25s ease-out;
  opacity: 0.001;
}
.mobile_lang {
  display: none;
}
@keyframes menu-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
.catalog-menu-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  overflow-y: scroll;
  height: calc(75vh - 100px);
  padding-bottom: 100px;
}
.catalog-menu-items::-webkit-scrollbar {
  display: none;
}
.catalog-menu-items ul {
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
}
.catalog-menu-items ul h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #001a34;
  cursor: pointer;
  transition: 0.3s;
}
.catalog-menu-items ul h4:hover {
  color: var(--color_green);
}
.catalog-menu-items ul a {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  color: #5f5f5f;
  margin-top: 8px;
}
.catalog-menu-items ul a:hover {
  color: var(--color_green);
}
.vmodal-anim-header {
  height: 285px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vmodal-anim-header h5 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 32px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--color_green);
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
}
.vmodal-anim-header span,
.vmodal-anim-header img {
  position: absolute;
}
.vmodal-anim-header span {
  top: 45px;
  right: 45px;
  cursor: pointer;
}
.vmodal-anim-header .shadow-ell-1 {
  right: 50px;
}
.vmodal-anim-header .shadow-ell-2 {
  left: 50px;
}
.vmodal-btn-outline {
  border: 2px solid var(--color_green);
  border-radius: 16px;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: var(--color_green);
  margin-top: 10px;
  cursor: pointer;
}
.vmodal-btn-height {
  height: 59px !important;
}
.register-input input {
  height: 60px;
  background: #f9f9f9;
  padding-left: 22px;
  border-radius: 16px;
  width: 100%;
}
.register-input input:focus {
  outline: none;
}
.register-input label {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #7b7b7b;
  margin-bottom: 6px !important;
  padding-bottom: 0 !important;
}
.number-error {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  text-align: right;
  right: 21px;
  color: #ff3f3f;
}
.vmodal-forget-password {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #06858c;
  margin-top: 22px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.ant-form-item-required::before {
  display: none;
}
.count-index {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff3a55;
  font-family: var(--SB_700);
  font-style: normal;
  font-size: 10px;
  line-height: 120%;
  color: #ffffff;
  right: 8px;
  top: -4px;
  position: absolute;
}
.auth-modal {
  margin-bottom: 40px;
}
.register-input .has-error {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.register-input .has-error span {
  width: 100%;
}
.register-input .ant-form-explain {
  position: absolute;
  right: 21px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ff4f2d;
}
.register-input .has-error input,
.sms_code_error input {
  border: 1px solid #ffc0c0 !important;
}
.sms_code_number .ant-form-item-children,
.sms_code_error .ant-form-item-children {
  display: flex;
  align-items: center;
}
.sms_code_number .change_number {
  position: absolute;
  right: 20px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #387eca;
  cursor: pointer;
}
.sms_code_error .sms_code_error_text {
  position: absolute;
  right: 20px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #ff4f2d;
}
.seach-resoult-mask {
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(2.5px); */
  z-index: 1000;
  top: 100%;
}
.search-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.mobile_lang {
  grid-template-columns: repeat(2, 1fr);
  position: fixed;
  gap: 16px;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  padding: 0 30px;
  padding-top: 8px;
  z-index: 1000;
  padding-bottom: 24px;
}
.mobile_lang div {
  padding: 12px 0;
  color: var(--diskont-yashil, #06858c);
  border: 1px solid #ebebeb;
  background: #fcfffe;
  display: flex;
  justify-content: center;
  border-radius: 12px;
}
.mobile_lang .active {
  color: #fff;
  border: 1px solid #06858c;
  background: #06858c;
}

@media screen and (max-width: 1600px) {
  .coin_btn {
    padding: 0 12px 0 40px;
    font-size: 13px;
  }
  .nav_logo svg {
    width: 100px;
  }
  .catalog-btn {
    padding: 10px 22px;
    margin-right: 24px;
  }
  .search_input_container {
    width: 473px;
  }
  .header-top {
    background: #f2f5f7;
  }
  .header-navbar_container > div:first-child {
    width: auto !important;
  }
  .header-navbar_container > div:last-child {
    width: auto !important;
  }
  .header-navbar_container {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
  }
  .header-navbar_navbar ul li {
    padding: 10px 22px;
  }
  .count-index {
    top: -2px;
    right: 18px;
  }
  .user_profile p {
    width: unset;
    color: white;
  }
  .user_profile path,
  .user_profile circle {
    stroke: white !important;
  }
  .user_profile {
    border-radius: 41px;
    background: var(--color_green);
  }
  .header-category_container ul li a {
    margin-right: 8px;
    font-size: 14px;
  }
  .header-category_container ul li a span {
    margin-right: 10px;
  }
  .coin_btn {
    white-space: nowrap;
  }
}
@media (max-width: 1200px) {
  .catalog-menu-content {
    min-width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .catalog-menu-items {
    gap: 0;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    height: auto;
    padding-bottom: 32px;
  }
  .close-space {
    display: none;
  }
  .categories-page-title {
    margin-bottom: 16px;
  }
  .catalog-menu-items ul {
    margin-bottom: 16px;
  }
  .catalog-menu-container {
    /* overflow: scroll; */
    /* height: 100%; */
    background: white;
  }
  .menu-scroll {
    height: calc(100vh - 164px);
    overflow: scroll;
    background-color: #fff;
  }
  .catalog-menu-body {
    padding: 0 12px;
  }
}
.mobile_categories {
  display: none;
}
@media (max-width: 768px) {
  .catalog-menu-content {
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 14px;
  }
  .web_categories {
    display: none;
  }
  .mobile_categories {
    display: block;
  }
  .mobile_lang {
    display: grid;
  }
}
@media screen and (max-width: 576px) {
  .search_input_container {
    width: 100%;
  }
  .vmodal-anim-header h5 {
    font-size: 24px;
    width: 100%;
  }
  .vmodal-anim-header {
    height: 200px;
  }
}
</style>
