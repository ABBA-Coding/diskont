<template lang="html">
  <div class="container_xl">
    <div class="brand-carousel">
      <div class="flex items-center justify-center">
        <div class="brand-swiper">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
        </div>
        <div class="swiper-button-prev-brand"><span v-html="arrow"></span></div>
        <div class="swiper-button-next-brand"><span v-html="arrow"></span></div>
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
  data() {
    return {
      arrow: require("../assets/svg/carousel-arrow.svg?raw"),
    };
  },
  mounted() {
    const swiper = new Swiper(`.brand-swiper`, {
      slidesPerView: 2,
      spaceBetween: 14,
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
          slidesPerView: 6,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-brand",
        prevEl: ".swiper-button-prev-brand",
      },
    });
  },
};
</script>
<style>
.brand-carousel {
  position: relative;
}
.brand-carousel .swiper-button-prev-brand,
.brand-carousel .swiper-button-next-brand {
  position: absolute;
  border-radius: 50%;
  top: 25px;
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
.brand-carousel .swiper-button-prev-brand svg,
.brand-carousel .swiper-button-next-brand svg {
  z-index: 1;
  width: 8px;
  height: 14px;
}
.brand-carousel .swiper-button-prev-brand svg path,
.brand-carousel .swiper-button-next-brand svg path {
  fill: #000;
}
.brand-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
  opacity: 0;
}
.swiper-button-prev-brand {
  left: -28px;
}
.swiper-button-next-brand {
  right: -28px;
}
.swiper-button-prev-brand span,
.swiper-button-next-brand span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-prev-brand span {
  transform: rotate(180deg);
}

.brand-swiper {
  overflow: hidden;
}
</style>
