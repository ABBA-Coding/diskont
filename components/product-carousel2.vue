<template lang="html">
  <div class="container_xl">
    <div class="product-carousel">
      <div class="flex items-center justify-center">
        <div :class="`product-swiper swiper-product2`">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
        </div>
        <div class="swiper-button-prev-product2"><span v-html="arrow"></span></div>
        <div class="swiper-button-next-product2"><span v-html="arrow"></span></div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "IndexPage",
  props: ["swiperName"],
  data() {
    return {
      arrow: require("../assets/svg/carousel-arrow.svg?raw"),
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper-product2", {
      slidesPerView: 2,
      spaceBetween: 16,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-product2",
        prevEl: ".swiper-button-prev-product2",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
};
</script>
<style>
.product-carousel {
  position: relative;
}
.product-carousel .swiper-button-prev-product2,
.product-carousel .swiper-button-next-product2 {
  position: absolute;
  border-radius: 50%;
  top: 208px;
  z-index: 100;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  cursor: pointer;
}
.product-carousel .swiper-button-prev-product2 svg,
.product-carousel .swiper-button-next-product2 svg {
  z-index: 1;
  width: 8px;
  height: 14px;
}
.product-carousel .swiper-button-prev-product2 svg path,
.product-carousel .swiper-button-next-product2 svg path {
  fill: #000;
}
.product-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
  opacity: 0;
}
.swiper-button-prev-product2 {
  left: -28px;
}
.swiper-button-next-product2 {
  right: -28px;
}
.swiper-button-prev-product2 span,
.swiper-button-next-product2 span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-prev-product2 span {
  transform: rotate(180deg);
}

.product-swiper {
  overflow: hidden;
}
</style>
