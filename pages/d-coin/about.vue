<template lang="html">
  <div class="page-container d-coin-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')"> Di Coin </nuxt-link>
      </div>
      <div class="d-flex page-container-title d-coin-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Di Coin" class="mb-0" />
        </div>
      </div>
      <div class="d-coin__tab">
        <nuxt-link :to="localePath('/d-coin/about')">
          <div
            class="d-coin__tab-item"
            :class="{ 'coin-tab__active': $route.name.includes('about') }"
          >
            <p>Sizning Di Coinlaringiz soni</p>
            <div>
              <span><img src="../../assets/svg/d-coin-tab.svg" alt="" /></span>
              <h6>65 di coin</h6>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="localePath('/d-coin/down-history')">
          <div
            class="d-coin__tab-item coin-tab_down"
            :class="{ 'coin-tab__active': $route.name.includes('down-history') }"
          >
            <span v-html="download"></span>
            <h5>Tushgan Di Coinlar tarixi</h5>
          </div>
        </nuxt-link>
        <nuxt-link :to="localePath('/d-coin/up-history')">
          <div
            class="d-coin__tab-item coin-tab_down"
            :class="{ 'coin-tab__active': $route.name.includes('up-history') }"
          >
            <span v-html="upload"></span>
            <h5>Ishlatilgan Di Coinlar tarixi</h5>
          </div>
        </nuxt-link>
      </div>
      <div class="d-coin__body">
        <div class="d-coin__image">
          <img src="../../assets/images/Group 1000004239.png" alt="" />
          <img src="../../assets/images/Group 1000004239.png" alt="" />
        </div>
        <div class="d-coin__info">
          <h4>Di Coin haqida</h4>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div class="categories-page-info">
        <h5>
          ШИРОКИЙ АССОРТИМЕНТ МЕБЕЛИ В ТАШКЕНТЕ ПРЕДСТАВЛЕН В ИНТЕРНЕТ-МАГАЗИНЕ DISKONT
          (ТАШКЕНТ, УЗБЕКИСТАН) ПО ВЫГОДНЫМ ЦЕНАМ ОТ ПРОИЗВОДИТЕЛЯ.
        </h5>
        <p>
          DISKONT предлагает: мебель для гостиной, шкафы и комоды, кровати и матрасы,
          мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для офиса.
        </p>
        <p>
          В нашем интернет-магазине представлен широкий ассортимент предметов мебели на
          любой вкус и бюджет. Мы предлагаем удобный выбор непосредственно на сайте, минуя
          долгие утомительные разъезды по множеству мебельных магазинов и рынков Ташкента,
          где можно купить хорошую недорогую мебель. Но! Поскольку их ассортимент сильно
          отличается, и вы вынуждены тратить время и силы на перемещения из одной точки
          Ташкента в другую. А на DISKONT собраны лучшие предложения многих производителей
          по выгодным ценам! Покупая мебель у нас вы гарантированно получаете качественный
          товар, оперативную доставку и сборку мебели у вас дома.
        </p>
        <p>
          Модельный ряд мебели пополняется практически ежедневно, следите за нашими
          новостями и подписывайтесь на нашу рассылку в форме ниже.
        </p>
        <p>
          Условия доставки вашего заказа: мы доставляем заказанные товары по Ташкенту и в
          радиусе 5 км от большой кольцевой дороги.
        </p>
        <p>
          Форма оплаты заказа: вы производите оплату своего заказа при его получении
          наличными, пластиковой картой или перечислением (просим уточнить возможность
          безналичной оплаты у консультанта).
        </p>
        <p>
          Оформить заказ можно через Telegram или позвонив в нашу единую службу поддержки
          по номеру 200 7 002. Добро пожаловать в интернет-магазин tovarlar для дома
          DISKONT!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
export default {
  data() {
    return {
      dcoin: require("../../assets/svg/d-coin-tab.svg?raw"),
      upload: require("../../assets/svg/upload.svg?raw"),
      download: require("../../assets/svg/download.svg?raw"),
    };
  },

  components: { MainTitle },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/d-coin.css";
</style>
