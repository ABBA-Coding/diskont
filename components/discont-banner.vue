<template lang="html">
  <div class="discont-banner">
    <img class="glimpse" src="@/assets/coin.svg" alt="" />
    <div>
      <div class="discont-banner-header d-flex align-items-end">
        <h4>{{ $store.state.translations["main.d-banner-title"] }}</h4>
        <p>{{ $store.state.translations["main.d-banner-subtitle"] }}</p>
      </div>
      <div class="discont-banner-body">
        <p>
          {{ $store.state.translations["main.d-banner-text"] }}
        </p>
      </div>
    </div>
    <div class="discont-banner-footer">
      <div class="cursor-pointer">
        {{ $store.state.translations["main.d-banner-contact"] }}
      </div>
      <div class="cursor-pointer" @click="$router.push(localePath('/info/trade-nation'))">
        {{ $store.state.translations["main.d-banner-btn"] }}
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.discont-banner {
  background-image: url(../assets/images/dicoin-banner.png);
  background-size: cover;
  /* background-position: ; */
  overflow: hidden;
  height: 329px;
  display: flex;
  flex-direction: column;
  padding: 36px;
  border-radius: 16px;
  /* background: linear-gradient(90deg, #09454f 0%, #068f96 100%); */
  justify-content: space-between;
  position: relative;
}
.discont-banner-header h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  margin-right: 21px;
}
.discont-banner-header p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
}
.discont-banner-body {
  width: 60%;
  margin-top: 26px;
}
.discont-banner-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
.discont-banner-footer {
  display: flex;
}
.discont-banner-footer div {
  padding: 10px 24px;
  font-family: "Inter";
  font-style: normal;
  border-radius: 11.0445px;
  font-weight: 500;
  font-size: 13.8056px;
  line-height: 17px;
}
.discont-banner-footer div:first-child {
  color: #333c4c;
  background: #fff;
  margin-right: 28px;
}
.discont-banner-footer div:last-child {
  border: 0.764706px solid #ffffff;
  background: linear-gradient(90deg, #09454f 0%, #068f96 100%);
  color: #fff;
}
.glimpse {
  display: none;
}
@media screen and (max-width: 1600px) {
  .discont-banner {
    height: 300px;
  }
  .discont-banner-body {
    margin-top: 22px;
  }
  .discont-banner-header h4 {
    line-height: 30px;
  }
  .discont-banner-body p {
    font-size: 14px;
  }
}
@media screen and (max-width: 1024px) {
  .discont-banner {
    height: auto;
    padding: 16px;
    gap: 24px;
  }
  .discont-banner-header p {
    display: none;
  }
  .discont-banner-body p {
    display: none;
  }
  .discont-banner-header h4 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    max-width: 220px;
  }
  .discont-banner-body {
    display: none;
  }
  .discont-banner-footer div:last-child {
    display: none;
  }
  .glimpse {
    display: flex;
    position: absolute;
    right: 22px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
