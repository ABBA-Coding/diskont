<template lang="html">
  <div class="comparison-card">
    <div class="comparison-card-head">
      <span
        class="comparison-delete"
        @click="
          $store.commit('addToStore', {
            id: product?.id,
            name: 'comparison',
          })
        "
        v-html="x"
      ></span>
      <button
        class="m-comp-delete"
        @click="
          $store.commit('addToStore', {
            id: product?.id,
            name: 'comparison',
          })
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
        >
          <path
            d="M14.1042 6.88965C14.1042 6.88965 13.6517 12.5021 13.3892 14.8663C13.2642 15.9955 12.5667 16.6571 11.4242 16.678C9.24999 16.7171 7.07332 16.7196 4.89999 16.6738C3.80082 16.6513 3.11499 15.9813 2.99249 14.8721C2.72832 12.4871 2.27832 6.88965 2.27832 6.88965"
            stroke="#727474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.2567 4.19987H1.125"
            stroke="#727474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5335 4.19949C11.8793 4.19949 11.316 3.73699 11.1877 3.09616L10.9852 2.08283C10.8602 1.61533 10.4368 1.29199 9.95432 1.29199H6.42682C5.94432 1.29199 5.52099 1.61533 5.39599 2.08283L5.19349 3.09616C5.06516 3.73699 4.50182 4.19949 3.84766 4.19949"
            stroke="#727474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="m-comp-like"
        @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
      >
        <svg
          v-if="$store.state.like.includes(product?.id)"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5264 0.333008C12.6827 0.333008 11.8764 0.532906 11.1298 0.927189C10.6216 1.19553 10.1547 1.55206 9.75416 1.97507C9.35355 1.55206 8.88672 1.19553 8.37851 0.927189C7.63191 0.532906 6.82557 0.333008 5.9819 0.333008C3.07335 0.333008 0.707031 2.77879 0.707031 5.78506C0.707031 7.91434 1.79504 10.1758 3.94079 12.5067C5.73238 14.4529 7.92585 16.0752 9.45044 17.0935L9.75416 17.2964L10.0579 17.0935C11.5825 16.0753 13.7759 14.4529 15.5676 12.5067C17.7133 10.1758 18.8013 7.91434 18.8013 5.78506C18.8013 2.77879 16.435 0.333008 13.5264 0.333008ZM14.7567 11.7093C13.1555 13.4486 11.2052 14.9272 9.75416 15.9169C8.30315 14.9272 6.35277 13.4486 4.75164 11.7093C2.81048 9.60071 1.82626 7.60751 1.82626 5.78506C1.82626 3.41666 3.69049 1.48983 5.98194 1.48983C7.30117 1.48983 8.51304 2.11617 9.30673 3.2082L9.75416 3.82383L10.2016 3.2082C10.9953 2.11617 12.2071 1.48983 13.5264 1.48983C15.8178 1.48983 17.6821 3.41666 17.6821 5.78506C17.6821 7.60751 16.6978 9.60071 14.7567 11.7093Z"
            fill="#FF2525"
          ></path>
          <path
            d="M14.7567 11.7093C13.1555 13.4486 11.2052 14.9272 9.75416 15.9169C8.30315 14.9272 6.35277 13.4486 4.75164 11.7093C2.81048 9.60071 1.82626 7.60751 1.82626 5.78506C1.82626 3.41666 3.69049 1.48983 5.98194 1.48983C7.30117 1.48983 8.51304 2.11617 9.30673 3.2082L9.75416 3.82383L10.2016 3.2082C10.9953 2.11617 12.2071 1.48983 13.5264 1.48983C15.8178 1.48983 17.6821 3.41666 17.6821 5.78506C17.6821 7.60751 16.6978 9.60071 14.7567 11.7093Z"
            fill="#FF2525"
          ></path>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.80052 15.3781C6.99167 14.2649 5.30893 12.9547 3.78242 11.471C2.70921 10.4025 1.89218 9.09981 1.39392 7.66282C0.497294 4.87525 1.54462 1.68402 4.47561 0.7396C6.01602 0.243696 7.69838 0.527127 8.99642 1.50123C10.295 0.528313 11.9767 0.244981 13.5172 0.7396C16.4482 1.68402 17.5031 4.87525 16.6064 7.66282C16.1082 9.09981 15.2912 10.4025 14.218 11.471C12.6914 12.9547 11.0087 14.2649 9.19985 15.3781L9.00395 15.5L8.80052 15.3781Z"
            stroke="#727474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1162 3.87793C13.004 4.16151 13.6347 4.95851 13.7136 5.89625"
            stroke="#727474"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="comparison-card-head-img">
        <img :src="product?.images[0]?.md_img" alt="" />
      </div>
      <div class="comparison-card-head-body">
        <h5>{{ product?.info?.name }}</h5>
        <h4>
          {{ `${product?.real_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
          {{ $store.state.translations["main.som"] }}
        </h4>
        <p><span v-html="star"></span>{{ product?.info?.stars }}</p>
      </div>
    </div>
    <div class="comparison-card-body">
      <div v-for="characteristicsGroup in comparison">
        <div
          class="comparison-card-characteristic"
          v-for="item in characteristicsGroup?.characteristics"
        >
          <p>
            {{ item?.name }}
            <span>{{
              item?.products[indexId] ? item?.products[indexId]?.name : "-"
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", "comparison", "indexId"],
  data() {
    return {
      star: require("../../assets/svg/product-star.svg?raw"),
      x: require("../../assets/svg/comparisonX.svg?raw"),
    };
  },
};
</script>
<style lang="css">
.comparison-card {
  display: flex;
  flex-direction: column;
  max-width: 390px;
}
.comparison-card-head {
  position: relative;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.comparison-card-head-img {
  height: 140px;
  margin-top: 10px;
}
.comparison-card-head-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.comparison-delete {
  position: absolute;
  top: 20px;
  right: 22px;
  cursor: pointer;
}
.comparison-card-head-body {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.comparison-card-head-body h5 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #020105;
  max-width: 294px;
  margin-top: 31px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 48px;
}
.comparison-card-head-body h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #020105;
  max-width: 294px;
  margin-top: 16px;
}
.comparison-card-head-body p svg path {
  fill: #f6c65c;
}
.comparison-card-head-body p svg {
  margin-right: 5px;
}
.comparison-card-head-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 12px;
  display: flex;
  align-items: center;
  color: #020105;
  margin-top: 17px;
}
.comparison-card-body {
  border: 1px solid #ebebeb;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 17px 19px;
}
.comparison-card-characteristic {
  padding-bottom: 16px;
  margin-bottom: 22px;
  border-bottom: 1px solid #ebebeb;
}

.comparison-card-characteristic p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
  display: flex;
  flex-direction: column;
}
.comparison-card-characteristic p span {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #020105;
  margin-top: 4px;
}
.comparison-card-characteristic:last-child {
  margin-bottom: 0;
  border-bottom: none;
}
.m-comp-delete,
.m-comp-like {
  border: none;
  background-color: transparent;
  position: absolute;
  right: 14px;
  display: none;
}
.m-comp-delete {
  bottom: 14px;
}
.m-comp-like {
  top: 14px;
}
@media (max-width: 576px) {
  .comparison-card-head-body {
    display: none;
  }
  .comparison-card-head {
    padding: 4px;
    border-radius: 4px;
    justify-content: center;
    height: 171px;
  }
  .comparison-delete {
    display: none;
  }
  .m-comp-delete,
  .m-comp-like {
    display: block;
  }
}
</style>
