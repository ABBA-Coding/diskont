<template lang="html">
  <div class="page-container d-coin-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["main.dicoin"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title d-coin-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.dicoin']" class="mb-0" />
        </div>
      </div>
      <div class="d-coin__tab">
        <nuxt-link :to="localePath('/d-coin/about')">
          <div
            class="d-coin__tab-item"
            :class="{ 'coin-tab__active': $route.name.includes('about') }"
          >
            <p>{{ $store.state.translations["diCoin.your-dicoin-count"] }}</p>
            <div>
              <span><img src="../../assets/svg/d-coin-tab.svg" alt="" /></span>
              <h6>
                {{ $store.state.profile?.dicoin?.quantity }}
                {{ $store.state.translations["main.dicoin"] }}
              </h6>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="localePath('/d-coin/down-history')">
          <div
            class="d-coin__tab-item coin-tab_down"
            :class="{ 'coin-tab__active': $route.name.includes('down-history') }"
          >
            <span v-html="download"></span>
            <h5>{{ $store.state.translations["diCoin.down-history"] }}</h5>
          </div>
        </nuxt-link>
        <nuxt-link :to="localePath('/d-coin/up-history')">
          <div
            class="d-coin__tab-item coin-tab_down"
            :class="{ 'coin-tab__active': $route.name.includes('up-history') }"
          >
            <span v-html="upload"></span>
            <h5>{{ $store.state.translations["diCoin.up-history"] }}</h5>
          </div>
        </nuxt-link>
      </div>
      <div class="d-coin__body">
        <div class="d-coin__image">
          <nuxt-img format="webp" src="/Group 1000004239.png" alt="" />
          <nuxt-img format="webp" src="/Group 1000004239.png" alt="" />
        </div>
        <div class="d-coin__info">
          <h4>{{ $store.state.translations["diCoin.about-di-coin"] }}</h4>
          <p>
            {{ $store.state.translations["diCoin.about-text"] }}
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
