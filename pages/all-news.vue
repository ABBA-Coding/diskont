<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["main.all-posts"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.all-posts']" />
          <span class="d-flex align-items-end"
            >{{ totalPage }} {{ $store.state.translations["main.news"] }}</span
          >
        </div>
      </div>
      <div class="posts-page-body" v-if="posts.length > 0">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="empty-box-app" v-else>
         <nuxt-img format="webp" src="/comments-empty.png" alt="" />
        <h2>{{ $store.state.translations["main.no-news"] }}</h2>
      </div>
      <div class="products-pagination" v-if="totalPage > params.pageSize">
        <a-pagination
          size="small"
          v-model.number="current"
          :total="totalPage"
          :page-size.sync="params.pageSize"
        />
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
import PostCard from "../components/cards/PostCard.vue";
import global from "../mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      deleteIcon: require("../assets/svg/Delete.svg?raw"),
    };
  },
  async asyncData({ store, i18n, query }) {
    store.commit("loaderHandler", true);
    const [posts1] = await Promise.all([
      store.dispatch("fetchPosts/getPosts", {
        params: {
          ...query,
        },
        headers: {
          lang: i18n.locale,
        },
      }),
    ]);
    const posts = posts1?.posts?.data;
    const totalPage = posts1?.posts?.total;
    setTimeout(() => {
      store.commit("loaderHandler", false);
    },0)
    return {
      posts,
      totalPage,
    };
  },
  async mounted() {
    if (!Object.keys(this.$route.query).includes("page")) {
      await this.$router.replace({
        path: "all-news",
        query: { page: this.params.page },
      });
    }
    this.current = Number(this.$route.query.page);
  },
  methods: {
    async __GET_NEWS() {
      try {
        const data = await this.$store.dispatch("fetchPosts/getPosts", {
          params: {
            ...this.$route.query,
          },
          headers: {
            lang: this.$i18n.locale,
          },
        });
        this.posts = data?.posts?.data;
        this.totalCount = data?.posts?.total;
      } catch (e) {}
    },
  },
  watch: {
    async current(val) {
      this.changePagination(val, "__GET_NEWS");
    },
  },
  components: { MainTitle, CategoriesAppCard, ProductCard, PostCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.posts-page-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 26px;
  margin-bottom: 60px;
}
@media screen and (max-width: 1024px) {
  .posts-page-body {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
</style>
