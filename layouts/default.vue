<template lang="html">
  <div class="layout-back">
    <Header :categoryVisible="categoryVisible" />
    <Nuxt />
    <MobileBottomBar @openCategory="openCategory" />
    <Footer />
    <Transition name="bounce-toast">
      <Vnotification
        v-if="buyToast"
        title="Mahsulot savatchaga muvaffaqiyatli qo’shildi. "
        @click="toastClose()"
      >
        <span v-html="iconBuy"></span>
      </Vnotification>
      <Vnotification
        v-if="likeToast"
        title="Mahsulot Like ga muvaffaqiyatli qo’shildi. "
        @click="toastClose()"
      >
        <span v-html="iconLike"></span>
      </Vnotification>
      <Vnotification
        v-if="compToast"
        title="Mahsulot Taqqoslash ga muvaf-faqiyatli qo’shildi. "
        @click="toastClose()"
      >
        <span v-html="iconComp"></span>
      </Vnotification>
    </Transition>
    <a-modal
      v-model="wheelModal"
      :body-style="{ padding: '0', borderRadius: '16px' }"
      centered
      :closable="false"
      width="900px"
      @ok="handleWheelModal"
    >
      <div class="wrapper">
        <div class="left">
          <div class="wheel-box">
            <div id="button" class="button" @click="rotate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M27.9902 55.8798C43.3927 55.8798 55.8788 43.3937 55.8788 27.9912C55.8788 12.5887 43.3927 0.102539 27.9902 0.102539C12.5877 0.102539 0.101562 12.5887 0.101562 27.9912C0.101562 43.3937 12.5877 55.8798 27.9902 55.8798Z"
                  fill="url(#paint0_linear_91_8808)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_91_8808"
                    x1="8.27022"
                    y1="8.27354"
                    x2="47.7132"
                    y2="47.7165"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F2F2F2" />
                    <stop offset="1" stop-color="#B3B3B3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="31"
                viewBox="0 0 56 31"
                fill="none"
              >
                <path
                  d="M2.10202 14.0722L53.3994 0.775295C53.6453 0.711669 53.9024 0.705098 54.1512 0.756094C54.4 0.80709 54.6338 0.914292 54.8348 1.06952C55.0358 1.22474 55.1987 1.42388 55.3109 1.65169C55.4232 1.87949 55.4818 2.12994 55.4824 2.38389V28.9778C55.4825 29.232 55.4243 29.4828 55.3123 29.711C55.2003 29.9392 55.0374 30.1386 54.8362 30.294C54.635 30.4493 54.4009 30.5565 54.1518 30.6072C53.9027 30.6579 53.6453 30.6508 53.3994 30.5864L2.10202 17.2895C1.74587 17.1969 1.43052 16.9887 1.20543 16.6976C0.980331 16.4064 0.858219 16.0488 0.858219 15.6809C0.858219 15.3129 0.980331 14.9553 1.20543 14.6642C1.43052 14.373 1.74587 14.1649 2.10202 14.0722Z"
                  fill="#E01717"
                />
              </svg>
            </div>
            <div id="wheel" class="wheel">
              <div class="cover"></div>
              <div class="numbers">
                <div style="--i: 1" class="num">
                  <p>1</p>
                </div>
                <div style="--i: 2" class="num">
                  <p>2</p>
                </div>
                <div style="--i: 3" class="num">
                  <p>3</p>
                </div>
                <div style="--i: 4" class="num">
                  <p>4</p>
                </div>
                <div style="--i: 5" class="num">
                  <p>5</p>
                </div>
                <div style="--i: 6" class="num">
                  <p>6</p>
                </div>
                <div style="--i: 7" class="num">
                  <p>7</p>
                </div>
                <div style="--i: 8" class="num">
                  <p>8</p>
                </div>
                <div style="--i: 9" class="num">
                  <p>9</p>
                </div>
                <div style="--i: 10" class="num">
                  <p>10</p>
                </div>
                <div style="--i: 11" class="num">
                  <p>11</p>
                </div>
                <div style="--i: 12" class="num">
                  <p>12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="svg" @click="wheelModal = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <circle opacity="0.6" cx="15.5" cy="15.5" r="15.5" fill="#E3F1FF" />
              <path
                d="M9.90781 20.9801C10.4619 21.5342 11.3602 21.5342 11.9143 20.9801L20.868 12.0264C21.422 11.4723 21.422 10.574 20.868 10.0199C20.3139 9.46584 19.4155 9.46584 18.8615 10.0199L9.90781 18.9736C9.35373 19.5277 9.35373 20.426 9.90781 20.9801ZM18.8541 20.9801C19.4102 21.5362 20.3118 21.5362 20.868 20.9801C21.4241 20.4239 21.4241 19.5223 20.868 18.9662L11.9217 10.0199C11.3656 9.4638 10.4639 9.4638 9.90781 10.0199C9.35168 10.576 9.35168 11.4777 9.90781 12.0338L18.8541 20.9801Z"
                fill="#0071BC"
              />
            </svg>
          </div>
          <h4 class="title">Omadingizni sinab ko’ring!</h4>
          <p class="sub">
            Diskont dokonida royxatdan oting va sovgalar yutib olisng royxatdan oting va
            sovgalar yutib olisng
          </p>

          <!-- <form action=""> -->
          <!-- <input type="text" placeholder="Raqamingizni yozib qoldiring" /> -->

          <!-- <p class="txt">
              Malumotlaringiz konfedintialnosti Discont administration tomonidan
              taminlanadi va sizga 10ta discoin taqdim etiladi
            </p> -->
          <div class="buttons">
            <button class="send" @click="rotate">Aylantirish</button>
            <button class="share" @click="wheelModal = false">Yopish</button>
          </div>
          <!-- </form> -->
        </div>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-back-top class="antd-to-top">
      <div class="ant-back-top-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
        >
          <g clip-path="url(#clip0_2993_1967)">
            <path
              d="M67 33.5C67 14.9985 52.0015 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 52.0015 14.9985 67 33.5 67C52.0015 67 67 52.0015 67 33.5Z"
              fill="white"
            />
            <path
              d="M35.0607 21.9393C34.4749 21.3536 33.5251 21.3536 32.9393 21.9393L23.3934 31.4853C22.8076 32.0711 22.8076 33.0208 23.3934 33.6066C23.9792 34.1924 24.9289 34.1924 25.5147 33.6066L34 25.1213L42.4853 33.6066C43.0711 34.1924 44.0208 34.1924 44.6066 33.6066C45.1924 33.0208 45.1924 32.0711 44.6066 31.4853L35.0607 21.9393ZM35.5 44L35.5 23L32.5 23L32.5 44L35.5 44Z"
              fill="#1F8A70"
            />
          </g>
          <defs>
            <clipPath id="clip0_2993_1967">
              <rect width="67" height="67" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </a-back-top>
    <div
      class="loader-container d-flex justify-content-center align-items-center"
      v-if="$store.state.loader"
    >
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";
import MobileBottomBar from "../components/layout/MobileBottomBar.vue";

