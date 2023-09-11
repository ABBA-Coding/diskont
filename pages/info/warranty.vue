<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{ $store.state.translations["main.home-page"] }}</nuxt-link>
        <nuxt-link :to="localePath('/')"> Maxsulotlarga kafolat </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Maxsulotlarga kafolat" />
        </div>
      </div>
      <div class="about-us__container">
        <AboutMenuList />
        <div class="about-us__body">
          <!-- <div class="about-us__banner">
            <div></div>
          </div> -->
          <h3>Kafolat xizmati uchun qayerga murojaat qilishim mumkin?</h3>
          <p>
            Bizning do`konimizdagi tovarlar, tovarlarda zavod nuqsonlari yo`qligi haqidagi
            majburiyatni tasdiqlovchi kafolat bilan ta`minlangan. Kafolat ishlab
            chiqaruvchining xizmat ko`rsatish siyosatiga ko`ra 10 kundan 3 yilgacha
            bo`lgan muddatga taqdim etiladi.
          </p>
          <p>
            Kafolat xizmati, ishlab chiqaruvchilar tomonidan ruxsat etilgan servis
            markazlari tomonidan amalga oshiriladi. Siz mahsulotni kafolatli ta`mirlashga
            yuborishingiz mumkin. Mavjud variantlar kafolat kartangizda ko`rsatilgan.
          </p>
          <p>
            Xizmat ko`rsatish markazlarining manzillari va telefon raqamlarini kafolat
            kartasida yoki xizmat ko`rsatish markazlari ro`yxatida topishingiz mumkin.
          </p>
          <p>
            Agar sizning shahardagi tovarlar uchun xizmat ko'rsatish markazi bo'lmasa, siz
            kompaniyamizning mijozlarga xizmat ko'rsatish bo'limiga murojaat qilishingiz
            mumkin.
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
