<template lang="html">
  <div class="categories-application-banner">
    <div class="categories-application-banner-info">
      <h2>{{ $store.state.translations["main.app-title"] }}</h2>
      <p>{{ $store.state.translations["main.app-subtitle"] }}</p>
      <div class="app-btn-container">
        <div class="flexer">
          <span class="app-btns"
            ><img src="../assets/images/Store ggp black.png" alt=""
          /></span>
          <span class="app-btns"
            ><img src="../assets/images/Store as black.png" alt=""
          /></span>
        </div>
        <div class="div">
          <img class="app-qr-code" src="../assets/images/image 34.png" alt="" />
          <p>{{ $store.state.translations["main.app-text"] }}</p>
        </div>
      </div>
    </div>
    <div class="categories-application-banner-images">
      <div class="categories-application-banner-container">
        <img src="../assets/images/iPhone 14 Pro Mockup (1)@3x 1.png" alt="" />
        <img src="../assets/images/ff 1.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.categories-application-banner {
  background: #f9f9f9;
  border-radius: 24px;
  padding: 72px 96px;
  display: flex;
}
.categories-application-banner-info h2 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  color: #030303;
}
.categories-application-banner-info p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #020105;
  margin-top: 16px;
}

.app-btn-container {
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.app-btns:first-child {
  margin-right: 24px;
}
.app-qr-code {
  margin-left: 75px;
}
.app-btn-container p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #727474;
  margin-left: 20px;
}
.categories-application-banner-info {
  width: 60%;
  position: relative;
}
.categories-application-banner-images {
  display: flex;
  justify-content: center;
  width: 40%;
}
.categories-application-banner-container {
  position: relative;
  max-width: 33%;
  height: 100%;
  width: 100%;
}
.categories-application-banner-container img {
  position: absolute;
}
.categories-application-banner-container img:first-child {
  top: -136px;
  left: -152px;
}
.categories-application-banner-container img:last-child {
  top: -180px;
  right: -229px;
}
.app-btn-container .flexer {
  display: flex;
  align-items: center;
  gap: 20px;
}
.app-btns {
  margin-right: 0 !important;
}
.app-qr-code {
  margin: 0 !important;
}
.app-btn-container .div p {
  margin: 0;
}
.app-btn-container .div {
  display: flex;
  align-items: center;
  gap: 18px;
}
@media screen and (max-width: 1600px) {
  .categories-application-banner {
    padding: 32px 40px;
  }
  .categories-application-banner-info h2 {
    font-size: 40px;
    line-height: 56px;
  }
  .categories-application-banner-info p {
    margin-top: 10px;
    font-size: 18px;
  }
  .app-btn-container {
    gap: 60px;
  }
  .app-btn-container p {
    font-size: 16px;
    line-height: 150%;
  }
  .categories-application-banner-container img:first-child,
  .categories-application-banner-container img:last-child {
    width: 250px;
    top: 50%;
    transform: translateY(-50%);
  }
  .categories-application-banner-container img:first-child {
    left: -100px;
  }
  .categories-application-banner-container img:last-child {
    right: -150px;
    top: 45%;
  }
}
@media screen and (max-width: 1024px) {
  .categories-application-banner {
    padding: 16px;
  }
  .categories-application-banner-info h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .categories-application-banner-info {
    width: 100%;
  }
  .categories-application-banner-info p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-top: 6px;
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
}
</style>
