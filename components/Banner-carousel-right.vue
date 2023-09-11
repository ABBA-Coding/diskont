<template lang="html">
  <div class="banner-carousel-right">
    <div class="flex items-center justify-center">
      <div
        class="swiper-banner-right mySwiper2 banner-carousel-right-box"
        style="overflow: hidden"
      >
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
      </div>
      <div class="swiper-pagination-banner-right"></div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  mounted() {
    const swiper = new Swiper(".swiper-banner-right", {
      effect: "flip",
      flipEffect: {
        slideShadows: false,
      },
      spaceBetween: 16,

      modules: [Navigation, Pagination, Autoplay],
      pagination: false,
      autoplay: {
        delay: 5000,
      },
      speed: 1000,
      pagination: {
        el: ".swiper-pagination-banner-right",
        type: "bullets",
        clickable: true,
      },
      navigation: false,
    });
  },
};
</script>
<style>
.banner-carousel-right {
  position: relative;
  overflow: hidden;
}
.banner-carousel-right .swiper-button-next-banner,
.banner-carousel-right .swiper-button-prev-banner {
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
.swiper-banner-right {
  border-radius: 16px;
}
.banner-carousel-right .swiper-button-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.banner-carousel-right .swiper-button-next-banner {
  right: 12px;
}
.banner-carousel-right .swiper-button-prev-banner {
  left: 12px;
}
.banner-carousel-right .swiper-button-next-banner span,
.banner-carousel-right .swiper-button-prev-banner span {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-carousel-right .swiper-button-next-banner span {
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
.banner-carousel-right .banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-carousel-right .banner {
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
.banner-carousel-right-box {
  height: 354px;
}
@media screen and (max-width: 1600px) {
  .banner-carousel-right-box {
    height: 278px !important;
  }
  .day-product-card-head {
    height: 40px !important;
  }
  .day-product-card-body {
    padding: 20px !important;
  }
  .day-product-card-left h1 {
    font-size: 24px !important;
    line-height: 120% !important;
    margin-bottom: 12px !important;
  }
  .day-product-card-discont p {
    font-size: 12px !important;
  }
  .day-product-card-discont div span {
    font-size: 38px !important;
  }
  .day-product-card-discont div {
    width: 90px !important;
    height: 44px !important;
  }
  .day-product-card-discont {
    margin-bottom: 12px !important;
  }
  .day-product-card-left span {
    font-size: 12px !important;
  }
  .day-product-card {
    height: 100% !important;
  }
  .day-product-card-right img {
    top: 50% !important;
    transform: translateY(-60%) rotate(-20deg) !important;
  }
}
@media (max-width: 576px) {
  .banner-carousel-right-box {
    height: 140px;
  }
}
</style>
