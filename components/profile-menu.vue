<template lang="html">
  <div class="profile-menu">
    <nuxt-link
      :to="localePath(`/profile/personal-info`)"
      :class="{ 'profile-menu-active': $route.name.includes('profile-personal-info') }"
      ><span v-html="profileInfo"></span> Shaxsiy ma`lumotlarim
    </nuxt-link>
    <nuxt-link
      class="disabled"
      :to="localePath('/profile/my-pay')"
      :class="{ 'profile-menu-active': $route.name.includes('profile-my-pay') }"
      ><span v-html="piecePay"></span> Bo’lib to’lash</nuxt-link
    >
    <nuxt-link
      :to="localePath('/profile/my-orders')"
      :class="{ 'profile-menu-active': $route.name.includes('profile-my-orders') }"
      ><span v-html="myOrders"></span>Mening buyurtmalarim</nuxt-link
    >
    <nuxt-link
      :to="localePath('/profile/my-comments')"
      :class="{ 'profile-menu-active': $route.name.includes('profile-my-comments') }"
      ><span v-html="myComments"></span>Mening izohlarim</nuxt-link
    >
    <div class="profile-exit" @click="visibleLogOut = true">
      <span v-html="logout"></span>Chiqish
    </div>
    <a-modal
      v-model="visibleLogOut"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOkSuccess"
    >
      <div class="vmodal-header">
        <h5></h5>
        <span @click="handleOkSuccess"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>
      <div class="vmodal-body logout-modal-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
        >
          <circle cx="45" cy="45" r="45" fill="#FBFBFB" />
          <path
            d="M51.8478 35.8548V33.9048C51.8478 29.6516 48.3919 26.2031 44.1297 26.2031H33.9191C29.659 26.2031 26.2031 29.6516 26.2031 33.9048V57.1666C26.2031 61.4197 29.659 64.8683 33.9191 64.8683H44.1506C48.4003 64.8683 51.8478 61.4302 51.8478 57.1896V55.2187M66.0765 45.5357H40.8571M66.0765 45.5357L59.9433 39.4432M66.0765 45.5357L59.9433 51.6301"
            stroke="#00B2A9"
            stroke-width="3.71292"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Akauntingizdan chiqishni hoxlaysizmi?</p>
        <span
          >1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also th</span
        >
      </div>
      <div class="logout-btn" @click="handleOkSuccess()">Yo’q bekor qilish</div>
      <div class="logout-btn_2" @click="logOut()">Ha, akauntdan chiqish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profileInfo: require("../assets/svg/profile-info.svg?raw"),
      myOrders: require("../assets/svg/my-orders.svg?raw"),
      myComments: require("../assets/svg/my-comments.svg?raw"),
      piecePay: require("../assets/svg/piece-pay.svg?raw"),
      logout: require("../assets/svg/Logout.svg?raw"),
      visibleLogOut: false,
    };
  },
  methods: {
    handleOkSuccess() {
      this.visibleLogOut = false;
    },
    async logOut() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="css">
.logout-btn {
  height: 59px;
  background: #09454f;
  border-radius: 16px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  display: flex;
  letter-spacing: -0.02em;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.logout-btn_2 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #09454f;
  display: flex;
  justify-content: center;
  margin-top: 31px;
  cursor: pointer;
}
.logout-modal-body span {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #737373;
  margin-top: 14px;
}
.logout-modal-body p {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  /* identical to box height, or 27px */
  margin-top: 24px;

  text-align: center;

  color: #000000;
}
.logout-modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 57px;
}
</style>
