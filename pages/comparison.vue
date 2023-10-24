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
      <div class="d-flex page-container-title comparison-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.comparison']" />
          <span class="d-flex align-items-end"
            >{{ compProducts?.length }}
            {{ $store.state.translations["category.product-count"] }}</span
          >
        </div>
        <div class="comparison-sort">
          <div class="comp-delete" @click="deleteAll" v-if="compProducts.length > 0">
            <!-- <span v-html="deleteIcon"></span> -->
            {{ $store.state.translations["main.delete-all"] }}
          </div>
          <a-select
            v-model="filterValue"
            class="categories-filter-select comparison-filter"
            :placeholder="$store.state.translations['main.sorting']"
            style="width: 252px"
            @change="filterChange"
          >
            <a-select-option
              v-for="item in categories"
              :key="item?.id"
              :label="item.name"
              :value="item.id"
              >{{ item.name }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div v-if="loading" class="comparison-empty">
        <b-skeleton v-for="elem in [1, 2, 3, 4]" :key="elem" width="100%" height="60vh">
        </b-skeleton>
      </div>
      <div class="yes" v-show="compProducts.length > 0 && !loading">
        <div class="page-container-body">
          <div
            class="swiper-comparison mySwiper"
            v-show="compProducts.length"
            style="overflow: hidden"
          >
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
      <div v-if="compProducts.length == 0 && !loading" class="empty-box-app no">
        <nuxt-img format="webp" src="/parcel.png" alt="" />
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

import { Swiper, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      arrowCarousel: require("../assets/svg/Arrow - Left.svg?raw"),
      categories: [],
      loading: false,
      filterValue: undefined,
      compProducts: [],
      comparisonData: [],
    };
  },

  computed: {
    comparisonChange() {
      return this.$store.state.comparison?.length;
    },
    changeCategory() {
      return this.$route.query?.category;
    },
  },
  async mounted() {
    let compProductsStore = JSON.parse(localStorage.getItem("comparison"));
    if (compProductsStore.length > 0) {
      await this.__GET_PRODUCTS_COMP({ products: compProductsStore });
    }
    const swiper = new Swiper(".swiper-comparison", {
      slidesPerView: 2,
      spaceBetween: 8,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      modules: [Navigation],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-comparison",
        prevEl: ".swiper-button-prev-comparison",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
  methods: {
    async deleteAll() {
      localStorage.setItem("comparison", JSON.stringify([]));
      await this.$store.commit("reloadStore");
      this.compProducts = [];
      this.comparisonData = [];
      this.filterValue = undefined;
    },
    async filterChange(e) {
      if (this.$route.query?.category * 1 !== e * 1) {
        await this.$router.replace({
          path: this.$route.path,
          query: { category: e },
        });
      }
      let compProductsStore = JSON.parse(localStorage.getItem("comparison"));
      if (compProductsStore.length > 0) {
        await this.__GET_PRODUCTS_COMP({ products: compProductsStore });
      }
    },
    async __GET_PRODUCTS_COMP(dataForm) {
      this.loading = await true;
      const compData = await this.$store.dispatch(
        "fetchProducts/getComparionsProductsById",
        {
          data: dataForm,
          params: {
            params: { ...this.$route.query },
            headers: { lang: this.$i18n.locale },
          },
        }
      );
      this.categories = await compData?.categories;
      if (!this.$route.query?.category) {
        await this.$router.replace({
          path: this.$route.path,
          query: { category: this.categories[0]?.id },
        });
        this.filterValue = this.categories[0]?.id;
      } else {
        this.filterValue = Number(this.$route.query?.category);
      }
      const productsData = await this.$store.dispatch("fetchProducts/getProductsById", {
        data: dataForm,
        params: {
          params: { ...this.$route.query },
          headers: { lang: this.$i18n.locale },
        },
      });
      this.compProducts = productsData?.products;
      this.comparisonData = compData?.data;
      this.loading = false;
    },
  },
  watch: {
    changeCategory(val) {
      if (this.compProducts.length > 0) {
        // setTimeout(() => {
        if (new Swiper()) {
          const swiper = new Swiper(".swiper-comparison", {
            slidesPerView: 2,
            spaceBetween: 8,
            effect: "flip",
            flipEffect: {
              slideShadows: false,
            },
            pagination: false,
            autoplay: {
              delay: 40000,
            },
            breakpoints: {
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            },
            navigation: {
              nextEl: ".swiper-button-next-comparison",
              prevEl: ".swiper-button-prev-comparison",
            },
          });
        }
        // },5000)
      }
    },
    comparisonChange() {
      let compProducts = JSON.parse(localStorage.getItem("comparison"));
      if (compProducts.length > 0) {
        this.__GET_PRODUCTS_COMP({ products: compProducts });
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
.comparison-sort {
  display: flex;
  gap: 32px;
  align-items: center;
}
.comp-delete {
  /* background: #f8f8f8; */
  border-radius: 9px;
  padding: 0 12px;
  height: 42px;

  display: flex;
  align-items: center;
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  color: #fc4141;
  cursor: pointer;
  text-decoration: underline;
}
.comparison-empty {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.comparison-title .categories-filter-select {
  margin-bottom: 0;
}
.comparison-title .ant-select-selection__rendered {
  width: 100%;
  padding-right: 40px;
}
.comparison-title .categories-filter-select .ant-select-selection {
  width: 100%;
}

@media (max-width: 768px) {
  .comparison-empty {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 576px) {
  .comparison-empty {
    grid-template-columns: repeat(2, 1fr);
  }
  .comparison-title {
    flex-direction: column;
    gap: 20px;
  }
  .comparison-title .categories-filter-select {
    width: 300px;
    margin-bottom: 0;
  }
  .comparison-title .categories-filter-select .ant-select-selection {
    width: 100%;
  }

  .comparison-title .main-title {
    margin-bottom: 0 !important;
  }
  .comp-delete {
    display: none;
  }
  .page-container-title span {
    margin-bottom: 2px !important;
  }
}
.comparison-filter {
  display: flex !important;
}
</style>
