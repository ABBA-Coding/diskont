<template lang="html">
  <div class="container_xl">
    <div class="category-carousel">
      <div class="d-flex align-items-center">
        <div :class="`product-swiper swiper-category`">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
        </div>
        <div class="swiper-button-prev-category">
          <span v-html="arrow"></span>
        </div>
        <div class="swiper-button-next-category">
          <span v-html="arrow"></span>
        </div>
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
    const swiper = new Swiper(".swiper-category", {
      slidesPerView: 3,
      spaceBetween: 12,
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      navigation: {
        nextEl: ".swiper-button-next-category",
        prevEl: ".swiper-button-prev-category",
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 16,
          effect: "flip",
          flipEffect: {
            slideShadows: false,
          },
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
};
</script>
<style>
.category-carousel {
  position: relative;
}
.category-carousel .swiper-button-prev-category,
.category-carousel .swiper-button-next-category {
  position: absolute;
  border-radius: 50%;
  /* top: 208px; */
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
.category-carousel .swiper-button-prev-category svg,
.category-carousel .swiper-button-next-category svg {
  z-index: 1;
  width: 8px;
  height: 14px;
}
.category-carousel .swiper-button-prev-category svg path,
.category-carousel .swiper-button-next-category svg path {
  fill: #000;
}
.category-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
  opacity: 0;
}
.swiper-button-prev-category {
  left: -28px;
}
.swiper-button-next-category {
  right: -28px;
}
.swiper-button-prev-category span,
.swiper-button-next-category span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-prev-category span {
  transform: rotate(180deg);
}

.product-swiper {
  overflow: hidden;
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .swiper-button-next-category,
  .swiper-button-prev-category {
    display: none !important;
  }
}
</style>
