<template lang="html">
  <div class="page-container d-coin-page">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')"> Di Coin </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle title="Di Coin" />
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
      <div class="d-coin__body_table">
        <div class="d-coin__table-header">
          <div><p>Di Coin soni</p></div>
          <div><p>Tushgan Di coin</p></div>
          <div><p>Vaqti va sanasi</p></div>
        </div>
        <div
          class="d-coin__table-row up-history-row"
          v-for="dicoin in dicoinIn"
          :key="dicoin?.id"
        >
          <div>
            <p>
              <span v-html="download"></span>{{ dicoin?.type == "plus" ? "+" : "-"
              }}{{ dicoin?.quantity }}
              {{ $store.state.translations["main.cout-di-coin"] }}
            </p>
          </div>
          <div>
            <p v-if="dicoin?.order_id">Buyurtma #{{ dicoin?.order_id }}</p>
            <p v-else>Empty</p>
          </div>
          <div>
            <p>
              {{ moment(dicoin?.created_at).format("DD.MM.YYYY") }}
              <span class="di-coin-hours"> {{ moment(dicoin?.created_at).format("HH:mm") }}</span>
            </p>
          </div>
        </div>
        <div
          class="d-coin__table-row_mobile up-history-row"
          v-for="dicoin in dicoinIn"
          :key="dicoin?.id"
        >
          <div class="d-coin__table-row_mobile-header">
            <span v-html="download"></span>
            <span v-if="dicoin?.order_id">
              #{{ dicoin?.order_id }}
              <h6>Buyurtma</h6></span
            >
            <span v-else>Empty</span>
          </div>
          <div class="d-coin__table-row_mobile-body">
            <div>
              <span
                >Vaqti va sanasi
                <p>
                  {{ moment(dicoin?.created_at).format("DD.MM.YYYY")
                  }} {{ moment(dicoin?.created_at).format("HH:mm") }}
                </p></span
              >
            </div>
            <div>
              <span
                >Буюртма нархи
                <p>
                  {{ dicoin?.type == "plus" ? "+" : "-" }}{{ dicoin?.quantity }}
                  {{ $store.state.translations["main.cout-di-coin"] }}
                </p></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
import moment from "moment";

export default {
  data() {
    return {
      dcoin: require("../../assets/svg/d-coin-tab.svg?raw"),
      upload: require("../../assets/svg/upload.svg?raw"),
      download: require("../../assets/svg/download.svg?raw"),
      dicoinIn: [],
    };
  },
  async mounted() {
    const [dicoins] = await Promise.all([
      this.$store.dispatch("fetchAuth/getProfileDiCoins"),
    ]);
    this.dicoinIn = dicoins.out;
  },
  methods: {
    moment,
  },
  components: { MainTitle },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/d-coin.css";
</style>
