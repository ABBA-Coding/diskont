<template lang="html">
  <div class="personal-info">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["profile.my-orders"] }}
        </nuxt-link>
      </div>
      <div><MainTitle :title="$store.state.translations['profile.my-orders']" /></div>
      <div class="profile-page-grid">
        <div>
          <ProfileMenu />
        </div>
        <div>
          <div class="my-orders-grid" v-if="loading">
            <div class="order-card-grid w-100" v-if="loading">
              <b-skeleton width="100%" height="300px" />
              <b-skeleton width="100%" height="300px" />
            </div>
          </div>
          <div class="my-orders-grid" v-if="orders.length > 0">
            <div class="order-card-grid">
              <MyOrdersCard v-for="order in orders" :key="order.id" :order="order" />
            </div>
          </div>
          <div class="orders-empty" v-if="orders.length == 0 && !loading">
            <nuxt-img format="webp" src="/orders-empty.png" alt="" />
            <h4>{{ $store.state.translations["profile.order-empty-title"] }}</h4>
            <p>
              {{ $store.state.translations["profile.order-empty-text"] }}
            </p>
            <nuxt-link :to="localePath('/')">{{
              $store.state.translations["profile.order-empty-btn"]
            }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyOrdersCard from "../../components/cards/MyOrdersCard.vue";
import moment from "moment";
import ProfileMenu from "../../components/profile-menu.vue";
export default {
  middleware: "auth",
  name: "my-orders",
  data() {
    return {
      empty: true,
      orders: [],
      loading: false,
      edit: require("../../assets/svg/Edit.svg?raw"),
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  mounted() {
    this.__GET_PROFILE_INFO();
  },
  computed: {
    checkAuth() {
      return this.$store.state.auth;
    },
  },
  methods: {
    moment,
    async __GET_PROFILE_INFO() {
      try {
        this.loading = true;
        const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
        this.orders = profileData?.user?.orders;
        this.loading = false;
      } catch (e) {
        this.loading = false;
        if (e.response.status == 401) this.$store.dispatch("logout");
      }
    },
  },
  watch: {
    checkAuth(val) {
      if (!val) {
        this.$router.push("/");
      }
    },
  },
  components: { MyOrdersCard, ProfileMenu },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";
.my-orders-grid {
  /* display: grid;
  grid-template-columns: 8.2fr 4fr;
  grid-gap: 21px; */
}
.order-card-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 24px;
}
.orders-price-card {
  border: 1px solid #f1f1f1;
  border-radius: 16px;
  position: sticky;
  top: 180px;
  /* padding: 20px; */
}
.orders-price-card-top {
  padding: 20px 36px 32px 36px;
}
.orders-price-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 32px;
}
.orders-price-card-header h5 {
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 510;
  font-size: 18px;
  line-height: 21px;
  color: var(--color_green);
}
.orders-price-card-body {
  padding-top: 32px;
  display: grid;
  grid-gap: 16px;
}
.orders-price-card-body > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.orders-price-card-body > div span {
  font-family: var(--SF_400);
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}
.orders-price-card-body > div p {
  font-family: var(--SF_300);
  font-style: normal;
  font-weight: 274;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #000000;
}
.orders-price-card-footer {
  padding: 0 20px 20px 20px;
}
.orders-ticket-btn {
  background: #f5f5f5;
  border-radius: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color_green);
  cursor: pointer;
}
.orders-empty {
  width: 100%;
  height: calc(100vh - 400px);
  display: flex;
  max-height: 720px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.orders-empty h4 {
  font-family: var(--SF_500);
  font-style: normal;
  font-weight: 510;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #000000;
  margin-bottom: 32px;
  margin-top: 32px;
}
.orders-empty p {
  font-family: var(--SF_300);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.025em;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 32px;
}
.orders-empty a {
  background: #00b2a9;
  border-radius: 58px;
  padding: 12px 24px;
  font-family: var(--SF_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.025em;
  color: #ffffff;
}
@media (max-width: 576px) {
  .order-card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
