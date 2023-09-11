<template lang="html">
  <div class="posts container_xl">
    <div class="posts-carousel">
      <div class="d-flex align-items-center">
        <div class="posts-swiper">
          <div class="swiper-wrapper">
            <slot></slot>
          </div>
        </div>
        <div class="swiper-button-prev-posts"><span v-html="arrow"></span></div>
        <div class="swiper-button-next-posts"><span v-html="arrow"></span></div>
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
    const swiper = new Swiper(`.posts-swiper`, {
      slidesPerView: 1.3,
      spaceBetween: 16,
      // effect: "flip",
      // flipEffect: {
      //   slideShadows: false,
      // },
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      navigation: {
        nextEl: ".swiper-button-next-posts",
        prevEl: ".swiper-button-prev-posts",
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
    swiper.on("activeIndexChange", (swiper) => {});
  },
};
</script>
<style>
.posts-carousel {
  position: relative;
}
/* .swiper-slide {
  width: auto !important;
} */
.posts-carousel .swiper-button-prev-posts,
.posts-carousel .swiper-button-next-posts {
  position: absolute;
  border-radius: 50%;
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
.posts-carousel .swiper-button-prev-posts svg,
.posts-carousel .swiper-button-next-posts svg {
  z-index: 1;
  width: 8px;
  height: 14px;
}
.posts-carousel .swiper-button-prev-posts svg path,
.posts-carousel .swiper-button-next-posts svg path {
  fill: #000;
}
.posts-carousel .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
  opacity: 0;
}
.swiper-button-prev-posts {
  left: -28px;
}
.swiper-button-next-posts {
  right: -28px;
}
.swiper-button-prev-posts span,
.swiper-button-next-posts span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-prev-posts span {
  transform: rotate(180deg);
}

.posts-swiper {
  overflow: hidden;
  width: 100%;
}
</style>
