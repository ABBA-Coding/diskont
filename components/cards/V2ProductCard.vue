<template lang="html">
  <a :href="img?.link" class="card-link">
    <div class="v2-product-card" :style="`background-image: url(${img?.md_img})`">
      <div
        class="v2-product-card-title d-flex align-items-center justify-content-start w-100"
      >
        <!-- <h4>Samsung QLED TV 48” Full</h4> -->
      </div>
      <div class="v2-product-card-img">
        <!-- <nuxt-img format="webp" src="/i 1.png" alt="" /> -->
      </div>
      <a :href="img?.link">
        <div class="v2-product-card-btns">
          <div>{{ $store.state.translations["main.buy-now"] }}</div>
        </div>
      </a>
    </div>
  </a>
</template>
<script>
export default {
  name: "V2ProductCard",
  props: ["variant", "img"],
};
</script>
<style lang="css">
.card-link {
  height: 100%;
  width: 100%;
}
.yellow-variant {
  background: radial-gradient(98.96% 220.15% at 98.96% 100%, #ffdd6a 0%, #fbc100 100%);
}
.green-variant {
  background: linear-gradient(90deg, #0f5561 0%, #068f96 100%);
}
.v2-product-card {
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* min-height: 485px; */
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: inherit;
}
.v2-product-card-img {
  height: 60%;
}
.v2-product-card-img img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.v2-product-card-btns {
  display: flex;
  flex-direction: column;
}
.v2-product-card-btns div {
  background: #ffffff;
  border-radius: 8px;
  padding-top: 13px;
  padding-bottom: 13px;
  cursor: pointer;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;
}
.green-variant .v2-product-card-title h4 {
  color: #fff;
}
.v2-product-card-title h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}
</style>
