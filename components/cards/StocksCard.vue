<template lang="html">
  <div
    class="stocks-card"
    v-if="promotion?.slug"
    @click="$router.push(localePath(`/stock/${promotion?.slug}`))"
  >
    <div class="stocks-card-img">
      <img v-if="promotion?.md_banner" :src="promotion?.md_banner" alt="" />
      <img class="empty-img" v-else src="../../assets/images/empty-img.png" alt="" />
    </div>

    <div class="stocks-card-body">
      <span>
        <div
          class="stocks-card-type"
          v-if="promotion?.short_name"
          :style="`background: linear-gradient(250deg, ${promotion.short_name_last_color} 0%, ${promotion.short_name_first_color} 100%);color: ${promotion.short_name_text_color}`"
        >
          <span v-html="promotion?.short_name_icon_svg"></span>
          <p>{{ promotion?.short_name }}</p>
        </div></span
      >

      <h2>{{ promotion?.product_card_text }}</h2>

      <!-- <p>02 maydan 02 iyungacha</p> -->
      <p>{{ promotion?.start_date }} {{ promotion?.end_date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["typeStatus", "promotion"],
};
</script>
<style lang="css">

.stocks-card {
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 14px 26px rgba(0, 0, 0, 0.03);
  border-radius: 17.0888px;
  padding: 20px;
  transition: 0.3s ease-out;
}

.stocks-card:hover .stocks-card-img img {
  transform: scale(1.1);
}

.stocks-card-img {
  height: 292px;
  width: 100%;
  border-radius: 17.0888px;
  overflow: hidden;
}

.stocks-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-out;
}

.stocks-card-body {
  margin-top: 13px;
  display: flex;
  flex-direction: column;
}

.stocks-card-body h2 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  height: 52px;
  display: flex;
  align-items: center;
  color: #1c1f22;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  cursor: pointer;
}

.stocks-card-body h2:hover {
  color: var(--color_dark_green);
}

.stocks-card-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: 7px;
}

.stocks-card-type {
  border-radius: 5px;
  transform: matrix(1, 0, -0.24, 0.97, 0, 0);
  display: inline-flex;
  align-items: center;
  padding: 1px 15px;
  margin-bottom: 9px;
  max-width: 50%;
  max-height: 19px;
}
.stocks-card-type p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  transform: matrix(1, 0, 0.24, 0.97, 0, 0);
  margin-top: 0;
}
.stocks-card-type span {
  transform: matrix(1, 0, 0.24, 0.97, 0, 0);
}
.stocks-card-type span svg {
  margin-right: 6px;
  width: 10px;
  height: 10px;
}
.stocks-card-type-new {
  /* background: #09454f;
  color: #fff; */
}

.stocks-card-type-seasonal {
  background: radial-gradient(98.96% 220.15% at 98.96% 100%, #ffdd6a 0%, #fbc100 100%);
  color: #ff3a3a;
}
.empty-img {
  object-fit: contain !important;
}
@media (max-width: 576px) {
  .stocks-card {
    padding: 16px;
  }
  .stocks-card-img {
    height: 270px;
  }
  .stocks-card-type p {
    font-size: 11px;
  }
  .stocks-card-body h2 {
    font-size: 16.721px;
    font-weight: 600;
    line-height: 23.811px;
  }
  .stocks-card-body p {
    font-size: 13.005px;
    font-weight: 400;
    line-height: 15.874px;
  }
}
</style>
