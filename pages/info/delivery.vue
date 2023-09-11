<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{ $store.state.translations["main.home-page"] }}</nuxt-link>
        <nuxt-link :to="localePath('/')"> Yetkazib berish </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Yetkazib berish" />
        </div>
      </div>
      <div class="about-us__container">
        <AboutMenuList />
        <div class="about-us__body">
          <!-- <div class="about-us__banner">
            <div></div>
          </div> -->
          <h3>Yetkazib berish</h3>
          <p>
            Diskont do’konlar tarmog’i yetkazib berish hizmatiga ega. Hozirgi kunda
            Toshkent shahri bo’yicha tekinga yetkazib beriladi. Faqatgina katta maishiy
            tehnika yetkazib beriladi. Mahsulotni harid qilgan kundan boshlab 3 ish kuni
            ichida yetkazib beriladi. Mahsulotni olib kelishdan oldin harid qiluvchiga
            habar beriladi va aniq vaqti aytiladi.
          </p>
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
import AboutMenuList from "../../components/aboutMenuList.vue";
import MainTitle from "../../components/Main-title.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
export default {
  data() {
    return {};
  },
  mounted() {},

  methods: {},
  components: { MainTitle, CategoriesAppCard, AboutMenuList },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/about-us.css";
</style>
