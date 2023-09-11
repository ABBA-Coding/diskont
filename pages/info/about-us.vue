<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{ $store.state.translations["main.home-page"] }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["main.aboutus"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.aboutUs']" />
        </div>
      </div>
      <div class="about-us__container">
        <AboutMenuList />
        <div class="about-us__body">
          <!-- <div class="about-us__banner">
            <div></div>
          </div> -->
          <h3>{{ $store.state.translations["main.aboutUs"] }}.</h3>
          <p>
            “DIskont” MCHJ 2019 Yilda yirik savdo tarmog’i bo’lib tashkil topgan.
            O’zbekistonda ko’p hildagi maishiy tehnika va elektronika sotishga
            yonaltirilgan. Siz hech qanday qiyinchiliksiz nasiya va naqt pulga tehnika
            sotib olishingiz mumin. Hozirgi vaqtga kelib O’zbekiston bo’yicha 18ta do’kon
            halq hizmatida bo’lib juda ko’p mijozlariga ega. Bizni asosiy maqsadimiz mijoz
            mamnunlgi va halol savdo. Diskont do’konlar tarmog’ida katta asortiment bo’lib
            aynan siz uchun kerakli maishiy tehnika va electron qurilmalarni taqdim etadi.
            Shu bilan birgalikda ishlab chiqaruvchi tomonidan sertifikatlar va zavod
            kafolatiga ega. Albatta Discont tomonidan kelgan mijozlarga qulaylik sifatida
            har bir uskuna haqida to’liq malumot berilib o’tiladi. Malakali hodimlar
            sizning hizmatingizda. Bundan tashqari onson to’lov uchun click payme va uzum
            platformalari bilan birga ish yuritadi.
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
