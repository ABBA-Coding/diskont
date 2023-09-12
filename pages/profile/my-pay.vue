<template lang="html">
  <div class="personal-info">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')">
          {{ $store.state.translations["profile.pay-installments"] }}</nuxt-link
        >
      </div>
      <div>
        <MainTitle :title="$store.state.translations['profile.pay-installments']" />
      </div>
      <div class="profile-page-grid">
        <div>
          <ProfileMenu />
        </div>
        <div>
          <div class="my-orders-grid"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import ProfileMenu from "../../components/profile-menu.vue";
export default {
  middleware: "auth",
  data() {
    return {
      empty: true,
      orders: [],
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
        const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
        this.orders = profileData?.user?.orders;
      } catch (e) {
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
  components: { ProfileMenu },
};
</script>
<style lang="css">
@import "../../assets/css/pages/profile-page.css";

.order-card-grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 24px;
}
</style>
