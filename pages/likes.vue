<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link class="disabled" :to="localePath('/')">
          {{ $store.state.translations["main.liked"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.liked']" />
          <span class="d-flex align-items-end"
            >{{ likeProducts.length }}
            {{ $store.state.translations["category.product-count"] }}</span
          >
        </div>
        <div class="likes-delete" @click="deleteAll" v-if="likeProducts.length > 0">
          <span v-html="deleteIcon"></span>
          {{ $store.state.translations["main.delete-all"] }}
        </div>
      </div>
      <div class="likes-page-body" v-if="likeProducts.length > 0">
        <ProductCard
          v-for="product in likeProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/packaging love.png" alt="" />
        <h2>{{ $store.state.translations["main.like-empty-title"] }}</h2>
        <p>
          {{ $store.state.translations["main.like-empty-text"] }}
        </p>
      </div>
      <div class="categories-products-show-more" v-if="likeProducts.length > 44">
        {{ $store.state.translations["main.show-more"] }} 44
      </div>
      <div class="products-pagination" v-if="likeProducts.length > 44">
        <a-pagination size="small" :default-current="6" :total="500" />
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
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";
import ProductCard from "../components/cards/ProductCard.vue";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      deleteIcon: require("../assets/svg/Delete.svg?raw"),
      likeProducts: [],
    };
  },
  computed: {
    likesChange() {
      return this.$store.state.like.length;
    },
  },
  mounted() {
    let likesProducts = JSON.parse(localStorage.getItem("like"));
    if (likesProducts?.length > 0) this.__GET_PRODUCTS_BY_ID({ products: likesProducts });
  },
  methods: {
    async deleteAll() {
      localStorage.setItem("like", JSON.stringify([]));
      await this.$store.commit("reloadStore");
      this.likeProducts = [];
    },
    async __GET_PRODUCTS_BY_ID(dataForm) {
      const data = await this.$store.dispatch("fetchProducts/getProductsById", {
        data: dataForm,
        params: {
          headers: {
            lang: this.$i18n.locale,
          },
        },
      });
      this.likeProducts = data?.products;
    },
  },
  watch: {
    likesChange(val) {
      let likesProducts = JSON.parse(localStorage.getItem("like"));
      this.__GET_PRODUCTS_BY_ID({ products: likesProducts });
      if (val == 0) {
        this.likeProducts = [];
      }
    },
  },
  components: { MainTitle, CategoriesAppCard, ProductCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.likes-page-body {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  margin-bottom: 60px;
}
.likes-delete {
  background: #f8f8f8;
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
}
.likes-delete span {
  margin-right: 13px;
}
</style>
