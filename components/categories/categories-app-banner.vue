<template lang="html">
  <div class="application-banner">
    <div class="application-banner-info application-banner-info-2">
      <h2>Yangi Market ilovasida buyurtma bering va bonuslarga ega bo'ling</h2>
      <p>Diskont mobil ilovasini yuklab olish</p>
      <div class="app-btn-container app-btn-container-2">
        <div class="flexer">
          <span class="app-btns"
            ><img src="../../assets/images/Store ggp.png" alt=""
          /></span>
          <span class="app-btns"
            ><img src="../../assets/images/Store as.png" alt=""
          /></span>
        </div>
        <div class="div">
          <img
            class="app-qr-code-2 m-0"
            src="../../assets/images/image 34.png"
            alt=""
          />
          <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
        </div>
      </div>
    </div>
    <div class="application-banner-images">
      <div class="application-banner-container application-banner-container-2">
        <img src="../../assets/images/app-aimg.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.application-banner {
  padding: 72px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
}
.application-banner-info h2 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: #030303;
}
.application-banner-info p {
  font-family: var(--SF_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #020105;
  margin-top: 16px;
}

.app-btn-container {
  margin-top: 24px;
  display: flex;
  align-items: center;
}

.app-btns:first-child {
  margin-right: 24px;
}
.app-qr-code {
  margin-left: 75px;
}
.app-qr-code-2 {
  margin-left: 20px;
  width: 75px;
  height: 75px;
}
.app-btn-container-2 p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #727474;
  margin-left: 20px;
}

.application-banner-info-2 {
  position: relative;
}
.application-banner-images {
  display: flex;
  justify-content: center;
}
.application-banner-container {
  position: relative;
  max-width: 33%;
  height: 100%;
  width: 100%;
}
.application-banner-container img {
  position: absolute;
}
.application-banner-container-2 img:first-child {
  bottom: -110px;
  right: 0;
}
@media screen and (max-width: 1024px) {
  .application-banner {
    padding: 16px;
    flex-direction: column;
  }
  .application-banner-info h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .application-banner-info {
    width: 100%;
  }
  .application-banner-info p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 6px;
  }
  .application-banner-container {
    display: none;
  }
  .app-btn-container {
    margin-top: 12px;
    flex-direction: column;
    align-items: flex-start;
  }
  .app-btns img {
    width: 112px;
    object-fit: contain;
  }
  .app-qr-code {
    margin: 0 !important;
  }
  .categories-application-banner-images {
    display: none;
  }
  .app-btn-container .div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .app-btn-container .flexer {
    margin-bottom: 18px;
    width: 100%;
  }
  .app-btn-container .div p {
    margin: 0;
  }
  .app-qr-code-2 {
    margin: 0;
  }
}
</style>
