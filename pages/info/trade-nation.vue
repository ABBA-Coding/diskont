<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{ $store.state.translations["main.home-page"] }}</nuxt-link>
        <nuxt-link :to="localePath('/')">Diskontda Nasiya savdo </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Diskontda Nasiya savdo" />
        </div>
      </div>
      <div class="about-us__container">
        <AboutMenuList />
        <div class="about-us__body">
          <!-- <div class="about-us__banner">
            <div></div>
          </div> -->
          <h3>Qanday qilib muddatli to’lov bilan sotib olish mumkin ?</h3>
          <p>
            Bizni do’konda qulay va arzon narhlarda mahsulotni muddatli to’lovga
            olishingiz mumkin. Mijozlar uchun barcha qulayliklarni taqdim qilamiz.
            Kelishingiz bilan o’zingizga yoqgan mahsulotni olib, kegin to’lov qilsangiz
            bo’ladi. Maishiy tehnikani oldindan to’lovsiz 6, 12, 18, 24, 36 oyga muddatli
            to’lovga olish imkoniyatiga egasiz . Muddatli tolo’v halol sertifikati bor.
          </p>
          <h4>
            Muddatli tolovga xarid qilinayotgan mahsulotlarni ro’yhatdan o’tkazish
            shartlari:
          </h4>
          <ul>
            <li>1) Pasport ma’lumotlari ;</li>
            <li>
              2) Uzcard yoki Humo plastic kartasi (ohirgi 6 oy ichida pul tushib turgan
              bo’lishi kerak);
            </li>
            <li>
              3) Muddatli to’lo’v to’grisidagi qarorni skoring natijalaridan so’ng darhol
              olish mumkin;
            </li>
            <li>4) Mijoz 22 yoshdan 65 yoshgacha bo’lishi kerak;</li>
          </ul>
          <h4>Ozbekiston bo’ylab onsonlik bilan olish mumkin;</h4>
          <h4>Qayerdan olsa bo’ladi ?</h4>
          <ul>
            <li>Bizning do’konlarimidan</li>
            <li>Bir necha klik orqali saytni o’zidan</li>
            <li>Aloqa markazi raqami: <a href="tel:+998711234567">+998711234567</a></li>
            <li>Ish vaqti: <span>9:00-21:00 gacha.</span></li>
          </ul>
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
