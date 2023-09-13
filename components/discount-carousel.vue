<template lang="html">
  <div class="container_xl">
    <div class="discount-carousel">
      <div class="flex items-center justify-center">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="banner"></div>
            </div>
            <div class="swiper-slide">
              <div class="banner"></div>
            </div>
            <div class="swiper-slide">
              <div class="banner"></div>
            </div>
            <div class="swiper-slide">
              <div class="banner"></div>
            </div>
            <div class="swiper-slide">
              <div class="banner"></div>
            </div>
            <div class="swiper-slide">
              <div class="banner"></div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev-dis"><span v-html="arrow"></span></div>
        <div class="swiper-button-next-dis"><span v-html="arrow"></span></div>
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
    const swiper = new Swiper(".swiper", {
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      navigation: {
        nextEl: ".swiper-button-next-dis",
        prevEl: ".swiper-button-prev-dis",
      },
    });
    swiper.on("activeIndexChange", (swiper) => {
    });
  },
};
</script>
<style>
@import "../assets/css/components/DiscountCarousel.css";
.discount-carousel {
  position: relative;
  margin-bottom: 24px;
}
.discount-carousel .swiper-button-next-dis,
.discount-carousel .swiper-button-prev-dis {
  position: absolute;
  border-radius: 50%;
  top: 120px;
  z-index: 100;
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.discount-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.discount-carousel .swiper-button-next-dis {
  right: 12px;
}
.discount-carousel .swiper-button-prev-dis {
  left: 12px;
}
.discount-carousel .swiper-button-next-dis span,
.discount-carousel .swiper-button-prev-dis span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.discount-carousel .swiper-button-next-dis span {
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
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner {
  width: 100%;
  height: 286px;
  /* background: red; */
}
</style>
