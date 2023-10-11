<template lang="html">
  <div class="wrap product-page">
    <div class="image-modal" :class="{ hideModal: !imageModal }">
      <div class="image-modal-container">
        <div class="product-inner-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="img in carouselImages" :key="img.id">
              <img :src="img?.md_img" />
            </div>
          </div>
        </div>
        <div class="carousel-hide" @click="imageModal = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#d9d9d9"
          >
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </div>
        <div class="swiper-button-prev-product-inner">
          <svg viewBox="0 0 24 24" style="width: 24px; height: 24px">
            <path
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            ></path>
          </svg>
        </div>
        <div class="swiper-button-next-product-inner">
          <svg viewBox="0 0 24 24" style="width: 24px; height: 24px">
            <path
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="container_xl">
      <div class="top">
        <h4 class="title" v-if="skeleton">
          <b-skeleton width="40%" height="100%"></b-skeleton>
        </h4>
        <h4 class="title" v-else>{{ product?.name }}</h4>
        <div class="page-breadcrumb" v-if="!skeleton">
          <nuxt-link :to="localePath('/')">{{
            $store.state.translations["main.home-page"]
          }}</nuxt-link>
          <nuxt-link
          v-if="product?.info?.category?.parent?.parent?.slug"
            :to="localePath(`/categories-inner/${product?.info?.category?.parent?.parent?.slug}`)"
          >
            {{ product?.info?.category?.parent?.parent?.name }}
          </nuxt-link>
          <nuxt-link
          v-if="product?.info?.category?.parent?.slug"
            :to="localePath(`/categories-inner/${product?.info?.category?.parent?.slug}`)"
          >
            {{ product?.info?.category?.parent?.name }}
          </nuxt-link>
          <nuxt-link
            :to="localePath(`/categories-inner/${product?.info?.category?.slug}`)"
          >
            {{ product?.info?.category?.name }}
          </nuxt-link>
          <!-- <nuxt-link :to="localePath(`/product/${product?.slug}`)">
            {{ product?.name }}
          </nuxt-link> -->
        </div>
        <div v-else>
          <b-skeleton width="50%"></b-skeleton>
        </div>
        <div class="flexer">
          <div class="left">
            <div class="stars">
              <div v-if="product?.info?.stars">
                <a-rate class="product-rate" v-model="product.info.stars" disabled />
              </div>
              <div v-else>
                <a-rate class="product-rate" v-model="fullRate" disabled />
              </div>
            </div>
            <p class="reviews" v-if="product?.info?.stars != null">
              ({{ product?.info?.comments.length }}
              {{ $store.state.translations["product.feedbacks-count"] }})
            </p>
            <p class="reviews" v-else>
              (0 {{ $store.state.translations["product.feedbacks-count"] }})
            </p>
          </div>
          <div class="right">
            <div class="bottom">
              <button
                :class="{
                  'active-like-comp-btn': $store.state.like.includes(product?.id),
                }"
                @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
              >
                <svg
                  v-if="$store.state.like.includes(product?.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M11.8528 0.5C11.1095 0.5 10.3991 0.67846 9.74137 1.03046C9.29363 1.27002 8.88232 1.58832 8.52941 1.96596C8.17647 1.58832 7.76519 1.27002 7.31745 1.03046C6.65969 0.67846 5.94931 0.5 5.20602 0.5C2.64357 0.5 0.558824 2.68349 0.558824 5.36734C0.558824 7.26827 1.51736 9.2872 3.40779 11.3681C4.9862 13.1056 6.91866 14.5539 8.26183 15.463L8.52941 15.6441L8.79699 15.463C10.1402 14.554 12.0726 13.1056 13.6511 11.3681C15.5415 9.2872 16.5 7.26827 16.5 5.36734C16.5 2.68349 14.4153 0.5 11.8528 0.5Z"
                    fill="#1F8A70"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.2939 0C10.5507 0 9.84027 0.17846 9.18254 0.530458C8.73481 0.770022 8.3235 1.08832 7.97059 1.46596C7.61765 1.08832 7.20636 0.770022 6.75863 0.530458C6.10087 0.17846 5.39048 0 4.6472 0C2.08474 0 0 2.18349 0 4.86734C0 6.76827 0.958541 8.7872 2.84897 10.8681C4.42737 12.6056 6.35984 14.0539 7.70301 14.963L7.97059 15.1441L8.23817 14.963C9.58134 14.054 11.5138 12.6056 13.0922 10.8681C14.9827 8.7872 15.9412 6.76827 15.9412 4.86734C15.9412 2.18349 13.8564 0 11.2939 0ZM12.3779 10.1562C10.9672 11.709 9.24894 13.0291 7.97059 13.9126C6.69224 13.029 4.97394 11.709 3.56333 10.1562C1.85315 8.27378 0.986052 6.49434 0.986052 4.86734C0.986052 2.75295 2.62845 1.03276 4.64723 1.03276C5.80949 1.03276 6.87716 1.59192 7.5764 2.56684L7.97059 3.11644L8.36478 2.56684C9.06402 1.59192 10.1317 1.03276 11.2939 1.03276C13.3127 1.03276 14.9551 2.75295 14.9551 4.86734C14.9551 6.49434 14.088 8.27378 12.3779 10.1562Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M12.3779 10.1562C10.9672 11.709 9.24894 13.0291 7.97059 13.9126C6.69224 13.029 4.97394 11.709 3.56333 10.1562C1.85315 8.27378 0.986052 6.49434 0.986052 4.86734C0.986052 2.75295 2.62845 1.03276 4.64723 1.03276C5.80949 1.03276 6.87716 1.59192 7.5764 2.56684L7.97059 3.11644L8.36478 2.56684C9.06402 1.59192 10.1317 1.03276 11.2939 1.03276C13.3127 1.03276 14.9551 2.75295 14.9551 4.86734C14.9551 6.49434 14.088 8.27378 12.3779 10.1562Z"
                    fill="#C7C7C7"
                  />
                </svg>

                {{ $store.state.translations["main.to-favorites"] }}
              </button>
              <button
                :class="{
                  'active-like-comp-btn': $store.state.comparison.includes(product?.id),
                }"
                @click="
                  $store.commit('addToStore', {
                    id: product?.id,
                    name: 'comparison',
                  })
                "
              >
                <svg
                  v-if="$store.state.comparison.includes(product?.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                >
                  <path
                    d="M1.27812 4.2067H16.3425C16.8447 4.2067 17.1794 3.87016 17.1794 3.36536C17.1794 2.86056 16.8447 2.52402 16.3425 2.52402H1.27812C0.775974 2.52402 0.44121 2.86056 0.44121 3.36536C0.44121 3.87016 0.775974 4.2067 1.27812 4.2067Z"
                    fill="#1F8A70"
                  />
                  <path
                    d="M3.78886 6.73072C4.03993 6.73072 4.20731 6.64658 4.37469 6.47832C4.70946 6.14178 4.70946 5.63698 4.37469 5.30044L2.4498 3.36536L4.37469 1.43028C4.70946 1.09374 4.70946 0.588938 4.37469 0.252402C4.03993 -0.084134 3.53778 -0.084134 3.20302 0.252402L0.692282 2.77642C0.357517 3.11296 0.357517 3.61776 0.692282 3.9543L3.20302 6.47832C3.3704 6.64658 3.53778 6.73072 3.78886 6.73072Z"
                    fill="#1F8A70"
                  />
                  <path
                    d="M13.8318 15.1441C14.0829 15.1441 14.2503 15.06 14.4176 14.8917L16.9284 12.3677C17.2631 12.0312 17.2631 11.5264 16.9284 11.1898L14.4176 8.6658C14.0829 8.32927 13.5807 8.32927 13.246 8.6658C12.9112 9.00234 12.9112 9.50714 13.246 9.84368L15.1709 11.7788L13.246 13.7138C12.9112 14.0504 12.9112 14.5552 13.246 14.8917C13.4133 15.06 13.5807 15.1441 13.8318 15.1441Z"
                    fill="#1F8A70"
                  />
                  <path
                    d="M1.27812 12.6201H16.3425C16.8447 12.6201 17.1794 12.2836 17.1794 11.7788C17.1794 11.274 16.8447 10.9374 16.3425 10.9374H1.27812C0.775974 10.9374 0.44121 11.274 0.44121 11.7788C0.44121 12.2836 0.775974 12.6201 1.27812 12.6201Z"
                    fill="#1F8A70"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                >
                  <path
                    d="M1.77806 4.2067H16.8425C17.3446 4.2067 17.6794 3.87016 17.6794 3.36536C17.6794 2.86056 17.3446 2.52402 16.8425 2.52402H1.77806C1.27591 2.52402 0.941149 2.86056 0.941149 3.36536C0.941149 3.87016 1.27591 4.2067 1.77806 4.2067Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M4.2888 6.73072C4.53987 6.73072 4.70725 6.64658 4.87463 6.47832C5.2094 6.14178 5.2094 5.63698 4.87463 5.30044L2.94974 3.36536L4.87463 1.43028C5.2094 1.09374 5.2094 0.588938 4.87463 0.252402C4.53987 -0.084134 4.03772 -0.084134 3.70296 0.252402L1.19222 2.77642C0.857456 3.11296 0.857456 3.61776 1.19222 3.9543L3.70296 6.47832C3.87034 6.64658 4.03772 6.73072 4.2888 6.73072Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M14.3317 15.1441C14.5828 15.1441 14.7502 15.06 14.9176 14.8917L17.4283 12.3677C17.7631 12.0312 17.7631 11.5264 17.4283 11.1898L14.9176 8.6658C14.5828 8.32927 14.0807 8.32927 13.7459 8.6658C13.4111 9.00234 13.4111 9.50714 13.7459 9.84368L15.6708 11.7788L13.7459 13.7138C13.4111 14.0504 13.4111 14.5552 13.7459 14.8917C13.9133 15.06 14.0807 15.1441 14.3317 15.1441Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M1.77806 12.6201H16.8425C17.3446 12.6201 17.6794 12.2836 17.6794 11.7788C17.6794 11.274 17.3446 10.9374 16.8425 10.9374H1.77806C1.27591 10.9374 0.941149 11.274 0.941149 11.7788C0.941149 12.2836 1.27591 12.6201 1.77806 12.6201Z"
                    fill="#C7C7C7"
                  />
                </svg>

                {{ $store.state.translations["product.comparison"] }}
              </button>
            </div>
          </div>
        </div>
        <div class="flexer__mobile">
          <div class="available-sale">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <circle cx="10.0029" cy="10.0466" r="9.99707" fill="#16C67A" />
                <path
                  d="M15.6536 6.27082L7.90429 14.8278L4.35254 10.9059L5.26308 9.90041L7.90429 12.8098L14.743 5.26538L15.6536 6.27082Z"
                  fill="white"
                />
              </svg>
              {{ $store.state.translations["product.available-sale"] }}
            </p>
            <span
              >{{ $store.state.translations["product.code"] }}: {{ product?.id }}</span
            >
          </div>
          <div class="buttons__mobile">
            <button
              @click="
                $store.commit('addToStore', {
                  id: product?.id,
                  name: 'comparison',
                })
              "
            >
              <svg
                v-if="$store.state.comparison.includes(product?.id)"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect
                  x="2.35115"
                  y="2.35091"
                  width="11.6667"
                  height="9.33333"
                  rx="2"
                  stroke="#09454f"
                  fill="#09454f"
                  stroke-width="2"
                />
                <rect
                  x="14.0178"
                  y="16.3509"
                  width="11.6667"
                  height="9.33333"
                  rx="2"
                  fill="#09454f"
                  stroke="#09454f"
                  stroke-width="2"
                />
                <path
                  d="M23.8344 4.68425L25.3428 6.19263C25.7984 6.64824 25.7984 7.38693 25.3428 7.84254L23.8344 9.35092M18.6845 7.01758L25.0011 7.01758"
                  stroke="#09454f"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4.20123 18.6842L2.69286 20.1926C2.23725 20.6482 2.23725 21.3869 2.69286 21.8425L4.20123 23.3509M9.35115 21.0176L3.03457 21.0176"
                  stroke="#09454f"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect
                  x="2.35115"
                  y="2.35091"
                  width="11.6667"
                  height="9.33333"
                  rx="2"
                  stroke="#09454f"
                  stroke-width="2"
                />
                <rect
                  x="14.0178"
                  y="16.3509"
                  width="11.6667"
                  height="9.33333"
                  rx="2"
                  stroke="#09454f"
                  stroke-width="2"
                />
                <path
                  d="M23.8344 4.68425L25.3428 6.19263C25.7984 6.64824 25.7984 7.38693 25.3428 7.84254L23.8344 9.35092M18.6845 7.01758L25.0011 7.01758"
                  stroke="#09454f"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4.20123 18.6842L2.69286 20.1926C2.23725 20.6482 2.23725 21.3869 2.69286 21.8425L4.20123 23.3509M9.35115 21.0176L3.03457 21.0176"
                  stroke="#09454f"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button
              @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
            >
              <svg
                v-if="$store.state.like.includes(product?.id)"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M11.8528 0.5C11.1095 0.5 10.3991 0.67846 9.74137 1.03046C9.29363 1.27002 8.88232 1.58832 8.52941 1.96596C8.17647 1.58832 7.76519 1.27002 7.31745 1.03046C6.65969 0.67846 5.94931 0.5 5.20602 0.5C2.64357 0.5 0.558824 2.68349 0.558824 5.36734C0.558824 7.26827 1.51736 9.2872 3.40779 11.3681C4.9862 13.1056 6.91866 14.5539 8.26183 15.463L8.52941 15.6441L8.79699 15.463C10.1402 14.554 12.0726 13.1056 13.6511 11.3681C15.5415 9.2872 16.5 7.26827 16.5 5.36734C16.5 2.68349 14.4153 0.5 11.8528 0.5Z"
                  fill="#09454f"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M8.78621 4.38706C4.09172 5.89939 2.41789 11.0103 3.85012 15.4819C6.15399 22.6524 16.0342 28.029 16.0342 28.029C16.0342 28.029 25.9878 22.5697 28.2169 15.4819C29.6478 11.0103 27.9633 5.89939 23.2688 4.38706C20.8021 3.59553 17.9763 4.10275 16.0342 5.6044C13.9812 4.06004 11.2556 3.59019 8.78621 4.38706Z"
                  stroke="#09454f"
                  stroke-width="2.14333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M21.3734 8.94376C22.8016 9.4056 23.8108 10.6803 23.9322 12.1766"
                  stroke="#09454f"
                  stroke-width="1.18649"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-xs-12 images">
          <div class="world" v-show="skeleton">
            <div thumbsSlider="" class="swiper mySwiper11">
              <div class="swiper-wrapper flex-column">
                <div class="swiper-slide" v-for="img in [1, 2, 3, 4]" :key="img">
                  <b-skeleton height="100%" width="100%"></b-skeleton>
                </div>
              </div>
            </div>
            <div
              style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
              class="swiper mySwiper22"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img in [1, 2, 3, 4]" :key="img">
                  <b-skeleton height="100%" width="100%"></b-skeleton>
                </div>
              </div>
            </div>
          </div>

          <div class="world" v-show="!skeleton">
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper flex-column swiper_thumb">
                <div class="swiper-slide" v-for="img in product?.images" :key="img.id">
                  <img :src="img?.md_img" />
                </div>
              </div>
            </div>
            <div
              style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
              class="swiper mySwiper2"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="img in product?.images"
                  :key="img.id"
                  @click="currentImg(img.id)"
                >
                  <img :src="img?.md_img" />
                </div>
              </div>
            </div>
          </div>
          <div class="available-sale">
            <p v-if="product?.stock" :class="{ success: product?.stock }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <circle cx="10.0029" cy="10.0466" r="9.99707" fill="#16C67A" />
                <path
                  d="M15.6536 6.27082L7.90429 14.8278L4.35254 10.9059L5.26308 9.90041L7.90429 12.8098L14.743 5.26538L15.6536 6.27082Z"
                  fill="white"
                /></svg
              >{{ $store.state.translations["product.available-sale"] }}
            </p>
            <p v-else :class="{ error: !product?.stock }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_3558_33982"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="21"
                >
                  <rect
                    x="0.00592041"
                    y="0.00592041"
                    width="20"
                    height="20"
                    fill="url(#pattern0)"
                  />
                </mask>
                <g mask="url(#mask0_3558_33982)">
                  <rect y="0.00592041" width="20" height="20" fill="url(#pattern1)" />
                  <rect y="0.00592041" width="20" height="20" fill="#FF3838" />
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_3558_33982" transform="scale(0.00195312)" />
                  </pattern>
                  <pattern
                    id="pattern1"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_3558_33982" transform="scale(0.00195312)" />
                  </pattern>
                  <image
                    id="image0_3558_33982"
                    width="512"
                    height="512"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs></svg
              >{{ $store.state.translations["product.not-available-sale"] }}
            </p>
            <span
              >{{ $store.state.translations["product.code"] }}: {{ product?.id }}</span
            >
          </div>
        </div>
        <div class="col-md-4 col-xs-12 stats">
          <div class="widther">
            <div class="specs" v-if="productCharacteristic.length > 0">
              <p class="lil">{{ $store.state.translations["product.short-info"] }}</p>
              <div v-if="skeleton">
                <div
                  v-for="(characteristic, chIndex) in [1, 2, 3, 4]"
                  :key="characteristic"
                  class="spec main-character w-100"
                  :class="{ 'last-character': chIndex == 3 }"
                >
                  <b-skeleton width="100%"></b-skeleton>
                </div>
              </div>
              <div
                v-else
                class="spec main-character"
                v-for="(characteristic, chIndex) in productCharacteristic"
                :class="{ 'last-character': chIndex == productCharacteristic.length - 1 }"
                :key="characteristic.id"
              >
                <p class="question">
                  {{ characteristic?.characteristic?.name }}
                </p>
                <p class="answer">{{ characteristic?.name }}</p>
              </div>
              <p
                class="all"
                @click="scrollElement('characteristic')"
                v-if="productCharacteristic.length > 0"
              >
                {{ $store.state.translations["product.all-characteristic"] }}
              </p>
            </div>

            <div v-if="skeleton" class="colors">
              <p class="lil">
                <b-skeleton height="100%" width="20%"></b-skeleton>
              </p>
              <div class="grid">
                <div
                  v-for="colorOption in [1, 2, 3, 4]"
                  :key="colorOption"
                  class="disabled-attribute color"
                >
                  <span><b-skeleton height="100%" width="100%"></b-skeleton></span>
                </div>
              </div>
            </div>
            <div
              v-else
              class="colors"
              v-for="(atributColor, atributColorIndex) in productAttributes.filter(
                (item) => item.title?.includes('Цвет') || item.title?.includes('Rang')
              )"
              :key="atributColorIndex"
            >
              <p class="lil">{{ atributColor?.title }}</p>
              <div class="grid">
                <div
                  class="color"
                  v-for="colorOption in atributColor?.options"
                  :key="colorOption?.id"
                  @click="$router.push(localePath(`/product/${colorOption?.slug}`))"
                  :class="{
                    'active-attribute': colorOption?.active,
                    'disabled-attribute': !colorOption?.available,
                  }"
                >
                  <span :style="{ 'background-color': colorOption?.title }"></span>
                </div>
              </div>
            </div>
            <div
              v-if="skeleton"
              class="variations"
              v-for="(atribut, atributIndex) in [1, 2]"
              :key="atribut"
            >
              <p class="lil">
                <b-skeleton width="50%" height="100%"></b-skeleton>
              </p>
              <div class="grid">
                <div
                  class="variation disabled-attribute"
                  v-for="(option, optionIndex) in [9, 8, 7, 6]"
                  :key="option"
                >
                  <b-skeleton width="40px"></b-skeleton>
                </div>
              </div>
            </div>
            <div
              class="variations"
              v-for="(atribut, atributIndex) in productAttributes.filter(
                (item) => !item.title?.includes('Цвет') && !item.title?.includes('Rang')
              )"
              :key="atributIndex"
            >
              <p class="lil">{{ atribut?.title }}</p>
              <div class="grid">
                <div
                  class="variation"
                  v-for="(option, optionIndex) in atribut?.options"
                  @click="$router.push(localePath(`/product/${option?.slug}`))"
                  :class="{
                    'active-attribute': option?.active,
                    'disabled-attribute': !option?.available,
                  }"
                  :key="optionIndex"
                >
                  {{ option?.title }}
                </div>
              </div>
            </div>
            <div class="counter" v-if="!skeleton">
              <p class="lil">{{ $store.state.translations["product.count"] }}</p>
              <div class="grid">
                <div class="number">
                  <button
                    v-if="$store.state.cart.find((item) => item.id == product.id)"
                    @click="
                      $store.state.cart.find((item) => item.id == product.id)?.count >
                        1 && $store.commit('productCountDown', { id: product?.id })
                    "
                  >
                    <a-icon type="minus" />
                  </button>
                  <button v-else @click="currentCount > 1 && currentCount--">
                    <a-icon type="minus" />
                  </button>
                  {{
                    $store.state.cart.find((item) => item.id == product?.id)
                      ? $store.state.cart.find((item) => item.id == product?.id)?.count
                      : currentCount
                  }}
                  <button
                    v-if="$store.state.cart.find((item) => item.id == product.id)"
                    @click="
                      $store.state.cart.find((item) => item.id == product?.id)?.count <
                        product?.stock &&
                        $store.commit('productCountUp', { id: product?.id })
                    "
                  >
                    <a-icon type="plus" />
                  </button>
                  <button v-else @click="currentCount < product?.stock && currentCount++">
                    <a-icon type="plus" />
                  </button>
                </div>
                <p>
                  {{ $store.state.translations["main.available-sale"] }}
                  {{ product?.stock }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-xs-12 order">
          <!-- <a-affix :offset-bottom="78"> -->
          <div class="cardo">
            <div class="cardo__header">
              <div class="discount" v-if="product?.discount">
                <p class="tag">
                  {{
                    product?.discount?.pivot?.amount
                      ? `-${(
                          (product?.discount?.pivot?.amount * 100) /
                          product?.real_price
                        ).toFixed()}%`
                      : `-${product?.discount?.pivot?.percent}%`
                  }}
                </p>
                <p class="dis__price" v-if="product?.discount_price">
                  {{ `${product?.real_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
                  {{ $store.state.translations["main.som"] }}
                </p>
                <p class="dis__txt">
                  {{ $store.state.translations["main.at-discount-price"] }}
                </p>
              </div>
              <p class="price" v-if="skeleton">
                <b-skeleton width="50%" height="100%"> </b-skeleton>
              </p>
              <p class="price" v-if="product?.price && !skeleton">
                {{
                  `${
                    product?.discount_price
                      ? product?.discount_price
                      : product?.real_price
                  }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                }}
                {{ $store.state.translations["main.som"] }}
              </p>

              <p class="delivery">
                {{ $store.state.translations["main.depends-region"] }}
              </p>

              <p class="coin" v-if="skeleton">
                <b-skeleton width="150px" height="100%"> </b-skeleton>
              </p>
              <!-- <p v-else class="coin">
                <img src="@/assets/images/Group 1000005199.png" alt="" />
                +{{
                  Math.floor(
                    (product?.discount_price
                      ? product?.discount_price
                      : product?.real_price) /
                      ($store.state.dicoin?.sum_to_dicoin
                        ? $store.state.dicoin?.sum_to_dicoin
                        : 1)
                  )
                }}
                {{ $store.state.translations["main.dicoin"] }}
              </p> -->
            </div>

            <div class="buttons">
              <button
                :class="{ 'disabled disabled-btn': !product?.stock }"
                v-if="!$store.state.cart.find((item) => item.id == product?.id)"
                class="cart"
                @click="
                  $store.commit('addToCart', {
                    obj: { id: product?.id, count: currentCount },
                    name: 'cart',
                  })
                "
              >
                <p>{{ $store.state.translations["main.add-to-cart"] }}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M1.29175 0.708252L3.02508 1.00825L3.82758 10.5691C3.89175 11.3499 4.54425 11.9491 5.32758 11.9466H14.4184C15.1659 11.9483 15.8001 11.3983 15.9059 10.6583L16.6967 5.19325C16.7851 4.58242 16.3609 4.01575 15.7509 3.92742C15.6976 3.91992 3.30341 3.91575 3.30341 3.91575"
                    stroke="#09454f"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.7709 6.99552H13.0817"
                    stroke="#09454f"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.96199 14.8354C5.21283 14.8354 5.41533 15.0388 5.41533 15.2888C5.41533 15.5396 5.21283 15.7429 4.96199 15.7429C4.71116 15.7429 4.50866 15.5396 4.50866 15.2888C4.50866 15.0388 4.71116 14.8354 4.96199 14.8354Z"
                    fill="#09454f"
                    stroke="#09454f"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3623 14.8354C14.6131 14.8354 14.8164 15.0388 14.8164 15.2888C14.8164 15.5396 14.6131 15.7429 14.3623 15.7429C14.1114 15.7429 13.9089 15.5396 13.9089 15.2888C13.9089 15.0388 14.1114 14.8354 14.3623 14.8354Z"
                    fill="#09454f"
                    stroke="#09454f"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                :class="{ 'disabled disabled-btn': !product?.stock }"
                class="click"
                @click="visibleOc = true"
              >
                {{ $store.state.translations["product.buy-now"] }}
              </button>
            </div>
          </div>
          <!-- </a-affix> -->

          <!-- <div class="credit">
            <p>{{ $store.state.translations["main.installmentpayment"] }}</p>
            <p>Муддатли тўлов 139 333 сўмдан / 24 ой</p>
            <button>Xalol bo’lib to’lashga olish</button>
          </div> -->

          <div class="credit__items">
            <div>
              <img src="@/assets/images/credit-1.svg" alt="" />
              <p>{{ $store.state.translations["product.credit-text1"] }}</p>
            </div>
            <div>
              <img src="@/assets/images/credit-2.svg" alt="" />
              <p>{{ $store.state.translations["product.credit-text2"] }}</p>
            </div>
            <div>
              <img src="@/assets/images/credit-3.svg" alt="" />
              <p>{{ $store.state.translations["product.credit-text3"] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs">
        <div class="butns" id="characteristic">
          <button :class="{ active: tabHandle == 'desc' }" @click="tabHandle = 'desc'">
            {{ $store.state.translations["product.about-product"] }}
          </button>
          <button
            :class="{ active: tabHandle == 'characteristic' }"
            @click="tabHandle = 'characteristic'"
          >
            {{ $store.state.translations["product.characteristics"] }}
          </button>
          <button
            :class="{ active: tabHandle == 'location' }"
            @click="tabHandle = 'location'"
          >
            {{ $store.state.translations["product.availability-stores"] }}
          </button>
          <button
            :class="{ active: tabHandle == 'comment' }"
            @click="tabHandle = 'comment'"
          >
            {{ $store.state.translations["product.customer-reviews"] }}
          </button>
        </div>
        <div class="contents">
          <div v-if="tabHandle == 'desc'" class="about">
            <div class="about__wrap">
              <h4 class="paragraph">{{ $store.state.translations["product.info"] }}</h4>
              <p v-html="product?.info?.desc"></p>
            </div>
          </div>
          <div
            :class="{ active: specsHandle }"
            class="specifications"
            v-if="tabHandle == 'characteristic'"
          >
            <div class="spec__wrap" v-if="characteristics.length > 0">
              <div
                class="items"
                v-for="character in characteristics"
                :key="character?.id"
              >
                <h4 class="paragraph">{{ character?.name }}</h4>
                <div class="spec__wrap_item">
                  <div class="grider">
                    <div
                      class="spec"
                      v-for="characterOptions in character?.characteristics.slice(
                        0,
                        character?.characteristics.length -
                          Math.floor(character?.characteristics.length / 2)
                      )"
                      :key="characterOptions?.id"
                    >
                      <span></span>
                      <p class="question">{{ characterOptions?.name }}</p>
                      <p class="answer">{{ characterOptions?.options[0]?.name }}</p>
                    </div>
                  </div>
                  <div class="grider">
                    <div
                      class="spec"
                      v-for="characterOptions in character?.characteristics.slice(
                        character?.characteristics.length -
                          Math.floor(character?.characteristics.length / 2),
                        character?.characteristics.length
                      )"
                      :key="characterOptions?.id"
                    >
                      <span></span>

                      <p class="question">{{ characterOptions?.name }}</p>
                      <p class="answer">{{ characterOptions?.options[0]?.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comments-empty" v-if="characteristics.length == 0">
              <nuxt-img format="webp" src="/comments-empty.png" alt="" />
              <h4>{{ $store.state.translations["product.no-reting"] }}</h4>
            </div>
          </div>
          <div
            :class="{ active: locationsHandle }"
            class="locations"
            v-if="tabHandle == 'location'"
          >
            <table class="branches-table">
              <thead>
                <tr>
                  <th>
                    <p>{{ $store.state.translations["product.stores"] }}</p>
                  </th>
                  <th>
                    <p>{{ $store.state.translations["product.working-time"] }}</p>
                  </th>
                  <th>
                    <p>{{ $store.state.translations["product.address"] }}</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="branch in branches" :key="branch?.id">
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <a :href="branch?.link">
                          <img src="@/assets/images/logo/map.svg" alt="" />
                        </a>
                      </div>
                      <a :href="branch?.link">
                        <p>
                          {{ branch?.name }}
                        </p>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div class="cyber">
                      <div class="img">
                        <img src="@/assets/images/logo/clock.svg" alt="" />
                      </div>
                      <p style="white-space: nowrap">{{ branch?.work_time }}</p>
                    </div>
                  </td>
                  <td>
                    <div class="cyber">
                      <p style="white-space: wrap">
                        {{ branch?.phone_number }}
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="reviews" v-if="tabHandle == 'comment'">
            <div class="reviews__left">
              <div
                class="review"
                v-if="product?.info?.comments.length > 0"
                v-for="comment in product?.info?.comments"
                :key="comment?.id"
              >
                <p class="name">{{ comment?.user?.name }}</p>
                <div class="flex">
                  <div class="stars" v-if="comment?.stars">
                    <!-- <a-rate v-model="comment.stars" disabled /> -->
                    <a-rate class="comment-rate-icon" v-model="comment.stars" disabled>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.80942 0.293887L8.35342 3.39989C8.43075 3.55655 8.58009 3.66589 8.75342 3.69122L12.2101 4.19055C12.3501 4.20922 12.4761 4.28255 12.5621 4.39455C12.7234 4.60455 12.6988 4.90189 12.5054 5.08255L10.0001 7.50522C9.87275 7.62522 9.81609 7.80122 9.84942 7.97255L10.4494 11.3912C10.4914 11.6746 10.2981 11.9399 10.0148 11.9859C9.89742 12.0039 9.77742 11.9852 9.67075 11.9326L6.59209 10.3186C6.43742 10.2346 6.25209 10.2346 6.09742 10.3186L2.99609 11.9412C2.73675 12.0732 2.41942 11.9752 2.27809 11.7212C2.22409 11.6186 2.20542 11.5019 2.22409 11.3879L2.82409 7.96922C2.85409 7.79855 2.79742 7.62322 2.67342 7.50255L0.154753 5.08055C-0.0505808 4.87655 -0.0519141 4.54455 0.152753 4.33922C0.153419 4.33855 0.154086 4.33722 0.154753 4.33655C0.239419 4.25989 0.343419 4.20855 0.456086 4.18855L3.91342 3.68922C4.08609 3.66189 4.23475 3.55389 4.31342 3.39722L5.85609 0.293887C5.91809 0.167887 6.02809 0.0712201 6.16142 0.0272201C6.29542 -0.0174466 6.44209 -0.00677988 6.56809 0.0565534C6.67142 0.107887 6.75609 0.19122 6.80942 0.293887Z"
                          fill="#F6C65C"
                        />
                      </svg>
                    </a-rate>
                  </div>
                  <p class="date">
                    {{ moment(comment?.created_at).format("DD") }}
                    {{ month[moment(comment?.created_at).format("M") - 1] }}
                    {{ moment(comment?.created_at).format("YYYY") }} г.
                  </p>
                </div>
                <div class="txt">
                  <p>
                    {{ comment?.comment }}
                  </p>
                </div>
              </div>
              <div class="comments-empty" v-if="product?.info?.comments.length == 0">
                <nuxt-img format="webp" src="/comments-empty.png" alt="" />
                <h4>{{ $store.state.translations["product.no-reting"] }}</h4>
              </div>
            </div>
            <div class="reviews__right">
              <div class="leave">
                <p class="leave__title">
                  <img src="@/assets/images/like.svg" alt="" />
                  {{ $store.state.translations["product.leave-comment"] }}
                </p>
                <button class="leave__btn" @click="commentOpen()">
                  {{ $store.state.translations["product.leave-comment-btn"] }}
                </button>
              </div>
              <div class="rating">
                <div class="total_rating">
                  <div>
                    <a-rate
                      v-if="product?.info?.stars"
                      v-model="product.info.stars"
                      disabled
                    />
                    <a-rate v-else disabled />
                    <p>5 оценок</p>
                  </div>
                  <p>
                    <span>{{ product?.info?.stars ? product?.info?.stars : 0 }}</span
                    >/5
                  </p>
                </div>
                <div class="rating_list">
                  <div class="rating_row">
                    <a-rate :value="5" disabled /><span></span>
                    <p>{{ commetItems[4] }}</p>
                  </div>
                  <div class="rating_row">
                    <a-rate :value="4" disabled /><span></span>
                    <p>{{ commetItems[3] }}</p>
                  </div>
                  <div class="rating_row">
                    <a-rate :value="3" disabled /><span></span>
                    <p>{{ commetItems[2] }}</p>
                  </div>
                  <div class="rating_row">
                    <a-rate :value="2" disabled /><span></span>
                    <p>{{ commetItems[1] }}</p>
                  </div>
                  <div class="rating_row">
                    <a-rate :value="1" disabled /><span></span>
                    <p>{{ commetItems[0] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other pb-5" v-if="productsOthers.length > 0">
        <h4>{{ $store.state.translations["product.similar-products"] }}</h4>
        <ProductCarousel>
          <div class="swiper-slide" v-for="product in productsOthers" :key="product.id">
            <ProductCardVue :product="product" />
          </div>
        </ProductCarousel>
      </div>
      <ApplicationBanner class="app" />
      <a-modal
        v-model="visibleOc"
        :body-style="{ padding: '32px', borderRadius: '14px' }"
        centered
        :closable="false"
        width="670px"
        @ok="handleOkName"
      >
        <div class="vmodal-header auth-modal oc-modal-header">
          <h5>{{ $store.state.translations["main.boc-title"] }}</h5>
          <span @click="handleOkName"
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
        <div class="vmodal-body">
          <div class="oc-product">
            <div class="oc-product-img" v-if="product?.images?.length > 0">
              <img :src="product?.images[0]?.md_img" alt="" />
            </div>

            <div class="oc-product-body">
              <div>
                <h5>{{ product?.info?.name }}</h5>
                <Transition name="oc-bounce">
                  <p class="oc-code" v-if="callBox">
                    {{ $store.state.translations["main.product-code"] }}:
                    <span>{{ product?.id }}</span>
                  </p>
                </Transition>
              </div>
              <div
                class="d-flex flex-column align-items-center justify-content-center oc-counter-box"
              >
                <div class="oc-product-counter">
                  <button @click="formOc.count > 1 && formOc.count--">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                    >
                      <path
                        d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0L11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H1Z"
                        fill="#09454f"
                      />
                    </svg>
                  </button>
                  {{ formOc.count }}
                  <button @click="formOc.count < product?.stock && formOc.count++">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M5.5 0C5.68234 0 5.8572 0.0724328 5.98614 0.201364C6.11507 0.330295 6.1875 0.505164 6.1875 0.6875V4.8125H10.3125C10.4948 4.8125 10.6697 4.88493 10.7986 5.01386C10.9276 5.1428 11 5.31766 11 5.5C11 5.68234 10.9276 5.8572 10.7986 5.98614C10.6697 6.11507 10.4948 6.1875 10.3125 6.1875H6.1875V10.3125C6.1875 10.4948 6.11507 10.6697 5.98614 10.7986C5.8572 10.9276 5.68234 11 5.5 11C5.31766 11 5.1428 10.9276 5.01386 10.7986C4.88493 10.6697 4.8125 10.4948 4.8125 10.3125V6.1875H0.6875C0.505164 6.1875 0.330295 6.11507 0.201364 5.98614C0.0724328 5.8572 0 5.68234 0 5.5C0 5.31766 0.0724328 5.1428 0.201364 5.01386C0.330295 4.88493 0.505164 4.8125 0.6875 4.8125H4.8125V0.6875C4.8125 0.505164 4.88493 0.330295 5.01386 0.201364C5.1428 0.0724328 5.31766 0 5.5 0Z"
                        fill="#09454f"
                      />
                    </svg>
                  </button>
                </div>
                <p>
                  {{ productPrice(product) }}
                  {{ $store.state.translations["main.som-count"] }}
                </p>
              </div>
            </div>
          </div>
          <a-form-model
            v-if="!callBox"
            :model="formOc"
            ref="ruleFormOcClick"
            :rules="rulesName"
            layout="vertical"
          >
            <div class="oc-modal-form">
              <a-form-model-item
                class="form-item register-input mb-0 pb-0"
                :label="$store.state.translations['main.enter-your-name']"
                prop="name"
              >
                <a-input
                  v-model="formOc.name"
                  type="text"
                  :placeholder="$store.state.translations['main.enter-your-name']"
                />
              </a-form-model-item>
              <a-form-model-item
                class="form-item register-input mb-0 pb-0"
                :label="$store.state.translations['main.your-phone-number']"
                prop="phone_number"
              >
                <a-input
                  v-model="formOc.phone_number"
                  v-mask="'+998 ## ### ## ##'"
                  placeholder="+998 (__) ___ __ __"
                />
              </a-form-model-item>
            </div>
          </a-form-model>
        </div>
        <div
          class="vmodal-btn vmodal-btn-height oc-product-btn"
          v-if="!callBox"
          @click="submitName()"
        >
          {{ $store.state.translations["main.send-info"] }}
        </div>
        <div class="vmodal-forget-password" v-if="!callBox" @click="callBox = true">
          {{ $store.state.translations["main.contact-you"] }}
        </div>
        <a href="#">
          <Transition name="oc-bounce">
            <div class="oc-product-call" v-if="callBox">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M30.0367 11.4363C29.045 11.2531 28.1342 11.886 27.9454 12.8541C27.7565 13.8222 28.3914 14.7674 29.3562 14.9568C32.2609 15.5231 34.5038 17.7716 35.0723 20.6862V20.6883C35.2341 21.5273 35.9727 22.1373 36.8234 22.1373C36.9375 22.1373 37.0516 22.1269 37.1678 22.1061C38.1326 21.9125 38.7675 20.9694 38.5787 19.9992C37.7301 15.646 34.3793 12.2837 30.0367 11.4363Z"
                    fill="#09454f"
                  />
                  <path
                    d="M29.9064 4.18254C29.4416 4.11592 28.9748 4.25332 28.6034 4.54895C28.2217 4.84875 27.9831 5.28178 27.9312 5.76686C27.8212 6.74744 28.5287 7.63433 29.508 7.74467C36.2615 8.49832 41.5107 13.7593 42.2701 20.5338C42.3718 21.4415 43.1332 22.1265 44.042 22.1265C44.1104 22.1265 44.1768 22.1223 44.2453 22.114C44.7204 22.0619 45.1437 21.8267 45.4425 21.4519C45.7392 21.0772 45.874 20.6108 45.8201 20.1341C44.874 11.6816 38.3321 5.12147 29.9064 4.18254Z"
                    fill="#09454f"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.9841 27.0258C31.2947 35.3341 33.18 25.7223 38.4714 31.01C43.5727 36.1099 46.5047 37.1317 40.0414 43.5932C39.2318 44.2438 34.088 52.0714 16.0109 33.9993C-2.06844 15.925 5.7546 10.7759 6.40541 9.96656C12.8844 3.48718 13.8885 6.43621 18.9898 11.5361C24.2812 16.826 14.6735 18.7175 22.9841 27.0258Z"
                    fill="#09454f"
                  /></svg
              ></span>
              <div class="call-number">
                <p>{{ $store.state.translations["main.call-centre"] }}:</p>
                <a :href="`tel:${$store.state.siteInfo?.phone_number}`">
                  <h4>
                    +{{
                      `${$store.state.siteInfo?.phone_number}`
                        .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                        ?.filter((item, index) => index != 0)
                        .join(" ")
                    }}
                  </h4>
                </a>
              </div>
            </div>
          </Transition>
        </a>
        <template slot="footer"> <h3></h3></template>
      </a-modal>
    </div>
    <Transition name="bounce-toast">
      <Vnotification
        v-if="compToast"
        :title="$store.state.translations['main.order-success']"
        @click="toastClose()"
      >
        <span v-html="iconComp"></span>
      </Vnotification>
    </Transition>
    <a-modal
      v-model="visibleComment"
      :body-style="{ padding: '24px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="804px"
      @ok="handleOkComment"
    >
      <div class="vmodal-header comment-modal-header">
        <h5>{{ $store.state.translations["main.new-comment"] }}</h5>
        <span @click="handleOkComment"
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
      <div class="vmodal-body">
        <a-form-model
          :model="formComment"
          ref="ruleFormComment"
          :rules="rulesComment"
          layout="vertical"
        >
          <a-form-model-item prop="comment">
            <a-input v-model="formComment.comment" type="textarea" rows="10" />
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="comment-modal-btns">
        <div class="comment-rate">
          <p>{{ $store.state.translations["product.your-rating"] }}:</p>
          <a-rate v-model="formComment.stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.80942 0.293887L8.35342 3.39989C8.43075 3.55655 8.58009 3.66589 8.75342 3.69122L12.2101 4.19055C12.3501 4.20922 12.4761 4.28255 12.5621 4.39455C12.7234 4.60455 12.6988 4.90189 12.5054 5.08255L10.0001 7.50522C9.87275 7.62522 9.81609 7.80122 9.84942 7.97255L10.4494 11.3912C10.4914 11.6746 10.2981 11.9399 10.0148 11.9859C9.89742 12.0039 9.77742 11.9852 9.67075 11.9326L6.59209 10.3186C6.43742 10.2346 6.25209 10.2346 6.09742 10.3186L2.99609 11.9412C2.73675 12.0732 2.41942 11.9752 2.27809 11.7212C2.22409 11.6186 2.20542 11.5019 2.22409 11.3879L2.82409 7.96922C2.85409 7.79855 2.79742 7.62322 2.67342 7.50255L0.154753 5.08055C-0.0505808 4.87655 -0.0519141 4.54455 0.152753 4.33922C0.153419 4.33855 0.154086 4.33722 0.154753 4.33655C0.239419 4.25989 0.343419 4.20855 0.456086 4.18855L3.91342 3.68922C4.08609 3.66189 4.23475 3.55389 4.31342 3.39722L5.85609 0.293887C5.91809 0.167887 6.02809 0.0712201 6.16142 0.0272201C6.29542 -0.0174466 6.44209 -0.00677988 6.56809 0.0565534C6.67142 0.107887 6.75609 0.19122 6.80942 0.293887Z"
                solid="red"
                fill="red"
                stroke="red"
              />
            </svg>
          </a-rate>
        </div>
        <div class="comment-btn comment-btn-close" @click="visibleComment = false">
          {{ $store.state.translations["product.close"] }}
        </div>
        <div
          class="comment-btn"
          :class="{ disabled: !formComment.stars }"
          @click="submitComment()"
        >
          {{ $store.state.translations["product.send-comment"] }}
        </div>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOkSuccess"
    >
      <div class="vmodal-header">
        <h5>{{ $store.state.translations["product.oc-success-title"] }}</h5>
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
      <div class="vmodal-body comment-modal-success">
        <nuxt-img format="webp" src="/modal-success.png" alt="" />
        <p>{{ $store.state.translations["product.oc-text"] }}</p>
      </div>
      <div class="vmodal-btn" @click="handleOkSuccess">
        {{ $store.state.translations["product.oc-success-btn"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
// import "swiper/swiper-bundle.min.css";
import ProductCardVue from "../../components/cards/ProductCard.vue";
import applicationBannerVue from "../../components/application-banner.vue";
import ProductCarousel from "../../components/product-carousel.vue";
import moment from "moment";
export default {
  name: "DiscontSlug",
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          name: "title",
          content: `${this.product.name},${this.product.info?.desc}`,
        },
        {
          name: "keywords",
          content: this.product.name,
        },
        {
          name: "description",
          content: `${this.product.info?.desc}`,
        },
        { hid: "og-title", property: "og:title", content: this.product.name },
        {
          hid: "og-description",
          property: "og:description",
          content: this.product.info?.desc,
        },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-url",
          property: "og:url",
          content: process.env.URL + "/" + this.$route.fullPath,
        },
        {
          hid: "og-image",
          property: "og:image",
          content: this.product?.images ? this.product?.images[0]?.md_img : "",
        },
      ],
    };
  },
  // async asyncData({ store, params, i18n }) {
  //   const [productData] = await Promise.all([
  //     store.dispatch("fetchProducts/getProductsBySlug", {
  //       id: params.index,
  //       params: {
  //         params: {
  //           lat: this.locations.lat,
  //           lon: this.locations.lng,
  //         },
  //         headers: {
  //           lang: i18n.locale,
  //         },
  //       },
  //     }),
  //   ]);
  //   const product = productData.product;
  //   const productCharacteristic = productData?.product?.characteristic_options.splice(
  //     0,
  //     4
  //   );
  //   const productAttributes = productData?.attributes;
  //   const characteristics = productData?.characteristics;
  //   const branches = productData?.branches;
  //   const carouselImages = [...product.images];

  //   return {
  //     product,
  //     productCharacteristic,
  //     productAttributes,
  //     characteristics,
  //     branches,
  //     carouselImages,
  //   };
  // },
  data() {
    return {
      currentCount: 1,
      fullRate: 5,
      imageModal: false,
      month: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      nolVal: 0,
      skeleton: true,
      count: 1,
      value: 5,
      callBox: false,
      visibleSuccess: false,
      visibleComment: false,
      characteristics: [],
      commentStarts: 2,
      iconComp: require("../../assets/svg/toast-comparison.svg?raw"),
      compToast: false,
      visibleOc: false,
      product: {
        images: [
          {
            md_img: "asdasd",
            id: 1,
          },
        ],
      },
      locations: {},
      branches: [],
      productCharacteristic: [],
      productAttributes: [],
      tabHandle: "desc",
      productsOthers: [],
      carouselImages: [],
      formComment: {
        product_id: null,
        comment: "",
        stars: 5,
      },
      formOc: {
        name: "",
        phone_number: "",
        product_id: null,
        count: 1,
      },
      rulesComment: {
        comment: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
      rulesName: {
        name: [
          {
            required: true,
            message: "Ismingizni kiriting",
            trigger: "change",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "Telefon raqamingizni kiriting",
            trigger: "change",
          },
          { min: 9, message: "Length should be 9", trigger: "blur" },
        ],
      },
    };
  },

  async fetch() {
    try {
      await this.$getLocation().then((coordinates) => {
        this.locations = coordinates;
      });
      console.log(this.locations);
    } catch (e) {
      console.log(e);
    }
    const [productData, productsData] = await Promise.all([
      this.$store.dispatch("fetchProducts/getProductsBySlug", {
        id: this.$route.params.index,
        params: {
          params: {
            lat: this.locations.lat,
            lon: this.locations.lng,
          },
          headers: {
            lang: this.$i18n.locale,
          },
        },
      }),
      this.$store.dispatch("fetchProducts/getProducts", {
        params: { limit: 12 },
        headers: {
          lang: this.$i18n.locale,
        },
      }),
    ]);
    this.product = productData.product;
    this.productCharacteristic = productData?.product?.characteristic_options.splice(
      0,
      4
    );
    this.productAttributes = productData?.attributes;
    this.characteristics = productData?.characteristics;
    this.branches = productData?.branches;
    this.carouselImages = [...this.product.images];
    this.productsOthers = productsData?.products?.data;
    this.skeleton = false;
  },
  computed: {
    commetItems() {
      const arr = [1, 2, 3, 4, 5];
      let rates = [0, 0, 0, 0, 0];
      if (this.product?.info?.comments?.length > 0) {
        arr.forEach((item, index) => {
          const currentComment = this.product?.info?.comments.filter(
            (elem) => elem.stars == item
          );
          rates[index] = currentComment?.length > 0 ? currentComment?.length : 0;
        });
      }
      const totalRes =
        rates.reduce((summ, elem, index) => {
          return summ + elem * (index + 1);
        }) /
        (5 *
          rates.reduce((summ, elem, index) => {
            return summ + elem;
          }));
      return rates;
    },
  },
  async mounted() {
    setTimeout(() => {
      this.swiperReload();
    }, 1000);
  },

  methods: {
    currentImg(id) {
      const currentImg = this.carouselImages.find((item) => item.id == id);
      this.carouselImages = this.carouselImages.filter((item) => item.id != id);
      this.carouselImages.unshift(currentImg);
      this.imageModal = true;
    },
    moment,
    scrollElement(id) {
      const element = document.getElementById(id);
      this.tabHandle = id;
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    },
    handleOkSuccess() {
      this.visibleSuccess = false;
    },
    handleOkComment() {
      this.visibleComment = false;
    },
    toastClose() {
      this.compToast = false;
    },
    commentOpen() {
      if (this.$store.state.auth) {
        this.visibleComment = true;
      } else {
        this.$store.commit("authVisibleChange", true);
      }
    },
    productPrice(product) {
      let price =
        product?.discount?.amount || product?.discount?.percent
          ? product?.discount?.amount
            ? product?.real_price - product?.discount?.amount
            : product?.real_price -
              (product?.real_price / 100) * product?.discount?.percent
          : product?.real_price;
      // .replace(".", ",")
      // .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    submitComment() {
      this.formComment.product_id = this.product.info.id;
      if (this.formComment.product_id) {
        this.$refs["ruleFormComment"].validate((valid) => {
          if (valid) {
            this.__POST_COMMENT(this.formComment);
          } else {
            return false;
          }
        });
      }
    },
    submitName() {
      const data = {
        ...this.formOc,
        phone_number: this.formOc.phone_number.split(" ").join("").replace("+", ""),
        product_id: this.product.id,
      };
      this.$refs["ruleFormOcClick"].validate((valid) => {
        if (valid) {
          this.__POST_ORDER(data);
        } else {
          return false;
        }
      });
    },
    handleOkName() {
      this.visibleOc = false;
    },
    async __POST_COMMENT(formData) {
      try {
        const data = await this.$store.dispatch("fetchProducts/postProductComment", {
          data: formData,
        });
        this.$notification.success({
          title: "Success",
          message: `Спасибо!
Ваш комментарий успешно отправлен.`,
        });
        this.visibleComment = false;
      } catch (e) {
        // console.log(e);
      }
    },
    async __POST_ORDER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postClickOrder", formData);
        this.visibleOc = false;
        // this.compToast = true;
        this.visibleSuccess = true;
      } catch (e) {
        // console.log(e);
      }
    },
    async swiperReload() {
      if (new Swiper()) {
        new Swiper(`.product-inner-swiper`, {
          slidesPerView: 1,
          spaceBetween: 24,
          flipEffect: {
            slideShadows: false,
          },
          pagination: false,
          autoplay: {
            delay: 40000,
          },
          navigation: {
            nextEl: ".swiper-button-next-product-inner",
            prevEl: ".swiper-button-prev-product-inner",
          },
        });
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 5,
          spaceBetween: 12,
          freeMode: true,
          watchSlidesProgress: true,
          direction: "horizontal",
          breakoints: {
            1024: {
              direction: "vertical",
              spaceBetween: 16,
              slidesPerView: 4,
            },
          },
        });
        var swiper2 = new Swiper(".mySwiper2", {
          loop: true,
          spaceBetween: 10,
          thumbs: {
            swiper: swiper,
          },
        });
        var swiper = new Swiper(".mySwiper11", {
          slidesPerView: 5,
          spaceBetween: 12,
          freeMode: true,
          watchSlidesProgress: true,
          direction: "horizontal",
          breakoints: {
            1024: {
              direction: "vertical",
              spaceBetween: 16,
              slidesPerView: 4,
            },
          },
        });
        var swiper2 = new Swiper(".mySwiper22", {
          loop: true,
          spaceBetween: 10,
          thumbs: {
            swiper: swiper,
          },
        });
      }
    },
  },
  watch: {
    visibleOc(val) {
      if (!val) this.count = 1;
    },
    compToast(val) {
      if (val) {
        setTimeout(() => {
          this.compToast = false;
        }, 2000);
      }
    },
  },
  components: {
    ProductCardVue,
    applicationBannerVue,
    ProductCarousel,
  },
};
</script>

