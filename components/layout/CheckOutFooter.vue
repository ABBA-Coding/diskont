<template lang="html">
  <div>
    <div class="footer footer-checkout">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <div class="hey chekout-footer-head d-flex">
            <span v-html="footerLogo"></span>
            <p>
              {{ $store.state.translations["checkout.footerText"] }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container_xl">
        <div class="hey d-flex justify-content-between">
          <p>{{ $store.state.translations["main.footertext1"] }}</p>
          <p class="cursor-pointer">{{ $store.state.translations["main.footertext2"] }}</p>
          <p class="cursor-pointer">{{ $store.state.translations["main.footertext3"] }}</p>
          <p><span v-html="footerBottom"></span> {{ $store.state.translations["main.footertext4"] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerLogo: require("../../assets/svg/footer-logo.svg?raw"),
      footerLocation: require("../../assets/svg/footer-location.svg?raw"),
      footerEmail: require("../../assets/svg/footer-email.svg?raw"),
      footerBottom: require("../../assets/svg/footer-bottom.svg?raw"),
    };
  },
};
</script>
<style>
@media screen and (max-width: 1024px) {
  .hey {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