export default {
  data() {
    return {
      categoryVisible: false,
      buyToast: false,
      likeToast: false,
      compToast: false,
      afterReload: false,
      iconBuy: require("../assets/Buy.svg?raw"),
      iconLike: require("../assets/svg/toast-like.svg?raw"),
      iconComp: require("../assets/svg/toast-comparison.svg?raw"),
      wheelModal: false,
      city: "",
      region: "",
      country: "",
      errorMessage: "",
      loader: false,
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          name: "title",
          content: this.$store.state.siteInfo.meta_desc,
        },
        {
          name: "keywords",
          content: this.$store.state.siteInfo.meta_keywords,
        },
        {
          name: "description",
          content: this.$store.state.siteInfo.meta_desc,
        },
        {
          name: "theme-color",
          content: "#09454f",
        },
        ...i18nHead.meta,
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: this.$store.state.siteInfo?.sm_favicon,
        },
        ...i18nHead.link,
      ],
    };
  },
  async fetch() {
    const [translationsData] = await Promise.all([
      this.$store.dispatch("fetchTranslations/getTranslations", {
        headers: {
          lang: this.$i18n.locale,
        },
      }),
    ]);
    this.$store.commit("getTranslations", translationsData?.translates);
  },
  async mounted() {
    try {
      await this.$getLocation().then((coordinates) => {
        this.locations = coordinates;
      });
    } catch (e) {}

    this.$store.dispatch("siteInfo", {
      params: {
        lat: this.locations?.lat,
        lon: this.locations?.lng,
      },
      headers: {
        lang: this.$i18n.locale,
      },
    }),
      this.$store.dispatch("profileInfo", this.$route.path);
    await this.$store.commit("reloadStore");
    this.afterReload = true;
  },
  computed: {
    targetLang() {
      return this.$i18n.locale;
    },
    storeCartLength() {
      return this.$store.state.cart.length;
    },
    storeLikeLength() {
      return this.$store.state.like.length;
    },
    storeCompLength() {
      return this.$store.state.comparison.length;
    },
    localStorageHandler() {
      if (process.client) {
        let cart = JSON.parse(localStorage.getItem("like"));
        return cart.length;
      }
    },
  },
  methods: {
    openCategory() {
      this.categoryVisible = !this.categoryVisible;
    },
    toastClose() {
      this.buyToast = false;
      this.likeToast = false;
      this.compToast = false;
    },
    handleWheelModal() {
      this.wheelModal = false;
    },
    rotate() {
      let wheel = document.getElementById("wheel");
      let value = Math.ceil(Math.random() * 3600);
      wheel.style.transform = "rotate( " + value + "deg  )";
      this.detectRange(value);
    },
    detectRange(value) {
      let detectedValue = value % 360;
      let finalValue = Math.ceil(detectedValue / 30);
    },
  },
  watch: {
    async targetLang() {
      this.loader = true;
      const [translationsData] = await Promise.all([
        this.$store.dispatch("fetchTranslations/getTranslations", {
          headers: {
            lang: this.$i18n.locale,
          },
        }),
      ]);
      await this.$store.dispatch("siteInfo", {
        params: {
          lat: this.locations?.lat,
          lon: this.locations?.lng,
        },
        headers: {
          lang: this.$i18n.locale,
        },
      });
      this.$store.commit("getTranslations", translationsData?.translates);
      this.loader = false;
    },
    buyToast(val) {
      if (val) {
        setTimeout(() => {
          this.buyToast = false;
        }, 2000);
      }
    },
    likeToast(val) {
      if (val) {
        setTimeout(() => {
          this.likeToast = false;
        }, 2000);
      }
    },
    compToast(val) {
      if (val) {
        setTimeout(() => {
          this.compToast = false;
        }, 2000);
      }
    },
    storeLikeLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.likeToast = true;
      }
    },

    storeCompLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.compToast = true;
      }
    },
    storeCartLength(newVal, oldVal) {
      if (newVal > oldVal && this.afterReload) {
        this.buyToast = true;
      }
    },
  },
  components: { Header, Footer, MobileBottomBar },
};
</script>
<style lang="css" scoped>
.loader-container {
  height: 100vh;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}
