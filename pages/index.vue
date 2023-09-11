<template>
  <div>
    <div class="container_xl">
      <div class="home-banner-container">
        <BannerCarousel>
          <div
            class="swiper-slide banner-slider"
            v-for="banner in banners?.filter((item) => item.type == 'main')"
            :key="banner?.id"
          >
            <a :href="banner?.link">
              <img :src="banner?.lg_img" alt="" />
            </a>
          </div>
        </BannerCarousel>
        <BannerCarouselRight>
          <div
            class="swiper-slide"
            v-for="banner in banners?.filter((item) => item.type == 'product_of_the_day')"
            :key="banner?.id"
          >
            <DayProductCard :banner="banner" />
          </div>
        </BannerCarouselRight>
      </div>
      <div class="home-categories mb-120">
        <MainTitle :title="$store.state.translations[`main.categories`]" />
        <div>
          <HomeCategoryCarousel>
            <div
              class="swiper-slide"
              v-for="(category, index) in categories"
              :key="category.id"
            >
              <HomeCategoryCard :category="category" /></div
          ></HomeCategoryCarousel>
        </div>
        <!-- <div class="category-grid">
          <HomeCategoryCard
            v-for="(category, index) in categories"
            :key="category.id"
            :category="category"
          />
        </div> -->
      </div>
    </div>
    <div class="container_xl product_container" v-if="showcases[0]">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[0]?.name" />
          <nuxt-link
            class="to-page-underline"
            :to="localePath(`/showcases/${showcases[0]?.slug}`)"
            >{{ $store.state.translations["main.all-products"] }}</nuxt-link
          >
        </div>
        <div class="product-grid" v-if="showcases[0]?.products.length > 0">
          <ProductCard
            data-aos="fade-up"
            v-for="(product, index) in showcases[0]?.products"
            :key="product.id"
            :product="product"
            :data-aos-duration="`${index * 250}`"
          />
        </div>
      </div>
    </div>
    <div class="container_xl product_container" v-if="showcases[1]">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[1]?.name" />
          <nuxt-link
            class="to-page-underline"
            :to="localePath(`/showcases/${showcases[1]?.slug}`)"
            >{{ $store.state.translations["main.all-products"] }}</nuxt-link
          >
        </div>
        <div class="product-grid" v-if="showcases[1]?.products.length > 0">
          <ProductCard
            v-for="(product, index) in showcases[1]?.products"
            :key="product.id"
            :product="product"
            data-aos="fade-up"
            :data-aos-duration="`${index * 250}`"
          />
        </div>
      </div>
    </div>
    <div
      class="container_xl"
      v-if="banners.filter((item) => item.type == 'top').length > 0"
    >
      <HomeBanner :banner="banners.filter((item) => item.type == 'top')" />
    </div>
    <div class="container_xl" v-if="showcases[2]">
      <MainTitle :title="showcases[2]?.name" />
      <div class="last mb-120">
        <div class="products-grid-6" v-if="showcases[2]?.products.length > 0">
          <ProductCard
            v-for="product in showcases[2]?.products"
            :key="product.id"
            :product="product"
          />
          <span
            v-if="banners.filter((item) => item.type == 'promo').length > 0"
            class="d-flex"
            v-for="(img, index) in banners
              .filter((item) => item.type == 'promo')
              .slice(0, 2)"
            :class="`grid-banner-card-${index + 1}`"
            :key="img?.id"
          >
            <V2ProductCard :img="img" />
          </span>
          <!-- <span class="grid-banner-card-2 d-flex">
            <V2ProductCard />
          </span> -->
        </div>
      </div>
    </div>
    <div class="container_xl product_container" v-if="showcases[3]">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[3]?.name" />
          <nuxt-link
            class="to-page-underline"
            :to="localePath(`/showcases/${showcases[3]?.slug}`)"
            >{{ $store.state.translations["main.all-products"] }}</nuxt-link
          >
        </div>
        <div class="">
          <ProductCarousel>
            <div
              v-if="showcases[3]?.products.length > 0"
              class="swiper-slide"
              v-for="product in showcases[3]?.products"
              :key="product.id"
            >
              <ProductCard :product="product" />
            </div>
          </ProductCarousel>
        </div>
      </div>
    </div>
    <div class="container_xl product_container" v-if="showcases[4]">
      <div class="">
        <div class="d-flex justify-content-between align-items-end">
          <MainTitle :title="showcases[4]?.name" />
          <nuxt-link
            class="to-page-underline"
            :to="localePath(`/showcases/${showcases[4]?.slug}`)"
            >{{ $store.state.translations["main.all-products"] }}</nuxt-link
          >
        </div>
        <div class="" v-if="showcases[4]?.products.length > 0">
          <ProductCarousel2>
            <div
              class="swiper-slide"
              v-for="product in showcases[4]?.products"
              :key="product.id"
            >
              <ProductCard :product="product" />
            </div>
          </ProductCarousel2>
        </div>
      </div>
    </div>
    <!-- <div class="container_xl">
      <div class="">
        <MainBigTitle title="Eng arzon !" />
        <div class="h-catalog-tab">
          <ul>
            <li><span>Uy uchun</span>Uy uchun</li>
            <li><span>Telefonlar</span>Telefonlar</li>
            <li><span>Sport buyumlari</span> Sport buyumlari</li>
            <li><span>Oshxona uchun</span> Oshxona uchun</li>
            <li><span>Uy uchun</span>Uy uchun</li>
            <li><span>Telefonlar</span>Telefonlar</li>
            <li><span>Sport buyumlari</span> Sport buyumlari</li>
            <li><span>Oshxona uchun</span> Oshxona uchun</li>
          </ul>
        </div>
        <ProductCarousel>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
          <div class="swiper-slide">
            <ProductCard />
          </div>
        </ProductCarousel>
      </div>
    </div> -->
    <div class="container_xl" v-if="brands?.length > 0">
      <div class="d-flex justify-content-between align-items-end">
        <MainTitle :title="$store.state.translations[`main.top-brands`]" />
        <nuxt-link class="to-page-underline" :to="localePath(`/brands`)">{{
          $store.state.translations["main.all-brands"]
        }}</nuxt-link>
      </div>

      <div class="last mb-120">
        <BrandCarousel>
          <div class="swiper-slide" v-for="brand in brands" :key="brand.id">
            <BrandCard :brand="brand" />
          </div>
        </BrandCarousel>
      </div>
    </div>
    <div
      class="container_xl"
      v-if="banners.filter((item) => item.type == 'medium').length > 0"
    >
      <HomeBanner :banner="banners.filter((item) => item.type == 'medium')" />
    </div>
    <div
      class="container_xl"
      v-if="banners.filter((item) => item.type == 'small').length > 2"
    >
      <div class="small_banners_grid">
        <SmallBannerCard
          v-for="img in banners.filter((item) => item.type == 'small').slice(0, 3)"
          :key="img?.id"
          :img="img"
        />
      </div>
    </div>
    <!-- <div class="container_xl mb-120">
      <DiscountCarousel />
    </div> -->
    <!-- <div class="container_xl">
      <MainTitle :title="showcases[5]?.name" />
      <div class="v-card-products-grid mb-120">
        <div class="v-card-grid">
          <VProductCard />
          <VProductCard />
        </div>
        <div class="products-grid-5">
          <ProductCard
            v-for="product in showcases[5]?.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div> -->
    <div class="container_xl" v-if="showcases[5]">
      <MainTitle :title="showcases[5]?.name" />
      <div class="last mb-120">
        <div class="products-grid-6">
          <ProductCard
            v-if="howcases[5]?.products.length > 0"
            v-for="product in showcases[5]?.products"
            :key="product.id"
            :product="product"
          />

          <span class="grid-banner-card-1">
            <VProductCard />
          </span>
          <span class="grid-banner-card-2">
            <VProductCard />
          </span>
        </div>
      </div>
    </div>
    <div
      class="container_xl"
      v-if="banners.filter((item) => item.type == 'bottom').length > 0"
    >
      <HomeBanner :banner="banners.filter((item) => item.type == 'bottom')" />
    </div>
    <div class="container_xl classic mb-120" v-if="posts?.length > 0">
      <div class="d-flex justify-content-between align-items-end">
        <MainTitle :title="$store.state.translations['main.news-blogs']" />
        <nuxt-link class="to-page-underline" :to="localePath('/all-news')">
          {{ $store.state.translations["main.all-posts"] }}</nuxt-link
        >
      </div>
      <PostsCarousel>
        <div class="swiper-slide" v-for="post in posts" :key="post.id">
          <PostCard :post="post" />
        </div>
      </PostsCarousel>
    </div>
    <div class="rising container_xl mb-120">
      <DiscontBanner />
    </div>
    <!-- <div class="nope rising container_xl mb-120">
      <ApplicationBanner />
    </div> -->
    <div class="location container_xl mb-120">
      <div class="home-bottom-desc">
        <p>
          {{ $store.state.translations["main.home-bottom-text"] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BannerCarousel from "../components/Banner-carousel.vue";
import HomeCategoryCard from "../components/cards/HomeCategoryCard.vue";
import ProductCard from "../components/cards/ProductCard.vue";
import VProductCard from "../components/cards/VProductCard.vue";
import V2ProductCard from "../components/cards/V2ProductCard.vue";
import DiscountCarousel from "../components/discount-carousel.vue";
import MainTitle from "../components/Main-title.vue";
import MainBigTitle from "../components/Main-big-title.vue";
import ProductCarousel from "../components/product-carousel.vue";
import ProductCarousel2 from "../components/product-carousel2.vue";
import HomeBanner from "../components/HomeBanner.vue";
import BannerCarouselRight from "../components/Banner-carousel-right.vue";
import BrandCard from "../components/cards/BrandCard.vue";
import BrandCarousel from "../components/brand-carousel.vue";
import PostCard from "../components/cards/PostCard.vue";
import DiscontBanner from "../components/discont-banner.vue";
import ApplicationBanner from "../components/application-banner.vue";
import DayProductCard from "../components/cards/DayProductCard.vue";
import PostsCarousel from "../components/posts-carousel.vue";
import SmallBannerCard from "../components/cards/SmallBannerCard.vue";
import homeCategoryCarousel from "../components/home-category-carousel.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      // bestsellersProducts: [],
      // topProducts: [],
      // categories: [],
      // byCategoryProducts: [],
      // brands: [],
      // posts: [],
    };
  },
  async asyncData({ $axios, store, i18n }) {
    const [
      products,
      byCategory,
      topProductsData,
      categories1,
      brands1,
      posts1,
      showcasesData,
      bannersData,
    ] = await Promise.all([
      store.dispatch("fetchProducts/getProducts", {
        params: {
          type: "bestsellers",
          limit: 6,
        },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchProducts/getProducts", {
        params: { limit: 10 },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchProducts/getProducts", {
        params: { type: "popular", limit: 6 },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchCategories/getCategories", {
        // params: { limit: 6 },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchBrands/getBrands", {
        params: { limit: 10, top: 1 },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchPosts/getPosts", {
        params: { limit: 10 },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchProducts/getShowcases", {
        params: { limit: 6 },
        headers: {
          lang: i18n.locale,
        },
      }),
      store.dispatch("fetchBanners/getBanners", {
        headers: {
          lang: i18n.locale,
        },
      }),
    ]);
    const bestsellersProducts = products?.products?.data;
    const byCategoryProducts = byCategory?.products?.data;
    const topProducts = topProductsData?.products?.data;
    const categories = categories1?.data;
    const brands = brands1?.brands;
    const posts = posts1?.posts?.data;
    const showcases = showcasesData.showcases;
    const banners = bannersData?.banners?.data;
    console.log(banners);
    return {
      bestsellersProducts,
      byCategoryProducts,
      topProducts,
      categories,
      brands,
      posts,
      showcases,
      banners,
    };
  },
  mounted() {
    this.$store.dispatch("fetchProducts/getShowcases", {
      headers: {
        lang: this.$i18n.locale,
      },
    });
  },
  components: {
    BannerCarousel,
    ProductCard,
    MainTitle,
    DiscountCarousel,
    HomeCategoryCard,
    VProductCard,
    ProductCarousel,
    ProductCarousel2,
    MainBigTitle,
    HomeBanner,
    BannerCarouselRight,
    BrandCard,
    V2ProductCard,
    PostCard,
    DiscontBanner,
    ApplicationBanner,
    DayProductCard,
    PostsCarousel,
    SmallBannerCard,
    homeCategoryCarousel,
  },
};
</script>
<style>
@import "../assets/css/pages/main-page.css";

.banner-carousel .banner {
  width: 100%;
  height: 354px !important;
  background: red;
}
/* .home-banner-container .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */
.products-grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
}
.grid-banner-card-1 {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 2;
}
.grid-banner-card-2 {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 2;
}
@media screen and (max-width: 1024px) {
}
</style>
