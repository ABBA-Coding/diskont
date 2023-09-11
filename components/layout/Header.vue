<template lang="html">
  <div ref="navScroll" class="nav_scroll">
    <div class="header-top d-flex" ref="header_top">
      <div class="container_xl w-100">
        <div class="d-flex justify-content-between">
          <ul class="d-flex align-items-center">
            <li>
              <span v-html="location" class="nav-location"></span>
              {{ $store.state.translations["main.tashkent"] }}
            </li>
            <li @click="$router.push(localePath('/stores'))">
              {{ $store.state.translations["main.store-address"] }}
            </li>
            <li @click="$router.push(localePath('/about'))">
              {{ $store.state.translations["main.aboutus"] }}
            </li>
          </ul>
          <div class="d-flex header-top__right">
            <a :href="`tel:${$store.state.siteInfo?.phone_number}`"
              >+{{
                `${$store.state.siteInfo?.phone_number}`
                  .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                  ?.filter((item, index) => index != 0)
                  .join(" ")
              }}</a
            >
            <p class="d-flex align-items-center lang_locales">
              <span
                v-for="locale in locales"
                :class="{ 'header-lang-active': $i18n.locale == locale.code }"
                :key="locale.id"
                @click="$router.push(switchLocalePath(locale.code))"
                >{{ locale.name }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="position-relative">
      <span style="z-index: 3; position: relative" ref="navScroll3">
        <Navbar />
      </span>
      <span ref="navScroll2" class="category-list-scroll">
        <CategoryList />
      </span>
    </div>
  </div>
</template>
<script>
import CategoryList from "./CategoryList.vue";
import HeaderMobile from "./HeaderMobile.vue";
import Navbar from "./Navbar.vue";

export default {
  data() {
    return {
      locales: [
        { id: 1, code: "uz", name: "O'Z" },
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
      location: require("../../assets/svg/header-location.svg?raw"),
    };
  },
  computed: {
    routerName() {
      return this.$route.path;
    },
  },
  mounted() {
    var header = this.$refs.navScroll;
    var header2 = this.$refs.navScroll2;
    var header3 = this.$refs.navScroll3;
    var headerTop = this.$refs.header_top;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        if (window.innerWidth > 576) {
          header.style.top = `-${headerTop.offsetHeight}px`;
        }
        // headerTop.style.marginTop = "-100%";
        // header2.style.marginTop = `-${header2.offsetHeight}px`;
        header2.style.display = "none";
        header3.style.boxShadow = " 0 0.5rem 1rem rgb(0 0 0 / 15%)";
        // header.style.background = "#04babe";
        header.style.marginTop = "0";
      } else if (document.documentElement.scrollTop == 0) {
        // header.style.marginTop = "0";
        header.style.boxShadow = "none";
        // header3.style.boxShadow = "none";
        header2.style.display = "block";
        // header.style.background = "#04babe";
      } else {
        // header2.style.display = "block";

        // header2.style.marginTop = "0";
        header.style.top = "0";
        header.style.boxShadow = " 0 0.3rem 0.5rem rgb(0 0 0 / 15%)";
        header3.style.boxShadow = " 0 0.3rem 0.5rem rgb(0 0 0 / 15%)";
        header.style.background = "#fff";
        header.style.marginTop = "0";
      }
      this.lastScrollTop = scrollTop;
    });
  },
  watch: {
    routerName() {
      var header = this.$refs.navScroll;
      header.style.top = "0";
      header.style.marginTop = "0";
      header.style.boxShadow = "none";
    },
  },
  components: { Navbar, CategoryList },
};
</script>
<style lang="css">
.nav_scroll {
  transition: all 0.5s !important;
  height: auto;
  background-color: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000 !important;
}
.nav-location {
  margin-right: 10px;
}
.lang_locales span {
  padding-right: 7px;
  margin-right: 5px;
  position: relative;
}

.lang_locales span::after {
  content: "|";
  position: absolute;
  right: -1px;
}
.lang_locales span:last-child::after {
  display: none;
}
.lang_locales span:last-child {
  padding-right: 0;
  margin-right: 0;
}
.category-list-scroll {
  position: relative;
  z-index: 0;
  top: 100%;
  margin-top: 0;
  width: 100%;
  display: block;
  z-index: 0;
  transition: all 0.5s !important;
}
</style>
