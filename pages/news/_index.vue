<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')"> Yangilik </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Yangilik" />
          <span class="d-flex align-items-end">{{
            moment(post?.created_at).format("DD.MM.YYYY")
          }}</span>
        </div>
      </div>
      <div class="post-page-body">
        <div class="post-page-img">
          <img v-if="post?.lg_img" :src="post?.lg_img" alt="" />
          <img v-else src="../../assets/images/image 317.png" alt="" />
        </div>
        <div class="post-page-info">
          <h1>{{ post?.title }}</h1>
          <p v-html="post?.desc"></p>
        </div>
      </div>
      <div class="last-news">
        <h2>So’nggi yangiliklar</h2>
      </div>
      <PostsCarousel>
        <div class="swiper-slide" v-for="post in posts" :key="post.id">
          <PostCard :post="post" />
        </div>
      </PostsCarousel>
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
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
import moment from "moment";
import PostsCarousel from "../../components/posts-carousel.vue";
import PostCard from "../../components/cards/PostCard.vue";
export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      deleteIcon: require("../../assets/svg/Delete.svg?raw"),
    };
  },
  async asyncData({ store, params, i18n }) {
    const [postData] = await Promise.all([
      store.dispatch("fetchPosts/getPostsBySlug", {
        id: params.index,
        params: {
          headers: {
            lang: i18n.locale,
          },
        },
      }),
    ]);
    const post = postData?.post;
    const posts = postData?.other_posts;
    return {
      post,
      posts,
    };
  },
  methods: {
    moment,
  },
  components: {
    MainTitle,
    CategoriesAppCard,
    ProductCard,
    PostsCarousel,
    PostCard,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
.post-page-img {
  height: 372px;
  width: 660px;
  display: inline-flex;
  overflow: hidden;
  border-radius: 24px;
  margin-bottom: 6px;
}
.post-page-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-page-info {
  width: 90%;
  margin-bottom: 64px;
}
.post-page-info h1 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
  margin-bottom: 24px;
  margin-top: 12px;
}
.post-page-info p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #696969;
}
.last-news h2 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  color: #000000;
  margin-bottom: 24px;
}
</style>