<style scoped>
@import "../../assets/css/pages/product.css";
.last-character {
  border-bottom: 0 !important;
}
.swiper-button-prev-product-inner,
.swiper-button-next-product-inner,
.carousel-hide {
  position: absolute;
  backdrop-filter: blur(40px);
  backface-visibility: hidden;
  background: rgba(85, 85, 85, 0.5);
  border-radius: 100px;
  height: 48px;
  perspective: 1000;
  top: calc(50% - 15px);
  transition: opacity 0.3s ease;
  width: 48px;
  top: calc(100vh / 2 - 20px);
  z-index: 2;
}
.product-inner-swiper {
  height: 100%;
}
.swiper-button-prev-product-inner {
  left: 16px;
}
.swiper-button-next-product-inner {
  right: 16px;
}
.carousel-hide {
  top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  right: 16px;
}
.swiper-button-prev-product-inner svg,
.swiper-button-next-product-inner svg {
  fill: #fff;
  left: calc(50% - 12px);
  position: absolute;
  top: calc(50% - 12px);
  width: 24px;
  height: 24px;
}
.swiper-button-next-product-inner svg {
  transform: rotate(180deg);
}
.image-modal-container {
  max-width: 40%;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;
}
.image-modal-container .swiper-slide {
  margin: auto;
  height: 100vh;
}
.image-modal {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
}
.wrap {
  padding-top: 32px;
  min-height: 100vh;
  color: black;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hideModal {
  opacity: 0;
  z-index: -100 !important;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2,
.mySwiper22 {
  height: 515px;
  width: 80%;
}
.mySwiper2 .swiper-slide,
.mySwiper22 .swiper-slide {
  border-radius: 20px;
  overflow: hidden;
  cursor: grab;
}
.mySwiper,
.mySwiper11 {
  width: 20%;
  height: 480px;
  box-sizing: border-box;
  padding: 10px 0;
  padding: 0;
}

.mySwiper .swiper-slide,
.mySwiper11 .swiper-slide {
  height: 25%;
  width: 100px;
  opacity: 0.4;
  padding: 8px 0;
}

.mySwiper .swiper-slide-thumb-active,
.mySwiper11 .swiper-slide-thumb-active {
  opacity: 1;
  border: 1px solid var(--color_green);
  border-radius: 10px;
}
.world {
  display: flex;
  gap: 16px;
}
.colors img {
  width: 85px;
  height: auto;
  object-fit: contain;
}
.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 14px;
}
.flexer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.right .bottom {
  display: flex;
  align-items: center;
  gap: 32px;
}
.right button {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  color: #c7c7c7;
  border: 0.797059px solid #f1f1f1;
  border-radius: 7.97059px;
}

.specs {
  display: flex;
  flex-direction: column;
}
.spec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-bottom: 10px; */
  /* margin-bottom: 10px; */
  /* border-bottom: 1px dashed rgba(0, 0, 0, 0.1); */
  position: relative;
}
.grider {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.spec span {
  position: absolute;
  display: flex;
  width: 100%;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.stats .lil {
  font-weight: 700;
  font-size: 19.3083px;
  line-height: 23px;
  margin-bottom: 20px;
  color: black;
}
.colors .lil,
.variations .lil,
.counter .lil {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 14px;
}
.counter .grid {
  display: flex;
  align-items: center;
  gap: 16px;
}
.counter .grid > p {
  color: #5d5d5f;
  font-family: var(--SB_400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.question,
.answer {
  color: var(--grey, #727474);
  font-family: var(--SB_400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: #fff;
  position: relative;
  z-index: 3;
}
.question {
  padding-right: 8px;
}
.answer {
  color: var(--grey, #000);
  padding-left: 8px;
}
.top {
  /* max-width: 50%; */
}
.widther {
  max-width: 70%;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;
}

.colors .grid,
.variations .grid {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.color {
  width: 50px;
  height: 50px;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  padding: 4px;
}
.color span {
  /* background: black; */
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 4.854px;
}
.color:nth-child(2) span {
  background: lightpink;
}
.variation {
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  padding: 8px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  color: black;
}
.all {
  font-weight: 400;
  font-size: 14.4812px;
  line-height: 17px;
  color: #00b2a9;
  cursor: pointer;
}
.number {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  /* padding: 12px 16px; */
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: black;
}
.number button {
  width: 46px;
  height: 46px;
  color: #9a999b;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.number button:hover {
  background-color: #f9f9f9;
}
.credit {
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  padding: 14px 20px;
  margin-bottom: 40px;
}
.credit p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 20px;
}
.credit button {
  background: #f5f5f5;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: black;
  width: 100%;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
}
.credit__items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.credit__items div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.credit__items p {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #707070;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
}
.credit__items img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.active-attribute {
  border: 1px solid #04babe;
}
.disabled-attribute {
  pointer-events: none;
}
.tabs {
  padding: 64px 0 144px 0;
}
.butns {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.butns button {
  font-family: var(--SB_500);
  font-size: 14px;
  line-height: 18px;
  color: var(--color_dark_green);
  padding: 12px 34px;
  border: 1px solid #f1f1f1;
  border-radius: 77px;
  background-color: #fff;
}
.butns button.active {
  background: var(--color_dark_green);
  color: white;
}
.paragraph {
  margin-bottom: 24px;
  color: #000;
  font-family: var(--SB_500);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
}
.about p {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #414141;
}
.about__wrap {
  max-width: 1200px;
}
.reviews__left {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.about,
.specifications,
.locations,
.reviews {
  /* display: none !important; */
}
.about.active,
.specifications.active,
.locations.active,
.reviews.active {
  display: grid !important;
}
.spec__wrap {
  max-width: 820px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 164px;
  row-gap: 42px;
}
.spec__wrap_item {
  max-width: 820px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 164px;
  row-gap: 42px;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.item .question {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
}
.item .answer {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #020105;
}
tr,
td {
  padding-right: 72px;
}
th p {
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
  opacity: 0.4;
}
thead th {
  padding-bottom: 16px;
}
tbody td {
  padding-bottom: 24px;
}
tbody td p {
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  color: #000000;
}
tbody .img {
  background: #fafafa;
  padding: 8px;
  border-radius: 50%;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.cyber {
  display: flex;
  align-items: center;
  gap: 16px;
}
.reviews {
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 24px;
}
.review {
  background: #ffffff;
  border: 1px solid #f2f2fa;
  border-radius: 12px;
  padding: 18px;
}
.name {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 22px;
}
.date {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
}
.flex {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  gap: 32px;
}
.txt p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}
.leave {
  background: #fcfcfc;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 34px;
}
.leave__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}
.leave__btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: var(--color_dark_green);
  background: #e7faf5;
  border-radius: 10px;
  padding: 12px 0;
  width: 100%;
  border: none;
}
.other {
  margin-bottom: 120px;
}
.other h4 {
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  margin-bottom: 40px;
}
.other__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.app {
  margin-bottom: 120px;
}
.comment-btn {
  max-height: 52px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: #fff;
  font-family: var(--SB_500);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.36px;
  border-radius: 8px;
  background: var(--color_green);
  cursor: pointer;
  justify-content: center;
  min-height: 52px;
}
.comment-btn-close {
  color: var(--color_dark_green);
  background: #eaeaea;
}
.comment-modal-header {
  margin-bottom: 32px;
}
.comment-modal-btns {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 19px;
  margin-top: 16px;
}
.comment-rate {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.comment-modal-btns div p {
  color: var(--qora, #020105);
  font-family: var(--SB_400);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
}
.available-sale p {
  font-family: var(--SB_500);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 6px;
  padding-right: 10px;
  border-radius: 68.467px;
}
.available-sale .success {
  color: #16c67a;
  background: #e7f9f1;
}
.available-sale .error {
  color: #ff3a55;
  background: rgba(255, 58, 85, 0.302);
}
.available-sale p svg {
  margin-right: 7px;
}
.available-sale {
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  margin-top: 24px;
}
.available-sale span {
  color: rgb(0, 0, 0, 0.4);
  font-family: var(--SB_400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.flexer__mobile {
  display: none;
}
.cart svg {
  display: none;
}
.total_rating div p {
  color: #727474;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.total_rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.total_rating div {
  display: flex;
  align-items: center;
  gap: 16px;
}
.total_rating > p {
  color: #727474;
  font-family: var(--SB_500);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.total_rating > p > span {
  color: #000;
}
.rating_list {
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.rating_row {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}
.rating_row > span {
  display: block;
  position: absolute;
  border-radius: 100px;
  background: #e6e6e6;
  height: 4px;
  width: 100%;
}

.rating_row ul {
  background: white;
  position: relative;
  z-index: 98;
  padding-right: 16px;
}

.rating_row p {
  background: white;
  position: relative;
  z-index: 100;
  padding-left: 16px;
  color: #727474;
  font-size: 14px;
  font-style: normal;
  line-height: 20px; /* 142.857% */
}
.main-character {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}
.swiper_thumb {
  overflow-y: scroll;
}
.swiper_thumb::-webkit-scrollbar {
  display: none;
}
.disabled {
  pointer-events: none;
}

@media screen and (max-width: 1024px) {
  .image-modal-container {
    max-width: 70%;
  }
  .world {
    flex-direction: column-reverse;
  }
  .title {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 24px;
    color: black;
  }
  .mySwiper2,
  .mySwiper22 {
    height: 340px;
    width: 100%;
  }
  .flexer {
    display: none;
  }
  .mySwiper,
  .mySwiper11 {
    width: 100%;
    height: auto;
  }
  .swiper-wrapper {
    flex-direction: initial !important;
  }
  .flexer__mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .available-sale {
    display: none;
  }
  .flexer__mobile .available-sale {
    gap: 18px;
    margin: 0;
    display: flex;
  }
  .buttons__mobile {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .flexer__mobile button {
    background: transparent;
    border: none;
  }
  .stats {
    margin-top: 48px;
    margin-bottom: 48px;
    padding: 0;
  }
  .wrap {
    overflow: hidden;
  }
  .row {
    margin: 0 !important;
  }
  .widther {
    max-width: 100%;
    gap: 48px;
  }
  .widther .all {
    display: none;
  }
  .colors .grid,
  .variations .grid {
    flex-wrap: nowrap;
    overflow: auto;
  }
  .cardo .price {
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    margin: 0;
  }
  .delivery,
  .coin {
    display: none;
  }
  .cardo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cart {
    margin-bottom: 0;
    border-radius: 8px;
    background: #ebebeb;
    width: 36px;
    height: 36px;
  }
  .cart svg {
    display: flex;
  }
  .cart p {
    display: none;
  }
  .click {
    width: 147px;
    height: 36px;
    font-size: 14px;
  }
  .order {
    padding: 0;
  }
  .credit {
    display: none;
  }
  .butns {
    flex-wrap: nowrap;
    overflow: scroll;
    gap: 16px;
  }
  .butns button {
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .butns button.active {
    background: var(--color_green);
  }
  .about::v-deep p {
    color: #414141;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .spec__wrap {
    grid-template-columns: repeat(1, 1fr);
  }
  .spec .question {
    color: #727474;
  }
  .tabs {
    padding-bottom: 48px;
  }
  .counter {
    display: none;
  }
  tr {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin-bottom: 18px;
    border-bottom: 1px solid #e1e1e1;
    max-width: 482px;
  }
  tbody td {
    padding-bottom: 18px;
  }
  thead {
    display: none;
  }
  .reviews {
    display: flex;
    flex-direction: column-reverse;
  }
  .rating img {
    width: 100%;
  }
  .other {
    margin-bottom: 16px;
    padding-bottom: 16px !important;
  }
  .other h4 {
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 14px;
  }
  .app {
    padding: 16px;
    margin-bottom: 0;
  }
}
@media (min-width: 1320px) {
  .branches-table {
    width: 70%;
  }
}
@media screen and (max-width: 576px) {
  .image-modal-container {
    max-width: 100%;
  }
}
</style>
