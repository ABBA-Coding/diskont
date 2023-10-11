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
      <button @click="visibleOc = true">
        {{ $store.state.translations["main.d-banner-contact"] }}
      </button>
      <div class="cursor-pointer" @click="$router.push(localePath('/info/trade-nation'))">
        {{ $store.state.translations["main.d-banner-btn"] }}
      </div>
    </div>
    <a-modal
      v-model="visibleOc"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkName"
    >
      <div class="vmodal-header auth-modal oc-modal-header">
        <h5>{{ $store.state.translations["main.d-banner-contact"] }}</h5>
        <span @click="handleOkName"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.9958 1.98438L2.00391 17.9762"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0003 17.9861L1.99512 1.97754"
              stroke="#09454f"
              stroke-width="3.28586"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></span>
      </div>

      <a :href="`tel:${$store.state.siteInfo?.phone_number}`">
        <Transition name="oc-bounce">
          <div class="oc-product-call">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M30.0367 11.4363C29.045 11.2531 28.1342 11.886 27.9454 12.8541C27.7565 13.8222 28.3914 14.7674 29.3562 14.9568C32.2609 15.5231 34.5038 17.7716 35.0723 20.6862V20.6883C35.2341 21.5273 35.9727 22.1373 36.8234 22.1373C36.9375 22.1373 37.0516 22.1269 37.1678 22.1061C38.1326 21.9125 38.7675 20.9694 38.5787 19.9992C37.7301 15.646 34.3793 12.2837 30.0367 11.4363Z"
                  fill="#09454f"
                />
                <path
                  d="M29.9064 4.18254C29.4416 4.11592 28.9748 4.25332 28.6034 4.54895C28.2217 4.84875 27.9831 5.28178 27.9312 5.76686C27.8212 6.74744 28.5287 7.63433 29.508 7.74467C36.2615 8.49832 41.5107 13.7593 42.2701 20.5338C42.3718 21.4415 43.1332 22.1265 44.042 22.1265C44.1104 22.1265 44.1768 22.1223 44.2453 22.114C44.7204 22.0619 45.1437 21.8267 45.4425 21.4519C45.7392 21.0772 45.874 20.6108 45.8201 20.1341C44.874 11.6816 38.3321 5.12147 29.9064 4.18254Z"
                  fill="#09454f"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9841 27.0258C31.2947 35.3341 33.18 25.7223 38.4714 31.01C43.5727 36.1099 46.5047 37.1317 40.0414 43.5932C39.2318 44.2438 34.088 52.0714 16.0109 33.9993C-2.06844 15.925 5.7546 10.7759 6.40541 9.96656C12.8844 3.48718 13.8885 6.43621 18.9898 11.5361C24.2812 16.826 14.6735 18.7175 22.9841 27.0258Z"
                  fill="#09454f"
                /></svg
            ></span>
            <div class="call-number">
              <p>{{ $store.state.translations["main.call-centre"] }}:</p>
              <a :href="`tel:${$store.state.siteInfo?.phone_number}`">
                <h4>
                  +{{
                    `${$store.state.siteInfo?.phone_number}`
                      .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                      ?.filter((item, index) => index != 0)
                      .join(" ")
                  }}
                </h4>
              </a>
            </div>
          </div>
        </Transition>
      </a>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleOc: false,
    };
  },
  methods: {
    handleOkName() {
      this.visibleOc = false;
    },
  },
};
</script>
<style lang="css">
.discont-banner {
  background-image: url(../assets/images/dicoin-banner.png);
  background-size: cover;
  /* background-position: ; */
  overflow: hidden;
  height: 329px;
  /* display: flex; */
  flex-direction: column;
  padding: 36px;
  border-radius: 16px;
  /* background: linear-gradient(90deg, #09454f 0%, #068f96 100%); */
  justify-content: space-between;
  position: relative;
  display: none;

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
.discont-banner-footer button,
.discont-banner-footer div {
  padding: 10px 24px;
  font-family: var(--SB_500);
  font-style: normal;
  border-radius: 11.0445px;
  font-weight: 500;
  font-size: 13.8056px;
  line-height: 17px;
  display: flex;
}
.discont-banner-footer {
  display: flex;
  gap: 28px;
}
.discont-banner-footer button:first-child {
  color: #333c4c;
  background: #fff;
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
