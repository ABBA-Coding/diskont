<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link class="disabled" :to="localePath('/')">
          {{ $store.state.translations["main.comparison"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.comparison']" />
          <span class="d-flex align-items-end"
            >{{ compProducts?.length }}
            {{ $store.state.translations["category.product-count"] }}</span
          >
        </div>
        <a-select
          v-model="filterValue"
          class="categories-filter-select"
          placeholder="Select good person"
          style="width: 252px"
          @change="filterChange"
        >
          <a-select-option
            v-for="item in status"
            :key="item?.value"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <div v-if="compProducts.length > 0" class="yes">
        <div class="page-container-body">
          <div class="swiper-comparison mySwiper" style="overflow: hidden">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(product, index) in compProducts">
                <ComparisonCard
                  :product="product"
                  :indexId="index"
                  :comparison="comparisonData"
                />
              </div>
            </div>
          </div>
          <div class="swiper-button-prev-comparison">
            <span v-html="arrowCarousel"></span>
          </div>
          <div class="swiper-button-next-comparison">
            <span v-html="arrowCarousel"></span>
          </div>
        </div>
      </div>
      <div v-else class="empty-box-app no">
        <img src="../assets/images/parcel.png" alt="" />
        <h2>{{ $store.state.translations["main.comp-empty-title"] }}</h2>
        <p>
          {{ $store.state.translations["main.comp-empty-text"] }}
        </p>
      </div>
    </div>
    <div class="categories-app-banner-container">
      <!--<div class="container_xl">
        <CategoriesAppCard />
      </div>-->
    </div>
  </div>
</template>
<script>
import ComparisonCard from "../components/cards/ComparisonCard.vue";
import MainTitle from "../components/Main-title.vue";
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";

import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      arrowCarousel: require("../assets/svg/Arrow - Left.svg?raw"),
      status: [
        {
          value: "all",
          label: "Barchasi",
        },
        {
          value: "phones",
          label: "Telefonlar",
        },
      ],
      filterValue: "all",
      compProducts: [],
      comparisonData: [],
    };
  },

  computed: {
    comparisonChange() {
      return this.$store.state.comparison?.length;
    },
  },
  async mounted() {
    let compProductsStore = JSON.parse(localStorage.getItem("comparison"));
    if (compProductsStore.length > 0) {
      await this.__GET_PRODUCTS_BY_ID({ products: compProductsStore });
      await this.__GET_PRODUCTS_COMP({ products: compProductsStore });
    }
    const swiper = new Swiper(".swiper-comparison", {
      slidesPerView: 4,
      spaceBetween: 24,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      navigation: {
        nextEl: ".swiper-button-next-comparison",
        prevEl: ".swiper-button-prev-comparison",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
  methods: {
    async __GET_PRODUCTS_BY_ID(dataForm) {
      // getComparionsProductsById
      const data = await this.$store.dispatch("fetchProducts/getProductsById", {
        data: dataForm,
        params: {
          headers: { lang: this.$i18n.locale },
        },
      });
      this.compProducts = data?.products;
    },
    async filterChange(e) {
      if (e == "all") {
        await this.$router.replace({
          path: `comparison`,
          query: {},
        });
      } else {
        await this.$router.replace({
          path: `comparison`,
          query: { category: e },
        });
      }
      let compProductsStore = JSON.parse(localStorage.getItem("comparison"));
      if (compProductsStore.length > 0) {
        await this.__GET_PRODUCTS_BY_ID({ products: compProductsStore });
        await this.__GET_PRODUCTS_COMP({ products: compProductsStore });
      }
    },
    async __GET_PRODUCTS_COMP(dataForm) {
      //
      const data = await this.$store.dispatch("fetchProducts/getComparionsProductsById", {
        data: dataForm,
        params: {
          params: { ...this.$route.query },
          headers: { lang: this.$i18n.locale },
        },
      });
      this.comparisonData = data?.data;
    },
  },
  watch: {
    comparisonChange() {
      let compProducts = JSON.parse(localStorage.getItem("comparison"));
      if (compProducts.length > 0) {
        this.__GET_PRODUCTS_BY_ID({ products: compProducts });
      } else {
        this.compProducts = [];
      }
    },
  },
  components: { MainTitle, ComparisonCard, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
</style>
