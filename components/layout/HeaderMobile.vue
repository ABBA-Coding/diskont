<template lang="html">
  <div class="header-mobile">
    <nuxt-link :to="localePath('/')"
      ><span v-html="navLogo" class="nav_logo"></span
    ></nuxt-link>
    <div class="coin_btn" @click="$router.push(localePath('/d-coin/about'))">
      <span><img src="../../assets/images/coin.png" alt="" /></span>
      {{ $store.state.profile?.dicoin?.quantity }}
      {{ $store.state.translations["main.dicoin"] }}
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navLogo: require("../../assets/svg/green-logo.svg?raw"),
    };
  },

  components: {},
};
</script>
<style lang=""></style>
