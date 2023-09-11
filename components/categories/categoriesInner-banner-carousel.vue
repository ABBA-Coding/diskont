<template lang="html">
  <div class="categories-inner-carousel">
    <div class="flex items-center justify-center">
      <div class="swiper-categories-inner mySwiper2">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
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
    return {};
  },
  mounted() {
    const swiper = new Swiper(".swiper-categories-inner", {
      slidesPerView: 1,
      spaceBetween: 16,
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      modules: [EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 10000,
      },
      speed: 1000,
      navigation: false,
      breakpoints: {
        1024: {
          slidesPerView: 1.2,
          spaceBetween: 24,
        },
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
};
</script>
<style>
.categories-inner-carousel {
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;
}
.categories-inner-carousel::after {
  position: absolute;
  content: "";
  width: 180px;
  height: 100%;
  right: -90px;
  top: 0;
  z-index: 1;
  background: linear-gradient(270deg, #ffffff 66.07%, rgba(255, 255, 255, 0) 100%);
}
.categories-inner-carousel .swiper-button-next-banner,
.categories-inner-carousel .swiper-button-prev-banner {
  position: absolute;
  border-radius: 50%;
  top: 170px;
  z-index: 100;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.48);
  cursor: pointer;
}
.categories-inner-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.categories-inner-carousel .swiper-button-next-banner {
  right: 12px;
}
.categories-inner-carousel .swiper-button-prev-banner {
  left: 12px;
}
.categories-inner-carousel .swiper-button-next-banner span,
.categories-inner-carousel .swiper-button-prev-banner span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.categories-inner-carousel .swiper-button-next-banner span {
  transform: rotate(180deg);
}
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
  color: #fff;
}
.categories-inner-carousel .banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.categories-inner-carousel .banner {
  width: 100%;
  height: 354px !important;
  background: red;
}
.swiper-pagination-banner-right {
  position: static;
  margin-top: 11px;
  display: flex;
  justify-content: center;
}
.swiper-pagination-banner-right .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  background: #f0f0f0;
  opacity: 1;
}
.swiper-pagination-banner-right .swiper-pagination-bullet-active {
  width: 20px;
  height: 11px;
  background: #00b2a9;
  border-radius: 46.2px;
}
</style>
