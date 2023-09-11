<template lang="html">
  <div class="categories-tab-carousel">
    <div class="flex items-center justify-center">
      <div class="swiper-categories-tab mySwiper2">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
      </div>
      <div class="swiper-button-prev-c-inner">
        <span v-html="arrow"></span>
      </div>
      <div class="swiper-button-next-c-inner">
        <span v-html="arrow"></span>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "IndexPage",
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
    };
  },
  mounted() {
    const swiper = new Swiper(".swiper-categories-tab", {
      slidesPerView: "auto",
      spaceBetween: 4,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      modules: [Navigation, EffectCards, Autoplay],
      pagination: false,
      // autoplay: {
      //   delay: 1000,
      // },

      navigation: {
        nextEl: ".swiper-button-next-c-inner",
        prevEl: ".swiper-button-prev-c-inner",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {
    });
  },
};
</script>
<style>
.swiper-categories-tab .swiper-slide {
  width: auto !important;
}
.swiper-categories-tab {
  overflow: hidden;
}
.categories-tab-carousel {
  position: relative;
  height: 30px;
  margin-bottom: 24px;
}
.swiper-categories-tab::after {
  position: absolute;
  content: "";
  width: 90px;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 1;
  background: linear-gradient(270deg, #ffffff 33.07%, rgba(255, 255, 255, 0) 100%);
}
.categories-tab-carousel .swiper-button-next-c-inner,
.categories-tab-carousel .swiper-button-prev-c-inner {
  position: absolute;
  border-radius: 50%;
  top: -1px;
  z-index: 100;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f7f9;
  cursor: pointer;
}
.categories-tab-carousel .swiper-button-disabled {
  opacity: 0;
  pointer-events: none;
}
.categories-tab-carousel .swiper-button-next-c-inner {
  right: -12px;
}
.categories-tab-carousel .swiper-button-prev-c-inner {
  left: -12px;
}
.categories-tab-carousel .swiper-button-next-c-inner span,
.categories-tab-carousel .swiper-button-prev-c-inner span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.categories-tab-carousel .swiper-button-next-c-inner span svg path,
.categories-tab-carousel .swiper-button-prev-c-inner span svg path {
  fill: #000;
}
.categories-tab-carousel .swiper-button-next-c-inner span {
  transform: rotate(-90deg);
}
.categories-tab-carousel .swiper-button-prev-c-inner span {
  transform: rotate(90deg);
}
.c-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  color: #fff;
}
.categories-tab-carousel .c-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.categories-tab-carousel .c-inner {
  width: 100%;
  height: 354px !important;
  background: red;
}
.swiper-pagination-c-inner-right {
  position: static;
  margin-top: 11px;
  display: flex;
  justify-content: center;
}
.swiper-pagination-c-inner-right .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  background: #f0f0f0;
  opacity: 1;
}
.swiper-pagination-c-inner-right .swiper-pagination-bullet-active {
  width: 20px;
  height: 11px;
  background: #00b2a9;
  border-radius: 46.2px;
}
</style>
