<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link class="disabled" :to="localePath('/')">
          Дўконларда мавжудлиги
        </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <div class="d-flex align-items-end">
          <MainTitle :title="`Дўконларда мавжудлиги`" />
          <span class="d-flex align-items-end">{{ branches?.length }} ta dokon</span>
        </div>
      </div>
      <div class="stores-table">
        <div class="stores-head">
          <p>Manzil</p>
          <p>Иш тартиби</p>
          <p>Телефон</p>
        </div>
        <div class="stores-body">
          <div class="stores-body-row" v-for="branch in branches" :key="branch?.id">
            <span>
              <span v-html="location"></span>
              <h6>
                {{ branch?.name }}
              </h6>
            </span>
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
              >Ежедневно {{ branch?.work_time }}
            </p>
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
                    d="M14.3871 2.72659C18.1921 2.72659 21.2761 5.81059 21.2761 9.61559M14.3871 6.26659C16.2361 6.26659 17.7361 7.76559 17.7361 9.61559M9.60611 14.3666C10.5061 15.2296 11.5611 15.9316 12.7271 16.4296L13.2461 16.6506L14.8411 15.0306C15.2371 14.6286 15.8101 14.4546 16.3631 14.5706L20.2271 15.3796C20.8811 15.5186 21.3481 16.0956 21.3481 16.7636V19.5456C21.3481 20.5406 20.5421 21.3466 19.5471 21.3466H18.6921C14.7581 21.3466 10.8761 20.0436 7.94011 17.4256C7.69811 17.2106 7.46311 16.9876 7.23411 16.7596L7.27111 16.7966C7.04211 16.5676 6.82011 16.3326 6.60511 16.0906C3.98611 13.1556 2.68311 9.27359 2.68311 5.33959V4.48459C2.68311 3.48959 3.48911 2.68359 4.48411 2.68359H7.26611C7.93411 2.68359 8.51111 3.15059 8.6501 3.80459L9.46011 7.66859C9.57511 8.22059 9.40211 8.79459 9.00011 9.19059L7.38011 10.7856L7.60111 11.3046C8.09911 12.4696 8.74211 13.4666 9.60611 14.3666Z"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
              >{{ branch?.phone_number }}
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
    const branchesData = await store.dispatch("fetchBranches/getBranches", {
      headers: {
        lang: i18n.locale,
      },
    });
    const branches = branchesData.branches;
    console.log(branches);
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
  grid-template-columns: 2fr 1fr 1fr;
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
.stores-body-row > span {
  display: flex;
  gap: 24px;
}
.stores-body-row p {
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
.stores-body-row p span {
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
</style>
