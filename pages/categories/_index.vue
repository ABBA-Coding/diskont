<template lang="html">
  <div class="categories-page">
    <div class="container_xl">
      <div class="categories-page-grid">
        <div class="categories-list">
          <h5>{{ $store.state.translations["main.categories"] }}</h5>
          <ul>
            <li
              v-for="category in categories"
              :key="category.id"
              @click="$router.push(localePath(`/categories/${category?.slug}`))"
            >
              <span>{{ category?.name }}</span>
              <div
                class="child-categories-list"
                v-if="
                  category?.slug == $route.params.index && category?.children.length > 0
                "
              >
                <!-- <span
                  v-for="childs in category?.children"
                  :key="childs.id"
                  @click="
                    $router.push({
                      path: `/categories-inner/${childs.slug}`,
                      params: { index: childs.slug },
                    })
                  "
                >
                  {{ childs?.name }}{{ `/categories-inner/${childs.slug}` }}</span
                > -->
                <nuxt-link
                  v-for="childs in category?.children"
                  :key="childs.id"
                  :to="localePath(`/categories-inner/${childs?.slug}`)"
                  >{{ childs?.name }}</nuxt-link
                >
              </div>
            </li>
          </ul>
          <div class="d-flex justify-content-center" v-if="loading">
            <a-spin size="small" />
          </div>
          <span
            class="categories-list_show-more"
            v-if="!allCategories && categories.length <= 10"
            @click="__GET_ALL_CATEGORIES"
            >{{ $store.state.translations["main.show-more"] }}</span
          >
        </div>
        <div>
          <div>
            <div class="page-breadcrumb">
              <nuxt-link :to="localePath('/')">{{
                $store.state.translations["main.home-page"]
              }}</nuxt-link>
              <nuxt-link :to="localePath('/')">
                {{ categoryChilds?.name }}
              </nuxt-link>
            </div>
            <div class="d-flex categories-page-title">
              <MainTitle class="mb-0" :title="categoryChilds?.name" />
              <span
                >{{ categoryChilds?.children?.length }}
                {{ $store.state.translations["main.category"] }}</span
              >
            </div>
          </div>
          <div class="categories-card-grid">
            <CategoriesCard
              v-for="category in categoryChilds?.children"
              :key="category.id"
              :category="category"
            />
          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <ProductListTitle title="Kategoriyadagi top tavarlar" />
        </div>
        <div class="product-grid">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
      <div class="categories-page-info" v-html="categoryChilds?.desc"></div>
    </div>
    <div class="categories-app-banner-container">
        <!--<div class="container_xl">
        <CategoriesAppCard />
      </div>-->
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
import CategoriesCard from "../../components/cards/CategoriesCard.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
import ProductListTitle from "../../components/ProductList-title.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      loading: false,
      allCategories: false,
      //   categoryChilds: [],
    };
  },
  async asyncData({ $axios, params, store, i18n }) {
    const [categoriesData, categoryChildsData, productsData] = await Promise.all([
      $axios.$get(`/categories`, {
        params: {
          limit: 10,
        },
      }),
      $axios.$get(`/categories/${params.index}`),
      store.dispatch("fetchProducts/getProducts", {
        params: { limit: 12 },
        headers: {
          lang: i18n.locale,
        },
      }),
    ]);
    const categories = categoriesData?.data;
    const categoryChilds = categoryChildsData?.category;
    const products = productsData?.products?.data;
    return {
      categories,
      categoryChilds,
      products,
    };
  },
  methods: {
    async __GET_ALL_CATEGORIES() {
      this.allCategories = true;
      this.loading = true;
      const data = await this.$axios.$get(`/categories`, {});
      this.categories = data?.data;
      this.loading = false;
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
    ProductListTitle,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
</style>
