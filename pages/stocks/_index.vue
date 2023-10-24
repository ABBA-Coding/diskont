<template lang="html">
  <div class="stocks-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["main.promotions"] }}
        </nuxt-link>
      </div>
      <div class="stocks-body">
        <div
          class="stocks-banner"
          v-if="banners?.filter((item) => item.type == 'type2').length > 0"
        >
          <img :src="banners?.filter((item) => item.type == 'type2')[0]?.lg_img" alt="" />
        </div>
        <!-- <div class="stocks-menu">
          <div class="position-relative">
            <ul>
              <li>
                <span @click="stockCategory = !stockCategory"
                  >Категории
                  <span v-html="arrow" :class="{ rotate180: stockCategory }"></span
                ></span>
              </li>
              <li>
                <nuxt-link
                  :class="{ 'active-stock': $route.params.index == 'stocks' }"
                  :to="/stocks/stocks"
                  >Yangi aksiyalar</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  :to="/stocks/top-products"
                  :class="{ 'active-stock': $route.params.index == 'top-products' }"
                  >Top tovarlar</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  :to="/stocks/best-seller"
                  :class="{ 'active-stock': $route.params.index == 'best-seller' }"
                  >Best seller</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  :to="/stocks/seasonal-discounts"
                  :class="{ 'active-stock': $route.params.index == 'seasonal-discounts' }"
                  >Сезонные Скидки</nuxt-link
                >
              </li>
            </ul>
            <Transition name="bounce">
              <div class="stocks-category-list" v-if="stockCategory">
                <span
                  ><a-checkbox @change="onChange">
                    Автомобил учун маҳсулотлар
                  </a-checkbox></span
                >
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span
                  ><a-checkbox @change="onChange">
                    Автомобил учун маҳсулотлар
                  </a-checkbox></span
                >
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span
                  ><a-checkbox @change="onChange"
                    >Автомобил учун маҳсулотлар
                  </a-checkbox></span
                >
                <span
                  ><a-checkbox @change="onChange"
                    >Автомобил учун маҳсулотлар
                  </a-checkbox></span
                >
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span
                  ><a-checkbox @change="onChange"
                    >Автомобил учун маҳсулотлар
                  </a-checkbox></span
                >
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span
                  ><a-checkbox @change="onChange"
                    >Автомобил учун маҳсулотлар</a-checkbox
                  ></span
                >
                <span><a-checkbox @change="onChange"> Маиший техника </a-checkbox></span>
                <span>
                  <a-checkbox @change="onChange"> Автомобил учун маҳсулотлар </a-checkbox>
                </span>
                <span
                  ><a-checkbox @change="onChange">
                    Автомобил учун маҳсулотлар
                  </a-checkbox></span
                >
              </div>
            </Transition>
          </div>
        </div> -->
      </div>
      <div class="stocks-grid">
        <StocksCard
          :typeStatus="false"
          v-for="promotion in promotions"
          :promotion="promotion"
          :key="promotion?.id"
        />
        <!-- <StocksCard :typeStatus="true" />
        <StocksCard :typeStatus="false" />
        <StocksCard :typeStatus="true" />
        <StocksCard :typeStatus="true" />
        <StocksCard :typeStatus="false" />
        <StocksCard :typeStatus="true" />
        <StocksCard :typeStatus="false" />
        <StocksCard :typeStatus="true" /> -->
      </div>
      <div class="categories-page-info">
        <h5>
          {{ $store.state.translations["main.promotions-title"] }}
        </h5>
        <p>
          {{ $store.state.translations["main.promotions-text"] }}
        </p>
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
import StocksCard from "../../components/cards/StocksCard.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";

export default {
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      stockCategory: false,
    };
  },
  async asyncData({ store, route, i18n }) {
    store.commit("loaderHandler", true);
    const [promotionsData, bannersData] = await Promise.all([
      store.dispatch("fetchPromotions/getPromotions", {
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
    const promotions = promotionsData?.promotions?.data;
    const banners = bannersData?.banners?.data;
    setTimeout(() => {
      store.commit("loaderHandler", false);
    }, 0);
    return {
      promotions,
      banners,
    };
  },
  methods: {
    onChange() {},
  },
  components: { StocksCard, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";

.stocks-page {
  padding-top: 25px;
}
.stocks-banner {
  max-height: 385px;
  width: 100%;
  height: 385px;
  border-radius: 24px;
  margin-top: 25px;
  overflow: hidden;
  position: relative;
}
.stocks-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stocks-body {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}
.stocks-menu {
  position: absolute;
  z-index: 10;
  bottom: -29px;
  display: flex;
  justify-content: center;
  display: none;
}
.stocks-menu ul {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 31px rgba(215, 215, 215, 0.5);
  border-radius: 14px;
  padding: 8px;
  align-items: center;
}
.stocks-menu ul li a {
  border-radius: 18px;
  padding: 11px 12px;
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  color: #494f54;
  transition: 0.3s;
}
.stocks-menu ul li a:hover,
.active-stock {
  color: #09454f !important;
  background: #f1f1f1;
}
.stocks-menu ul li > span {
  background: var(--color_green);
  border-radius: 12px;
  padding: 12px 17px;
  display: flex;
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  cursor: pointer;
}
.stocks-menu ul li > span > span svg {
  margin-left: 8px;
}
.stocks-menu ul li > span > span svg path {
  fill: #fff;
}
.stocks-menu ul li {
  margin-right: 24px;
}
.stocks-menu ul li:last-child {
  margin-right: 0;
}
.stocks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
}
.stocks-category-list {
  position: absolute;
  top: calc(100% + 3.5px);
  background: #fbfbfb;
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  box-shadow: 0px 4px 31px rgba(215, 215, 215, 0.5);
}
.stocks-category-list label {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  white-space: nowrap;
}
.ant-checkbox:hover {
}
.stocks-category-list .ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: #09454f !important;
}
.stocks-category-list .ant-checkbox-checked::after {
  border-color: #09454f !important;
}
.stocks-category-list .ant-checkbox-checked .ant-checkbox-inner {
  border-color: #09454f !important;
  background: #09454f !important;
}
.stocks-category-list .ant-checkbox-inner {
  border: 1px solid #ececec !important;
  border-radius: 4px !important;
}

/* .bounce-enter-active {
  animation: bounce-in2 0.5s;
}
.bounce-leave-active {
  animation: bounce-in2 0.5s reverse;
}
@keyframes bounce-in2 {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  50% {
    transform: translateY(-3.5px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
} */
@media (max-width: 1320px) {
  .stocks-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1320px) {
  .stocks-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 992px) {
  .stocks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .stocks-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .stock-page__container {
    width: 100%;
  }
  .stocks-banner {
    max-height: 160px;
    height: 160px;
    border-radius: 20px;
  }
  .stock-page__static p {
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    gap: 5px;
  }
  .stock-page__static p span {
    font-size: 16px;
    line-height: 130%;
  }
  .stock-page__static {
    margin-top: 32px;
  }
  .stock-page__info {
    margin-top: 32px;
  }
  .stock-page__info p {
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }
}
</style>
