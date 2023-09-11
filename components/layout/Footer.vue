<template lang="html">
  <div>
    <div class="footer">
      <div class="container_xl">
        <div class="footer-box">
          <div class="mobile-menu">
            <div class="footer_menu footer_drop">
              <h4 @click="dropAction(1)">
                {{ $store.state.translations["main.company"] }}
                <span
                  v-html="dropArrow"
                  :class="{ rotate180: activeDrop.includes(1) }"
                ></span>
              </h4>
              <ul
                class="footer-drop-board mt-0"
                :class="{ 'height-auto': activeDrop.includes(1) }"
              >
                <div class="mt-3">
                  <li>
                    <nuxt-link :to="localePath('/info/about-b2b')">{{
                      $store.state.translations["main.b2bsales"]
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/info/about-us')">{{
                      $store.state.translations["main.aboutus"]
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">{{
                      $store.state.translations["main.newsreviews"]
                    }}</nuxt-link>
                  </li>
                </div>
              </ul>
            </div>
            <div class="footer_menu footer_drop">
              <h4
                @click="dropAction(2)"
                :class="{
                  rotate180: activeDrop.includes(2),
                  'mt-0': !activeDrop.includes(2),
                }"
              >
                {{ $store.state.translations["main.info"] }}
                <span v-html="dropArrow"></span>
              </h4>
              <ul
                class="footer-drop-board mt-0"
                :class="{ 'height-auto': activeDrop.includes(2) }"
              >
                <div class="mt-3">
                  <li>
                    <nuxt-link :to="localePath('/info/delivery')">
                      {{ $store.state.translations["main.delivery"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">
                      {{ $store.state.translations["main.bonussystem"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/info/working')">
                      {{ $store.state.translations["main.workingdiskont"] }}</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </div>
            <div class="footer_menu footer_drop">
              <h4
                @click="dropAction(3)"
                :class="{
                  rotate180: activeDrop.includes(3),
                  'mt-0': !activeDrop.includes(3),
                }"
              >
                {{ $store.state.translations["main.customersupport"] }}
                <span v-html="dropArrow"></span>
              </h4>
              <ul
                class="footer-drop-board mt-0"
                :class="{ 'height-auto': activeDrop.includes(3) }"
              >
                <div class="mt-3">
                  <li>
                    <nuxt-link :to="localePath('/info/trade-nation')">
                      {{
                        $store.state.translations["main.installmentpayment"]
                      }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">
                      {{ $store.state.translations["main.productreturn"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/info/warranty')">
                      {{ $store.state.translations["main.warrantyproducts"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">
                      {{ $store.state.translations["main.faq"] }}</nuxt-link
                    >
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div class="main_info d-flex flex-column">
            <span class="footer-logo" v-html="footerLogo"></span>
            <span class="footer-tel"
              ><p>{{ $store.state.translations["main.feedback"] }}</p>
              <a :href="`tel:${$store.state.siteInfo?.phone_number}`"
                >+{{
                  `${$store.state.siteInfo?.phone_number}`
                    .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                    ?.filter((item, index) => index != 0)
                    .map((elem, index) => (index == 1 ? `(${elem})` : elem))
                    .join(" ")
                }}</a
              ></span
            >
            <nuxt-link class="footer-links" :to="localePath('/stores')"
              ><span v-html="footerLocation"></span>
              {{ $store.state.translations["main.ourstores"] }}</nuxt-link
            >
            <a :href="`mailto:${$store.state.siteInfo?.email}`" class="footer-links"
              ><span v-html="footerEmail" style="margin-right: 7px"></span
              >{{ $store.state.siteInfo?.email }}</a
            >
          </div>
          <div class="footer_menu footer_list">
            <h4>{{ $store.state.translations["main.company"] }}</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/info/about-b2b')">{{
                  $store.state.translations["main.b2bsales"]
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/info/about-us')">{{
                  $store.state.translations["main.aboutus"]
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/')">{{
                  $store.state.translations["main.newsreviews"]
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu footer_list">
            <h4>{{ $store.state.translations["main.newsreviews"] }}</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/info/delivery')">
                  {{ $store.state.translations["main.tohelp"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')">
                  {{ $store.state.translations["main.delivery"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/info/working')">
                  {{ $store.state.translations["main.workingdiskont"] }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer_list">
            <h4>{{ $store.state.translations["main.customersupport"] }}</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/info/trade-nation')">
                  {{ $store.state.translations["main.installmentpayment"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')">
                  {{ $store.state.translations["main.productreturn"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/info/warranty')">
                  {{ $store.state.translations["main.warrantyproducts"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/')">
                  {{ $store.state.translations["main.faq"] }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer-payment">
            <h4>{{ $store.state.translations["main.typespayment"] }}</h4>
            <p>{{ $store.state.translations["main.paymentsystem"] }}</p>
            <div class="payment-types">
              <!-- <span>
                <img src="../../assets/images/apelsin.uz.png" alt="" />
              </span> -->
              <!-- <span>
                <img src="../../assets/images/uzcard.uz.png" alt="" />
              </span> -->
              <span>
                <img src="../../assets/images/click.uz.png" alt="" />
              </span>
              <span>
                <img src="../../assets/images/payme.uz.png" alt="" />
              </span>
              <span>
                <img src="../../assets/images/uzum.png" alt="" />
              </span>
              <!-- <span>
                <img src="../../assets/images/humocard.uz.png" alt="" />
              </span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container_xl">
        <div class="d-flex justify-content-between">
          <p class="footer-date">{{ $store.state.translations["main.footertext1"] }}</p>
          <p class="foooter-bottom-text cursor-pointer">
            {{ $store.state.translations["main.footertext2"] }}
          </p>
          <p class="cursor-pointer foooter-bottom-text">
            {{ $store.state.translations["main.footertext3"] }}
          </p>
          <p>
            <span v-html="footerBottom"></span>
            {{ $store.state.translations["main.footertext4"] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropArrow: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.67301 17.5592 0.67301 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.67301 1.64932 0.67301 1.16116 1.16117C0.67301 1.64932 0.67301 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z"
                      fill="black"
                    /></svg
                >`,
      footerLogo: require("../../assets/svg/footer-logo.svg?raw"),
      footerLocation: require("../../assets/svg/footer-location.svg?raw"),
      footerEmail: require("../../assets/svg/footer-email.svg?raw"),
      footerBottom: require("../../assets/svg/footer-bottom.svg?raw"),
      activeDrop: [],
    };
  },
  methods: {
    dropAction(id) {
      if (this.activeDrop.includes(id)) {
        this.activeDrop = this.activeDrop.filter((item) => item != id);
      } else {
        this.activeDrop.push(id);
      }
    },
  },
};
</script>
<style lang="css">
.footer-box {
  display: flex;
  justify-content: space-between;
}
.footer-payment p {
  display: none;
  color: #828282;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.footer-drop-board {
  max-height: 0;
  overflow: hidden;
  position: relative;
  transition: max-height 0.25s ease-out;
}
.footer_drop h4 {
  display: flex;
  justify-content: space-between;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 40px;
}
@media (max-width: 576px) {
  .mobile-menu {
    display: flex;
  }
  .foooter-bottom-text {
    display: none;
  }
  .footer-date {
    display: none;
  }
  .footer-box {
    flex-direction: column;
    justify-content: space-between;
  }
  .footer_list {
    display: none;
  }
  .footer-logo {
    display: none;
  }
  .footer-payment h4 {
    display: none;
  }
  .footer-payment p {
    display: block;
  }
  .footer .payment-types {
    margin-top: 16px;
  }
  .footer .payment-types img {
    width: 108px;
    height: 57px;
  }
  .footer-box {
    gap: 56px;
  }
  .payment-types {
    display: flex;
    align-items: center;
    gap: 12px !important;
    flex-wrap: wrap;
  }
  .payment-types span {
    border-radius: 12px;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .payment-types img {
    width: 80px !important;
  }
}
</style>
