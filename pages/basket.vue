<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link class="disabled" :to="localePath('/')">
          {{ $store.state.translations["main.cart"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['main.cart']" />
          <span class="d-flex align-items-end"
            >{{ $store.state.cart.length }}
            {{ $store.state.translations["category.product-count"] }}</span
          >
        </div>
      </div>
      <div class="basket-page-body" v-if="products.length > 0 || skeletonLoad">
        <div>
          <div class="basket-cards-grid">
            <div
              class="basket-card"
              v-for="skeletonItem in [1, 2, 3, 4]"
              :key="skeletonItem"
              v-if="skeletonLoad"
            >
              <div class="basket-img-container">
                <b-skeleton width="100%" height="100%"></b-skeleton>
              </div>
              <div class="basket-card-body">
                <div class="basket-card-text-block">
                  <h4>
                    <b-skeleton width="100%"></b-skeleton>
                  </h4>
                  <p><b-skeleton width="80%"></b-skeleton></p>
                  <p><b-skeleton width="70%"></b-skeleton></p>
                </div>
                <div class="basket-card-count"></div>
                <div class="basket-price-block"></div>
              </div>
            </div>
            <div
              class="basket-card"
              v-for="(product, index) in products"
              :key="index"
              :class="{ 'last-basket-card': index == products.length - 1 }"
              v-if="!skeletonLoad"
            >
              <div
                class="basket-img-container"
                @click="$router.push(localePath(`/product/${product.slug}`))"
              >
                <img :src="product.images[0]?.sm_img" alt="" />
              </div>
              <div class="basket-card-body">
                <div class="basket-card-text-block">
                  <h4 @click="$router.push(localePath(`/product/${product.slug}`))">
                    {{ product?.info?.name }}
                  </h4>
                  <p>
                    {{ $store.state.translations["main.category"] }}:
                    {{
                      product?.info?.category?.name
                        ? product?.info?.category?.name
                        : "---"
                    }}
                  </p>
                  <p>
                    {{ $store.state.translations["main.brand"] }}:
                    {{ product?.info?.brand?.name ? product?.info?.brand?.name : "---" }}
                  </p>
                </div>
                <div class="basket-card-count">
                  <div class="basket-count-btn">
                    <span
                      v-ripple="'rgba(9, 69, 79, 0.1)'"
                      @click="
                        $store.state.cart.find((item) => item.id == product.id)?.count > 1
                          ? $store.commit('productCountDown', {
                              id: product.id,
                            })
                          : deleteProduct(product.id)
                      "
                      ><svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0L11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H1Z"
                          fill="#09454f"
                        /></svg
                    ></span>

                    {{ $store.state.cart.find((item) => item.id == product.id)?.count }}
                    <span
                      v-ripple="'rgba(9, 69, 79, 0.1)'"
                      @click="
                        $store.state.cart.find((item) => item.id == product?.id)?.count <
                          product?.stock &&
                          $store.commit('productCountUp', { id: product.id })
                      "
                      ><svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 0C5.68234 0 5.8572 0.0724328 5.98614 0.201364C6.11507 0.330295 6.1875 0.505164 6.1875 0.6875V4.8125H10.3125C10.4948 4.8125 10.6697 4.88493 10.7986 5.01386C10.9276 5.1428 11 5.31766 11 5.5C11 5.68234 10.9276 5.8572 10.7986 5.98614C10.6697 6.11507 10.4948 6.1875 10.3125 6.1875H6.1875V10.3125C6.1875 10.4948 6.11507 10.6697 5.98614 10.7986C5.8572 10.9276 5.68234 11 5.5 11C5.31766 11 5.1428 10.9276 5.01386 10.7986C4.88493 10.6697 4.8125 10.4948 4.8125 10.3125V6.1875H0.6875C0.505164 6.1875 0.330295 6.11507 0.201364 5.98614C0.0724328 5.8572 0 5.68234 0 5.5C0 5.31766 0.0724328 5.1428 0.201364 5.01386C0.330295 4.88493 0.505164 4.8125 0.6875 4.8125H4.8125V0.6875C4.8125 0.505164 4.88493 0.330295 5.01386 0.201364C5.1428 0.0724328 5.31766 0 5.5 0Z"
                          fill="#09454f"
                        />
                      </svg>
                    </span>
                  </div>
                  <p>
                    {{
                      `${
                        product?.discount_price
                          ? product?.discount_price
                          : product?.real_price
                      }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }}
                    {{ $store.state.translations["main.som-count"] }}
                  </p>
                </div>
                <div class="basket-price-block">
                  <span>
                    <span
                      v-html="activeHeart"
                      v-if="$store.state.like.includes(product.id)"
                      @click="
                        $store.commit('addToStore', {
                          id: product.id,
                          name: 'like',
                        })
                      "
                    ></span>
                    <span
                      class="basket-like"
                      v-html="like"
                      v-else
                      @click="
                        $store.commit('addToStore', {
                          id: product?.id,
                          name: 'like',
                        })
                      "
                    ></span>
                    <p @click="deleteProduct(product.id)">
                      <span v-html="deleteIcon"></span>
                      {{ $store.state.translations["main.delete"] }}
                    </p>
                  </span>
                  <div class="basket-card-price">
                    <span
                      >{{
                        Math.floor(
                          (product?.discount_price
                            ? product?.discount_price
                            : product?.real_price) / $store.state.dicoin.sum_to_dicoin
                        )
                      }}
                      {{ $store.state.translations["main.cout-di-coin"] }}</span
                    >
                    <h4>
                      {{ productTotalPrice(product) }}
                      {{ $store.state.translations["main.som"] }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-for="product in products"
              :key="product?.id"
              v-if="!skeletonLoad"
              class="mobile__card"
            >
              <div class="top">
                <div class="left">
                  <div class="img">
                    <img class="pic" :src="product.images[0]?.sm_img" alt="" />
                  </div>
                  <div class="content">
                    <p class="name">{{ product?.info?.name }}</p>

                    <p class="category">
                      {{ $store.state.translations["main.category"] }}:
                      {{
                        product?.info?.category?.name
                          ? product?.info?.category?.name
                          : "---"
                      }}
                    </p>
                    <p class="brand">
                      {{ $store.state.translations["main.brand"] }}:
                      {{
                        product?.info?.brand?.name ? product?.info?.brand?.name : "---"
                      }}
                    </p>
                  </div>
                </div>
                <div class="right">
                  <button class="like">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M3.97696 7.78706C1.39279 13.1421 9.96196 20.6181 14.0313 23.3329C18.3398 21.1127 26.4178 13.3987 24.0856 7.78823C21.9308 2.60706 15.1105 4.79456 14.0313 7.78823C13.3126 4.82723 6.49229 2.57206 3.97696 7.78706Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.103 24.7395C14.7297 24.9316 14.3142 25.02 13.8975 24.9962C13.4808 24.9723 13.0774 24.837 12.727 24.6035C10.7253 23.2721 7.63289 20.7873 5.30725 17.9131C4.14682 16.479 3.0776 14.8262 2.48479 13.0683C1.88238 11.277 1.72758 9.20885 2.68639 7.22225C4.39283 3.68913 7.65449 2.71005 10.3569 3.06979C11.7067 3.24692 12.9951 3.75663 14.113 4.55572C15.2646 3.75797 16.5812 3.24868 17.9579 3.06855C20.6519 2.71994 23.9136 3.71139 25.4268 7.34958C26.2548 9.33989 26.0964 11.392 25.5168 13.1969C24.9432 14.9832 23.9172 16.6682 22.7724 18.1356C20.5031 21.0469 17.4059 23.5527 15.1018 24.7395H15.103ZM15.805 6.37791C14.953 6.89094 14.2978 7.58075 14.029 8.32372C13.8442 7.55973 13.2154 6.84767 12.355 6.32599C10.1673 4.99829 6.48927 4.9031 4.83684 8.32372C2.47519 13.2154 10.3089 20.048 14.029 22.5279C17.9699 20.4992 25.3548 13.4503 23.2224 8.32372C21.7872 4.87467 18.0899 4.99829 15.805 6.37791Z"
                        fill="#31373B"
                      />
                    </svg>
                  </button>
                  <button @click="deleteProduct(product.id)" class="trash">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M18.4444 3.20131C18.4444 2.88271 18.3106 2.57715 18.0725 2.35186C17.8343 2.12657 17.5112 2 17.1744 2H10.8242L10.6756 2.00841C10.3542 2.04457 10.0594 2.19547 9.85168 2.43027C9.64391 2.66507 9.53877 2.96605 9.55774 3.27172C9.57671 3.57738 9.71836 3.86466 9.95374 4.07485C10.1891 4.28505 10.5005 4.40229 10.8242 4.40263H17.1744L17.323 4.39422C17.6319 4.35979 17.9168 4.21932 18.1235 3.99943C18.3302 3.77955 18.4444 3.49556 18.4444 3.20131ZM11.4592 9.80855C11.7703 9.80859 12.0705 9.91661 12.303 10.1121C12.5355 10.3077 12.684 10.5771 12.7204 10.8693L12.7293 11.0099V19.4191C12.7289 19.7253 12.6049 20.0198 12.3827 20.2424C12.1605 20.4651 11.8568 20.599 11.5336 20.617C11.2105 20.6349 10.8923 20.5355 10.6441 20.339C10.3958 20.1424 10.2363 19.8637 10.1981 19.5596L10.1892 19.4191V11.0099C10.1892 10.6913 10.323 10.3857 10.5612 10.1604C10.7993 9.93511 11.1224 9.80855 11.4592 9.80855ZM17.8005 10.8693C17.7623 10.5653 17.6028 10.2865 17.3545 10.09C17.1063 9.89345 16.7881 9.794 16.465 9.81194C16.1418 9.82989 15.8381 9.96387 15.6159 10.1865C15.3937 10.4092 15.2697 10.7037 15.2693 11.0099V19.4191L15.2782 19.5596C15.3165 19.8637 15.476 20.1424 15.7242 20.339C15.9725 20.5355 16.2907 20.6349 16.6138 20.617C16.937 20.599 17.2407 20.4651 17.4629 20.2424C17.6851 20.0198 17.8091 19.7253 17.8094 19.4191V11.0099L17.8005 10.8693Z"
                        fill="#FF3F3F"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.7512 5.28571C23.0699 5.28606 23.3763 5.40632 23.608 5.6219C23.8397 5.83749 23.9792 6.13214 23.9979 6.44565C24.0165 6.75916 23.913 7.06786 23.7085 7.30869C23.504 7.54951 23.2139 7.70428 22.8975 7.74137L22.7512 7.75V21.3036C22.7513 22.2464 22.3858 23.1537 21.7295 23.8396C21.0732 24.5256 20.1757 24.9385 19.2207 24.9938L19.0007 25H8.99931C8.04275 24.9998 7.12241 24.6394 6.42645 23.9927C5.73048 23.3459 5.31146 22.4615 5.25504 21.5204L5.24879 21.3036V7.75C4.93014 7.74965 4.62366 7.6294 4.39196 7.41381C4.16026 7.19822 4.02082 6.90358 4.00215 6.59007C3.98348 6.27656 4.08697 5.96785 4.29149 5.72703C4.496 5.4862 4.7861 5.33143 5.10252 5.29434L5.24879 5.28571H22.7512ZM7.74913 7.75H20.2509V21.3036L20.2421 21.4465C20.2063 21.7463 20.0602 22.0228 19.8314 22.2236C19.6026 22.4243 19.307 22.5354 19.0007 22.5357H8.99931L8.85304 22.5271C8.54904 22.4915 8.26881 22.3474 8.06539 22.1219C7.86196 21.8964 7.74945 21.6053 7.74913 21.3036V7.75Z"
                        fill="#FF3F3F"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="bottom">
                <div class="basket-card-count">
                  <div class="basket-count-btn">
                    <span
                      @click="
                        $store.state.cart.find((item) => item.id == product.id)?.count > 1
                          ? $store.commit('productCountDown', {
                              id: product.id,
                            })
                          : deleteProduct(product.id)
                      "
                      ><svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0L11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H1Z"
                          fill="#1F8A70"
                        /></svg
                    ></span>
                    {{ $store.state.cart.find((item) => item.id == product.id)?.count }}
                    <span @click="$store.commit('productCountUp', { id: product.id })"
                      ><svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 0C5.68234 0 5.8572 0.0724328 5.98614 0.201364C6.11507 0.330295 6.1875 0.505164 6.1875 0.6875V4.8125H10.3125C10.4948 4.8125 10.6697 4.88493 10.7986 5.01386C10.9276 5.1428 11 5.31766 11 5.5C11 5.68234 10.9276 5.8572 10.7986 5.98614C10.6697 6.11507 10.4948 6.1875 10.3125 6.1875H6.1875V10.3125C6.1875 10.4948 6.11507 10.6697 5.98614 10.7986C5.8572 10.9276 5.68234 11 5.5 11C5.31766 11 5.1428 10.9276 5.01386 10.7986C4.88493 10.6697 4.8125 10.4948 4.8125 10.3125V6.1875H0.6875C0.505164 6.1875 0.330295 6.11507 0.201364 5.98614C0.0724328 5.8572 0 5.68234 0 5.5C0 5.31766 0.0724328 5.1428 0.201364 5.01386C0.330295 4.88493 0.505164 4.8125 0.6875 4.8125H4.8125V0.6875C4.8125 0.505164 4.88493 0.330295 5.01386 0.201364C5.1428 0.0724328 5.31766 0 5.5 0Z"
                          fill="#1F8A70"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="price">
                  <p>
                    {{ productTotalPrice(product) }}
                    {{ $store.state.translations["main.som"] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basket-checkout-container">
          <div class="basket-checkout-block">
            <div class="basket-checkout-price">
              <h3>{{ $store.state.translations["main.total"] }}:</h3>
              <b-skeleton v-if="skeletonLoad" width="40%"></b-skeleton>
              <h3 v-else>
                {{
                  `${products
                    .reduce((summ, item) => {
                      return (
                        summ +
                        (item.discount_price ? item.discount_price : item.real_price) *
                          $store.state.cart.find((elem) => elem.id == item.id)?.count
                      );
                    }, 0)
                    .toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                }}
                {{ $store.state.translations["main.som"] }}
              </h3>
            </div>
            <!-- <div class="basket-promo-input">
              <input placeholder="Введите промокод" type="text" />
              <span>Применить</span>
            </div> -->
            <div class="basket-checkout-body">
              <span
                ><p>{{ $store.state.translations["category.price"] }}:</p>
                <p>
                  {{
                    `${products
                      .reduce((summ, item) => {
                        return (
                          summ +
                          (item.discount_price ? item.discount_price : item.real_price) *
                            $store.state.cart.find((elem) => elem.id == item.id)?.count
                        );
                      }, 0)
                      .toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                  }}
                  {{ $store.state.translations["main.som"] }}
                </p></span
              >
              <!-- <span
                ><p>Промокод:</p>
                <p>0 сум</p></span
              >
              <span
                ><p>Di Coinlar:</p>
                <p>0 сум</p></span
              > -->
              <!-- <span
                ><p>Стоимость доставки:</p>
                <p>25 000 сум</p></span
              > -->
            </div>
            <div class="basket-checkout-btn" @click="checkoutCheck()">
              {{ $store.state.translations["checkout.order-processing"] }}
            </div>
            <div class="basket-checkout-bottom">
              <p v-html="$store.state.translations['checkout.cart-access-text']"></p>
            </div>
          </div>
          <div class="basket-coin-block">
            <img src="../assets/images/basket-2coin.png" alt="" />
            <h3>
              +
              {{
                Math.floor(
                  products.reduce((sum, item) => {
                    return (
                      sum +
                      Math.floor(
                        (item.discount_price ? item.discount_price : item.real_price) /
                          $store.state.dicoin.sum_to_dicoin
                      ) *
                        $store.state.cart.find((item) => item.id == item.id)?.count
                    );
                  }, 0)
                )
              }}
              {{ $store.state.translations["main.cout-di-coin"] }}
            </h3>
            <p>{{ $store.state.translations["checkout.cart-text"] }}</p>
          </div>
        </div>
      </div>
      <div class="empty-box-app" v-else>
        <img src="../assets/images/packaging cancel.png" alt="" />
        <h2>{{ $store.state.translations["checkout.cart-empty-title"] }}</h2>
        <p>{{ $store.state.translations["checkout.cart-empty-text"] }}</p>
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
import MainTitle from "../components/Main-title.vue";
import CategoriesAppCard from "../components/categories/categories-app-banner.vue";
export default {
  data() {
    return {
      skeletonList: [1, 2, 3],
      skeletonLoad: true,
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      like: require("../assets/svg/card-like.svg?raw"),
      deleteIcon: require("../assets/svg/basket-delete.svg?raw"),
      activeHeart: require("../assets/svg/active-heart.svg?raw"),
      // twoCoin: require("../assets/svg/basket-2coin.svg?raw"),
      products: [],
    };
  },
  mounted() {
    this.$store.commit("reloadStore");
    let storeProducts = JSON.parse(localStorage.getItem("cart"));
    if (storeProducts.length > 0) {
      this.skeletonLoad = true;
      this.__GET_PRODUCTS_BY_ID({
        products: storeProducts.map((item) => item.id),
      });
    } else {
      this.skeletonLoad = false;
    }
  },
  computed: {
    totalPrice() {
      const totalSum = this.$store.state.cart.reduce((summ, item) => {
        return summ + item.price * item.count;
      }, 0);
      return `${totalSum}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  methods: {
    async __GET_PRODUCTS_BY_ID(dataForm) {
      try {
        const data = await this.$store.dispatch("fetchProducts/getProductsById", {
          data: dataForm,
          params: {
            headers: {
              lang: this.$i18n.locale,
            },
          },
        });
        this.products = data?.products;
        this.skeletonLoad = false;
      } catch (e) {
        this.skeletonLoad = false;
      }
    },
    async deleteProduct(id) {
      this.skeletonLoad = true;
      await this.$store.commit("deleteToCart", id);
      let storeProducts = JSON.parse(localStorage.getItem("cart"));
      if (storeProducts.length > 0) {
        this.__GET_PRODUCTS_BY_ID({
          products: storeProducts.map((item) => item.id),
        });
      } else {
        this.products = [];
        this.skeletonLoad = false;
      }
    },
    checkoutCheck() {
      const auth = localStorage.getItem("dis_auth_token");
      if (auth) {
        this.$router.push(this.localePath("/checkout"));
      } else {
        this.$store.commit("authVisibleChange", true);
      }
    },
    productTotalPrice(product) {
      return `${
        product.discount_price ? product.discount_price : product.real_price
      }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      // .slice(0, product?.price?.indexOf("."))
      // .replace(".", ",")
      // .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  components: { MainTitle, CategoriesAppCard },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.basket-page-body {
  display: grid;
  grid-template-columns: 12.1fr 3.8fr;
  grid-gap: 24px;
}
.basket-cards-grid {
  background: #ffffff;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 32px;
}
.last-basket-card {
  padding-bottom: 0 !important;
  border-bottom: 0 !important;
}
.basket-card {
  display: grid;
  grid-template-columns: 118px auto;
  grid-gap: 21px;
  padding-bottom: 18px;
  /* margin-bottom: 18px; */
  border-bottom: 2px solid #f2f5f7;
}

.basket-card:last-of-type {
  padding-bottom: 0;
  border: none;
}
.basket-img-container {
  padding-top: 13px;
  padding-bottom: 13px;
  background: #f6f7f9;
  border-radius: 12px;
  height: 118px;
  cursor: pointer;
}
.basket-img-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.basket-card-text-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.basket-card-text-block h4 {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #1c1f22;
  margin-bottom: 10px;
  cursor: pointer;
}
.basket-card-text-block p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #8c959c;
  display: flex;
}
.basket-card-text-block p:last-child {
  margin-top: 4px;
}
.basket-card-body {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
}
.basket-card-count {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.basket-card-count p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin-top: 8px;
  color: #494f54;
}
.basket-count-btn {
  height: 36px;
  /* padding: 0 15px; */
  display: flex;
  align-items: center;
  width: 120px;
  background: #f2f5f7;
  border-radius: 24px;
  justify-content: space-between;
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #1c1f22;
}
.basket-count-btn > span {
  border-radius: 50%;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
}
.basket-count-btn > span:hover {
  background-color: rgba(9, 69, 79, 0.1);
}
.basket-price-block > span {
  display: flex;
}
.basket-price-block > span p {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  letter-spacing: -0.24px;
  color: #ff3f3f;
  margin-left: 38px;
  cursor: pointer;
}
.basket-price-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.basket-price-block .basket-like {
  cursor: pointer;
}
.basket-price-block .basket-like svg path {
  fill: #000;
}
.basket-price-block h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 22px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.28px;
  color: #000000;
  margin-top: 42px;
  display: flex;
}
.basket-card-price {
  display: flex;
  align-items: flex-end;
}
.basket-card-price span {
  white-space: nowrap;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 12.2059px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #000000;
  height: 18px;
  padding: 0 7.4px;
  display: flex;
  align-items: center;
  background: #fbc100;
  border-radius: 4.88235px;
  margin-right: 16px;
}
.basket-checkout-block {
  padding: 18px;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
}
.basket-checkout-price {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e8e8e8;
}
.basket-checkout-price h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 22.4015px;
  color: #111111;
}
.basket-promo-input input {
  border: none;
  padding: 15px 11px;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14.9343px;
  line-height: 19px;
  color: #000;
}
.basket-promo-input input::placeholder {
  color: #c7c7c7;
}
.basket-promo-input input:focus {
  outline: none;
}
.basket-promo-input {
  background: #ffffff;
  border: 1.86679px solid #f1f1f1;
  border-radius: 11.2007px;
  display: grid;
  grid-template-columns: auto 116px;
}

.basket-promo-input span {
  background: #f1f1f1;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14.9343px;
  line-height: 22px;
  color: #09454f;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.basket-checkout-body span p {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  color: #111111;
}
.basket-checkout-body {
  display: grid;
  grid-gap: 11px;
  margin-top: 20px;
  padding-bottom: 19px;
  margin-bottom: 19px;
  border-bottom: 1px solid #e8e8e8;
}
.basket-checkout-body span {
  display: flex;
  justify-content: space-between;
}
.basket-checkout-btn {
  background: #09454f;
  border-radius: 11.2007px;
  height: 52px;
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 14.9343px;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
}
.basket-checkout-bottom {
  margin-top: 15px;
}
.basket-checkout-bottom p {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 13.0675px;
  line-height: 19px;
  color: #999999;
}
.basket-checkout-bottom p span {
  color: #2b71f8;
}
.basket-coin-block {
  padding: 18px;
  background: #e9fcfb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 23px;
}
.basket-coin-block h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: -0.28px;
  color: #09454f;
  margin-bottom: 24px;
}
.basket-coin-block p {
  font-family: var(--SB_400);
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #09454f;
  text-align: center;
}
.basket-coin-block img {
  position: absolute;
  left: 5px;
  top: -20px;
}
.mobile__card {
  display: none;
}
@media screen and (max-width: 1600px) {
  .basket-card-body {
    grid-template-columns: repeat(3, 1fr);
  }
  .basket-price-block h4 {
    font-size: 20px;
  }
  .basket-card-text-block h4 {
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) {
  .basket-page-body {
    grid-template-columns: repeat(1, 1fr);
    gap: 56px;
  }
  .basket-card {
    display: none;
  }
  .basket-cards-grid {
    background: transparent;
    box-shadow: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
  .mobile__card {
    display: block;
  }
  .mobile__card .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  }
  .mobile__card .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .mobile__card .pic {
    width: 78px;
    height: 78px;
    object-fit: contain;
    border-radius: 4px;
    display: flex;
  }
  .mobile__card .name {
    color: #1c1f22;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.28px;
    max-width: 90%;
    margin-bottom: 16px;
  }
  .mobile__card .like,
  .mobile__card .trash {
    background: transparent;
    border: none;
  }
  .mobile__card .right {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .mobile__card .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mobile__card .bottom .price {
    margin: 0;
    color: #000;
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 27px */
    letter-spacing: -0.28px;
  }
}
</style>