.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #fff;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  background-color: #1f8a70;
  border-radius: 50%;
  animation: scale50 1s infinite ease-in-out;
}
.loader::before {
  top: auto;
  bottom: 0;
  background-color: var(--color_green);
  animation-delay: 0.5s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes scale50 {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
.bounce-toast-enter-active {
  animation: bounce-toast-in 0.5s;
}
.bounce-toast-leave-active {
  animation: bounce-toast-in 0.5s reverse;
}
@keyframes bounce-toast-in {
  0% {
    right: -100%;
    opacity: 0;
  }
  50% {
    right: 32px;
    opacity: 1;
  }
  100% {
    right: 32px;
  }
}

.left {
  position: relative;
  z-index: 9;
}
.wheel-box {
  width: 578px;
  height: 578px;
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: 27%;
  top: 50%;
  overflow: hidden;
  border: 8px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wheel {
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: #001f30;
  border-radius: 50%;
  transition: 5s ease-in-out;
}
.arrow {
  position: absolute;
  top: auto;
  transform: translateY(-56px) rotate(90deg);
  right: auto;
  left: auto;
  z-index: 9;
}
.cover {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 20px solid #001f30;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 99;
  display: flex;
  justify-content: center;
}
.num {
  width: 10px;
  height: 10px;
  background: var(--color_green);
  position: absolute;
  width: 50%;
  height: 50%;
  transform-origin: bottom right;
  transform: rotate(calc(30deg * var(--i)));
  clip-path: polygon(0 0, 45% 0, 100% 100%, 0 45%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.num p {
  color: #fff;
  font-size: 14.084px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: rotate(45deg) translateX(20px);
}
.num:nth-child(even) {
  background: #e6e6e6;
}
.num:nth-child(even) p {
  color: #00b2a9;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.right {
  max-width: 540px;
  padding: 64px 0 72px 0;
}
.wrapper .svg {
  position: absolute;
  top: 14px;
  right: 14px;
  left: auto;
  cursor: pointer;
}
.wrapper .title {
  color: #00b2a9;
  margin-bottom: 6px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.wrapper .sub {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 25.6px; /* 160% */
  margin-bottom: 57px;
  opacity: 0.5;
}
.wrapper input {
  border-radius: 64px;
  background: #f4f4f4;
  border: none;
  padding: 22px 32px;
  min-width: 412px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 38px;
}
.wrapper input::placeholder {
  opacity: 0.5;
}
.wrapper input:focus-visible {
  outline: none;
}
.txt {
  color: #000;
  margin-bottom: 24px;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 25.6px; /* 213.333% */
  opacity: 0.4000000059604645;
  max-width: 90%;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 27px;
}
.send {
  border-radius: 64px;
  background: #00b2a9;
  padding: 12px 32px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
}
.share {
  padding: 12px 32px;
  border: none;
  border-radius: 64px;
  background: #f2f2f2;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.ant-back-top {
  bottom: 108px;
  right: 35px;
}
@media screen and (max-width: 1024px) {
  @keyframes bounce-toast-in {
    0% {
      right: -100%;
      opacity: 0;
    }
    50% {
      right: 16px;
      opacity: 1;
    }
    100% {
      right: 16px;
    }
  }
  /* .antd-to-top {
    display: none !important;
  } */
}
.ant-back-top-inner {
  width: 67px;
  height: 67px;
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}
@media (max-width: 1024px) {
  .wheel-box {
    width: 450px;
    height: 450px;
    transform: translate(-50%, -50%);
    left: -10px;
  }
  .wrapper {
    grid-template-columns: 450px 1fr;
  }
}
@media (max-width: 768px) {
  .wheel-box {
    left: calc(50% - 50px);
    width: 450px;
    height: 450px;
    transform: translate(-50%, -50%);
    top: 0;
    position: relative;
  }
  .left {
    height: 160px;
    display: flex;
    justify-content: center;
  }
  .wrapper {
    grid-template-columns: 1fr;
  }
  .right {
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .right .svg {
    display: none;
  }
  .right {
    padding: 64px 0 24px 0;
  }
}
@media (max-width: 576px) {
  .wheel-box {
    width: 400px;
    height: 400px;
  }
  .right {
    padding: 64px 0 24px 0;
  }
}
@media (max-width: 414px) {
  .wheel-box {
    width: 340px;
    height: 340px;
  }
  .right {
    padding: 32px 0 24px 0;
  }
}
</style>
