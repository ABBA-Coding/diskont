<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link class="disabled" :to="localePath('/')">
          {{ $store.state.translations["product.stores-title"] }}
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="$store.state.translations['product.stores-title']" />
          <span class="d-flex align-items-end"
            >{{ branches?.length }}
            {{ $store.state.translations["product.stores-count"] }}</span
          >
        </div>
      </div>
      <div class="stores-table">
        <div class="stores-head">
          <p>{{ $store.state.translations["product.stores"] }}</p>
          <p>{{ $store.state.translations["product.work-order"] }}</p>
          <p>{{ $store.state.translations["product.address"] }}</p>
        </div>
        <div class="stores-body">
          <div class="stores-body-row" v-for="branch in branches" :key="branch?.id">
            <a target="_blank" :href="branch?.link" class="d-flex">
              <span v-html="location"></span>
              <h6>
                {{ branch?.name }}
              </h6>
            </a>
            <p>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 12H11.25C11.25 12.3228 11.4566 12.6094 11.7628 12.7115L12 12ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM14.7628 13.7115C15.1558 13.8425 15.5805 13.6301 15.7115 13.2372C15.8425 12.8442 15.6301 12.4195 15.2372 12.2885L14.7628 13.7115ZM12.75 12V7H11.25V12H12.75ZM11.7628 12.7115L14.7628 13.7115L15.2372 12.2885L12.2372 11.2885L11.7628 12.7115ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75Z"
                    fill="#666666"
                  /></svg></span
              >{{ $store.state.translations["product.stores-time-text"] }}
              {{ branch?.work_time }}
            </p>
            <p>
              {{ branch?.phone_number }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainTitle from "../components/Main-title.vue";
export default {
  data() {
    return {
      arrow: require("../assets/svg/dropdown-icon.svg?raw"),
      arrowCarousel: require("../assets/svg/Arrow - Left.svg?raw"),
      location: `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="46"
                viewBox="0 0 32 46"
                fill="none"
              >
                <path
                  d="M32 16.1C32 24.9918 16 46 16 46C16 46 0 24.9918 0 16.1C0 7.20822 7.16344 0 16 0C24.8366 0 32 7.20822 32 16.1Z"
                  fill="#09454F"
                />
                <circle cx="16" cy="16" r="13" fill="#04BABE" />
                <path
                  d="M11 11V21H18.2979C19.2798 21 20.2214 20.645 20.9157 20.0131C21.61 19.3812 22 18.5241 22 17.6304V14.3454C22 13.4582 21.6128 12.6072 20.9235 11.9799C20.2342 11.3525 19.2993 11 18.3245 11H11ZM18.2979 19.3333H12.8311V12.6908H18.3377C18.8199 12.6908 19.2823 12.8651 19.6232 13.1754C19.9641 13.4857 20.1556 13.9066 20.1556 14.3454V17.6667C20.1486 18.1119 19.9489 18.5367 19.5999 18.8488C19.2508 19.1609 18.7806 19.335 18.2913 19.3333H18.2979Z"
                  fill="#09454F"
                /></svg>`,
    };
  },
  async asyncData({ store, i18n }) {
    store.commit("loaderHandler", true);
    const branchesData = await store.dispatch("fetchBranches/getBranches", {
      headers: {
        lang: i18n.locale,
      },
    });
    // for server 
    const branches = branchesData.branches;
    setTimeout(() => {
      store.commit("loaderHandler", false);
    },0)
    return {
      branches,
    };
  },
  methods: {},

  components: { MainTitle },
};
</script>
<style lang="css">
@import "../assets/css/pages/comparison.css";
.stores-head,
.stores-body-row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 150px;
}
.stores-head {
  padding-bottom: 24px;
}
.stores-table {
  max-width: 1356px;
  margin: 0 auto;
}
.stores-head p {
  color: #969696;
  font-family: var(--SB_500);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.8px; /* 120% */
  letter-spacing: -0.24px;
}
.stores-body-row {
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 24px;
}
.stores-body-row:last-child {
  border-bottom: none;
}
.stores-body-row > span,
.stores-body-row > a {
  display: flex;
  gap: 24px;
  align-items: center;
}
.stores-body-row p,
.stores-body-row a {
  color: #666;
  font-family: var(--SB_500);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.8px; /* 120% */
  letter-spacing: -0.24px;
}
.stores-body {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.stores-body-row p span,
.stores-body-row span {
  margin-right: 12px;
}
.stores-body-row h6 {
  color: #000;
  font-family: var(--SB_500);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.8px; /* 120% */
  letter-spacing: -0.24px;
}
@media (max-width: 1024px) {
  .stores-head {
    display: none;
  }
  .stores-body-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
}
</style>
