<template lang="html">
  <div class="v-product-card">
    <div class="v-product-card-img">
      <img src="../../assets/images/i 1.png" alt="" />
    </div>
    <div
      class="v-product-card-title d-flex align-items-center justify-content-center w-100"
    >
      <h4>Headphones</h4>
    </div>
    <div class="v-product-card-btns">
      <div>Barcha quloqchinlar</div>
      <div>ALL for Gamers</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.v-product-card {
  background: #fcc717;
  border-radius: 15.1159px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.v-product-card-img {
  height: 60%;
}
.v-product-card-img img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.v-product-card-btns {
  display: flex;
  flex-direction: column;
}
.v-product-card-btns div {
  border-radius: 22px;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #09454f;
  cursor: pointer;
}

.v-product-card-title h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 590;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.v-product-card-btns div:first-child {
  background: #ffffff;
  border: 1px solid #ffffff;
  /* color: #09454f; */
  margin-bottom: 14px;
}
.v-product-card-btns div:last-child {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 22px;
  /* color: #fff; */
}
</style>
