<template lang="html">
  <a :href="banner?.link">
    <div class="day-product-card">
      <img class="day-product-card-bg" :src="banner?.lg_img" alt="" />
      <div class="day-product-card-head">
        <h3>Kunlik chegirmalar</h3>
        <a :href="banner?.link"
          >Barchasi
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
          >
            <path
              d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928933C11.9526 0.538409 11.3195 0.538409 10.9289 0.928933C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9L18 7L1 7L1 9Z"
              fill="white"
            /></svg
        ></a>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: ["banner"],
};
</script>
<style lang="css">
.day-product-card {
  background: radial-gradient(98.96% 220.15% at 98.96% 100%, #ffdd6a 0%, #fbc100 100%);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  height: 100%;
  cursor: pointer;
}
.day-product-card-bg {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.day-product-card-head {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: radial-gradient(99.34% 7718.39% at 0.66% 3.85%, #ff3a3a 0%, #e90a0a 100%);
  position: relative;
  z-index: 10;
}
.day-product-card-head h3 {
  font-family: var(--SB_700);
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
}
.day-product-card-head a {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 510;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #ffffff;
  display: flex;
  align-items: center;
}
.day-product-card-head a svg {
  margin-left: 8px;
}
.day-product-card-body {
  padding: 24px;
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
}
.day-product-card-left h1 {
  font-family: var(--SB_700);
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
  margin-bottom: 24px;
}
.day-product-card-discont {
  margin-bottom: 24px;
}
.day-product-card-discont p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  transform: rotate(-2.69deg);
  margin-bottom: 8px;
}
.day-product-card-left span {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
}
.day-product-card-discont div {
  background: #f44832;
  transform: rotate(-2.91deg);
  width: 153px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.day-product-card-discont div span {
  font-family: var(--SB_700);
  font-style: normal;
  font-size: 55.0404px;
  line-height: 69px;
  color: #ffffff;
  transform: rotate(2.91deg);
  position: absolute;
  left: -12px;
}
.day-product-card-right {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.day-product-card-right img {
  position: absolute;
  height: 90%;
  object-fit: contain;
  transform: rotate(-20deg);
  right: -48px;
}
@media screen and (max-width: 1024px) {
  .day-product-card-head {
    height: 28px;
  }
  .day-product-card-head h3 {
    font-size: 14px;
  }
  .day-product-card-head a {
    font-size: 12px;
  }
}
</style>
