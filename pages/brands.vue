<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link class="disabled" :to="localePath('/')">
          {{ $store.state.translations["brend.brands"] }}
        </nuxt-link>
      </div>
      <div class="d-flex categories-page-title">
        <MainTitle :title="$store.state.translations['brend.all-brands']" class="mb-0" />
        <span
          >{{ brands?.length }}
          {{ $store.state.translations["category.product-count"] }}</span
        >
      </div>
      <div class="brands-grid">
        <div
          class="d-flex justify-content-center flex-column"
          v-for="brand in brands"
          :key="brand?.id"
        >
          <BrandCard :brand="brand" />
          <p class="brand-title">{{ brand?.name }}</p>
        </div>
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
import MainTitle from "../components/Main-title.vue";
import CategoriesCard from "../components/cards/CategoriesCard.vue";
import ProductCard from "../components/cards/ProductCard.vue";
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";
import CategoriesInnerBannerCarousel from "../components/categories/categoriesInner-banner-carousel.vue";
import CategoriesInnerBanner from "../components/categories/categoriesInner-banner.vue";
import CategoriesTabCarousel from "../components/categories/categoriesInner-tab-carousel.vue";
import BrandCard from "../components/cards/BrandCard.vue";
import global from "../mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../assets/svg/selected-filter-x.svg?raw"),
      disabled: false,
    };
  },
  async asyncData({ store, params, i18n }) {
    store.commit("loaderHandler", true);
    const [brandsData] = await Promise.all([store.dispatch("fetchBrands/getBrands")]);
    let brands = [...brandsData.brands];
    let brandsAll = brandsData.brands;
    brands = [...brandsData.brands];
    setTimeout(() => {
      store.commit("loaderHandler", false);
    },0)
    return {
      brandsAll,
      brands,
    };
  },
  methods: {
    onChange(value) {
      // console.log("change: ", value);
    },
    onAfterChange(value) {
      // console.log("afterChange: ", value);
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
    CategoriesInnerBannerCarousel,
    CategoriesInnerBanner,
    CategoriesTabCarousel,
    BrandCard,
  },
};
</script>
<style lang="css">
@import "../assets/css/pages/categories.css";
.brands-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
}
.brand-title {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  color: #000000;
  margin-top: 18px;
}
</style>
