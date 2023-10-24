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
                    <nuxt-link :to="localePath('/about#b2b')">{{
                      $store.state.translations["main.b2bsales"]
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about')">{{
                      $store.state.translations["main.aboutus"]
                    }}</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about')">{{
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
                    <nuxt-link :to="localePath('/about#delivary')">
                      {{ $store.state.translations["main.delivery"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/')">
                      {{ $store.state.translations["main.bonussystem"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about#working')">
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
                    <nuxt-link :to="localePath('/about#tradeNation')">
                      {{
                        $store.state.translations["main.installmentpayment"]
                      }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about#returnProduct')">
                      {{ $store.state.translations["main.productreturn"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about#warrawarrantynty')">
                      {{ $store.state.translations["main.warrantyproducts"] }}</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link :to="localePath('/about#faqs')">
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
              <a
                v-if="$store.state.siteInfo?.phone_number"
                :href="`tel:${$store.state.siteInfo?.phone_number}`"
                >+{{
                  `${$store.state.siteInfo?.phone_number}`
                    .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                    ?.filter((item, index) => index != 0)
                    .map((elem, index) => (index == 1 ? `(${elem})` : elem))
                    .join(" ")
                }}</a
              >
              <div class="footer-messangers">
                <a target="_blank" :href="$store.state.siteInfo?.telegram" v-if="$store.state.siteInfo?.telegram"
                  ><span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M18 0.5625C8.05645 0.5625 0 8.36719 0 18C0 27.6328 8.05645 35.4375 18 35.4375C27.9435 35.4375 36 27.6328 36 18C36 8.36719 27.9435 0.5625 18 0.5625ZM26.8403 12.5086L23.8863 25.9945C23.6685 26.9508 23.0806 27.1828 22.2605 26.7328L17.7605 23.5195L15.5903 25.5445C15.3508 25.7766 15.1476 25.9734 14.6831 25.9734L15.0024 21.5367L23.3419 14.2383C23.7048 13.9289 23.2621 13.7531 22.7831 14.0625L12.4766 20.3484L8.03468 19.0055C7.06935 18.7102 7.04758 18.0703 8.2379 17.6203L25.5919 11.1375C26.3976 10.8562 27.1016 11.3273 26.8403 12.5086Z"
                        fill="#9BA2C3"
                      ></path></svg></span
                ></a>
                <a  target="_blank" :href="$store.state.siteInfo?.facebook" v-if="$store.state.siteInfo?.facebook"
                  ><span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="30"
                      viewBox="0 0 16 30"
                      fill="none"
                    >
                      <path
                        d="M10.5 17.25H14.0714L15.5 11.25H10.5V8.25C10.5 6.705 10.5 5.25 13.3571 5.25H15.5V0.21C15.0343 0.1455 13.2757 0 11.4186 0C7.54 0 4.78571 2.4855 4.78571 7.05V11.25H0.5V17.25H4.78571V30H10.5V17.25Z"
                        fill="#9BA2C3"
                      ></path></svg></span
                ></a>
                <a target="_blank" :href="$store.state.siteInfo?.twitter" v-if="$store.state.siteInfo?.twitter"
                  ><span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="29"
                      viewBox="0 0 36 29"
                      fill="none"
                    >
                      <path
                        d="M35.9982 3.88326C34.6499 4.46397 33.2201 4.84534 31.7561 5.01477C33.2992 4.11615 34.4542 2.70191 35.0057 1.03557C33.5575 1.87475 31.9698 2.46286 30.315 2.78099C29.2034 1.62296 27.73 0.854952 26.1239 0.596358C24.5178 0.337765 22.869 0.603076 21.4338 1.35104C19.9985 2.09901 18.8572 3.28773 18.1874 4.7324C17.5176 6.17706 17.3567 7.79673 17.7298 9.33961C14.793 9.19628 11.9199 8.45318 9.29721 7.15855C6.67449 5.86392 4.3607 4.04671 2.50608 1.82488C1.84961 2.92277 1.50463 4.17083 1.50648 5.44123C1.50648 7.93468 2.80985 10.1375 4.7914 11.4272C3.61874 11.3913 2.47188 11.0829 1.44643 10.5279V10.6173C1.44678 12.2779 2.03696 13.8873 3.11688 15.1727C4.19681 16.458 5.70003 17.3401 7.37166 17.6694C6.28307 17.9567 5.14163 17.999 4.03375 17.7932C4.50506 19.2226 5.42368 20.4728 6.66097 21.3685C7.89827 22.2643 9.3923 22.7609 10.9339 22.7887C9.40175 23.9604 7.64749 24.8265 5.77137 25.3375C3.89526 25.8486 1.93409 25.9945 0 25.7671C3.37623 27.8813 7.30649 29.0036 11.3206 29C24.9072 29 32.3371 18.0409 32.3371 8.53655C32.3371 8.22702 32.3283 7.91404 32.3142 7.60795C33.7604 6.59023 35.0085 5.32949 36 3.88498L35.9982 3.88326Z"
                        fill="#9BA2C3"
                      ></path></svg></span
                ></a>
                <a target="_blank" :href="$store.state.siteInfo?.instagram" v-if="$store.state.siteInfo?.instagram"
                  ><span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M15 0C19.0755 0 19.584 0.0149999 21.183 0.0899999C22.7805 0.165 23.868 0.4155 24.825 0.7875C25.815 1.1685 26.649 1.6845 27.483 2.517C28.2457 3.26684 28.8359 4.17388 29.2125 5.175C29.583 6.1305 29.835 7.2195 29.91 8.817C29.9805 10.416 30 10.9245 30 15C30 19.0755 29.985 19.584 29.91 21.183C29.835 22.7805 29.583 23.868 29.2125 24.825C28.837 25.8267 28.2467 26.7339 27.483 27.483C26.7329 28.2455 25.826 28.8356 24.825 29.2125C23.8695 29.583 22.7805 29.835 21.183 29.91C19.584 29.9805 19.0755 30 15 30C10.9245 30 10.416 29.985 8.817 29.91C7.2195 29.835 6.132 29.583 5.175 29.2125C4.17349 28.8367 3.26629 28.2464 2.517 27.483C1.75411 26.7333 1.1639 25.8262 0.7875 24.825C0.4155 23.8695 0.165 22.7805 0.0899999 21.183C0.0194999 19.584 0 19.0755 0 15C0 10.9245 0.0149999 10.416 0.0899999 8.817C0.165 7.218 0.4155 6.132 0.7875 5.175C1.16285 4.17327 1.75321 3.26598 2.517 2.517C3.26651 1.75385 4.17364 1.16359 5.175 0.7875C6.132 0.4155 7.218 0.165 8.817 0.0899999C10.416 0.0194999 10.9245 0 15 0ZM15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5ZM24.75 7.125C24.75 6.62772 24.5525 6.15081 24.2008 5.79918C23.8492 5.44754 23.3723 5.25 22.875 5.25C22.3777 5.25 21.9008 5.44754 21.5492 5.79918C21.1975 6.15081 21 6.62772 21 7.125C21 7.62228 21.1975 8.0992 21.5492 8.45083C21.9008 8.80246 22.3777 9 22.875 9C23.3723 9 23.8492 8.80246 24.2008 8.45083C24.5525 8.0992 24.75 7.62228 24.75 7.125ZM15 10.5C16.1935 10.5 17.3381 10.9741 18.182 11.818C19.0259 12.6619 19.5 13.8065 19.5 15C19.5 16.1935 19.0259 17.3381 18.182 18.182C17.3381 19.0259 16.1935 19.5 15 19.5C13.8065 19.5 12.6619 19.0259 11.818 18.182C10.9741 17.3381 10.5 16.1935 10.5 15C10.5 13.8065 10.9741 12.6619 11.818 11.818C12.6619 10.9741 13.8065 10.5 15 10.5Z"
                        fill="#9BA2C3"
                      ></path></svg></span
                ></a>
                <!---->
              </div>
            </span>
            <nuxt-link class="footer-links stores-link" :to="localePath('/stores')"
              ><span v-html="footerLocation"></span>
              {{ $store.state.translations["main.ourstores"] }}</nuxt-link
            >
            <a
              v-if="$store.state.siteInfo?.email"
              :href="`mailto:${$store.state.siteInfo?.email}`"
              class="footer-links"
              ><span v-html="footerEmail" style="margin-right: 7px"></span
              >{{ $store.state.siteInfo?.email }}</a
            >
          </div>
          <div class="footer_menu footer_list">
            <h4>{{ $store.state.translations["main.company"] }}</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/about#b2b')">{{
                  $store.state.translations["main.b2bsales"]
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/about')">{{
                  $store.state.translations["main.aboutus"]
                }}</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/about')">{{
                  $store.state.translations["main.newsreviews"]
                }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer_menu footer_list">
            <h4>{{ $store.state.translations["main.newsreviews"] }}</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/about#delivery')">
                  {{ $store.state.translations["main.tohelp"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/about#delivery')">
                  {{ $store.state.translations["main.delivery"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/about#working')">
                  {{ $store.state.translations["main.workingdiskont"] }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer_list">
            <h4>{{ $store.state.translations["main.customersupport"] }}</h4>
            <ul>
              <li>
                <nuxt-link :to="localePath('/about#tradeNation')">
                  {{ $store.state.translations["main.installmentpayment"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/about#returnProduct')">
                  {{ $store.state.translations["main.productreturn"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/about#warranty')">
                  {{ $store.state.translations["main.warrantyproducts"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/about#faqs')">
                  {{ $store.state.translations["main.faq"] }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath('/sitemap')">
                  {{ $store.state.translations["about.sitemap"] }}</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu footer-payment">
            <h4>{{ $store.state.translations["main.typespayment"] }}</h4>
            <p>{{ $store.state.translations["main.paymentsystem"] }}</p>
            <div class="payment-types">
              <!-- <span>
                <nuxt-img format="webp" src="/apelsin.uz.png" alt="" />
              </span> -->
              <!-- <span>
                <nuxt-img format="webp" src="/uzcard.uz.png" alt="" />
              </span> -->
              <span>
                <nuxt-img format="webp" src="/click.uz.png" alt="" />
              </span>
              <span>
                <nuxt-img format="webp" src="/payme.uz.png" alt="" />
              </span>
              <!-- <span>
                <nuxt-img format="webp" src="/uzum.png" alt="" />
              </span> -->
              <!-- <span>
                <nuxt-img format="webp" src="/humocard.uz.png" alt="" />
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
.footer-messangers {
  display: flex;
  gap: 24px;
  margin-top: 4px;
}
.footer-messangers a svg {
  height: 20px;
  width: 20px;
}
.footer-messangers a svg path {
  fill: #06858c;
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
@media (max-width: 1024px) {
  .footer .payment-types {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
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
  /* .payment-types img {
    width: 80px !important;
  } */
}
</style>
