<template lang="html">
  <div class="my-orders-card">
    <div class="my-orders-card-header">
      <div class="d-flex flex-column">
        <h4>Buyurtma #{{ order?.id }}</h4>
        <p>
          Yangilangan {{ moment(order?.updated_at).format("DD") }}
          {{ month[moment(order?.updated_at).format("M") - 1] }}
          {{ moment(order?.updated_at).format("YYYY") }} y.,
          {{ moment(order?.updated_at).format("HH:mm") }}
        </p>
      </div>
      <span
        class="orders-status"
        :class="{
          'success-order': order?.status == 'new',
          'pending-order': order?.status == 'pending',
          'returned-order': order?.status == 'returned',
          'accepted-order': order?.status == 'accepted',
          'done-order': order?.status == 'done',
        }"
        >{{
          order?.status == "new"
            ? "Yangi"
            : order?.status == "pending"
            ? "Kutilmoqda"
            : order?.status == "returned"
            ? "Qaytarildi"
            : order?.status == "accepted"
            ? "Qabul qilindi"
            : order?.status == "done"
            ? "Yetkazib berildi"
            : ""
        }}</span
      >
    </div>
    <div class="my-orders-card-body" @click="productDrop = !productDrop">
      <div class="order-products">
        <div
          class="order-product"
          v-for="product in order?.products.filter((item, index) => index == 0)"
          :key="product?.product_id"
        >
          <div class="order-product-img">
            <img :src="product?.product?.images[0]?.md_img" alt="" />
          </div>
          <div class="order-product-body">
            <p>
              {{ product?.product?.info?.name?.ru }}
            </p>
          </div>
        </div>
      </div>
      <span v-html="arrow" :class="{ rotate180: productDrop }"></span>
    </div>
    <div class="order-products" v-if="productDrop == true">
      <div
        class="order-product"
        v-for="product in order?.products.filter((item, index) => index != 0)"
        :key="product?.product_id"
      >
        <div class="order-product-img">
          <img :src="product?.product?.images[0]?.md_img" alt="" />
        </div>
        <div class="order-product-body">
          <p>
            {{ product?.product?.info?.name?.ru }}
          </p>
        </div>
      </div>
    </div>
    <div class="my-orders-card-footer">
      <div>
        <p>Buyurtma sanasi</p>
        <span>
          {{ weekDay[moment(order?.created_at).weekday()] }},
          {{ moment(order?.created_at).format("DD") }}
          {{ month[moment(order?.created_at).format("M") - 1] }}
          {{ moment(order?.created_at).format("YYYY") }} y.,
          {{ moment(order?.created_at).format("HH:mm") }}</span
        >
      </div>
      <div>
        <p>Yetkazib berish turi</p>
        <span>{{ pickupMethod[order?.delivery_method] }}</span>
      </div>
      <div>
        <p>To'lov turi</p>
        <span>{{ order?.payment_method }}</span>
      </div>

      <div>
        <p>Buyurtma narxi</p>
        <span>{{ `${order?.amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} сум</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["order"],
  data() {
    return {
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      productDrop: false,
      pickupMethod: {
        pickup: "Do'kondan olib ketish",
        courier: "Yetkazib berish",
      },
      weekDay: [
        "yakshanba",
        "dushanba",
        "seshanba",
        "chorshanba",
        "payshanba",
        "juma",
        "shanba",
      ],
      month: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr",
      ],
    };
  },
  methods: {
    moment,
  },
};
</script>
<style lang="css">
.my-orders-card {
  padding: 22px;
  border: 0.5px solid #f1f1f1;
  border-radius: 16px;
}
.my-orders-card-header {
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;
}
.my-orders-card-header h4 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}
.orders-status {
  padding: 14px 16px;
  padding-left: 34px;
  border-radius: 4px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  position: relative;
  display: flex;
  align-items: center;
  max-height: 42px;
}
.success-order {
  color: #09454f;
  background: #fafafa;
}
.success-order::after {
  background: #09454f;
}
.done-order::after {
  background: #18b3bd;
}
.pending-order {
  color: #fbc100;
  background: #fafafa;
}
.pending-order::after {
  background-color: #fbc100;
}
.canceled-order {
  color: #ff2e2e;
  background-color: #fafafa;
}
.canceled-order::after {
  background: #ff2e2e;
}
.returned-order {
  color: #ff2e2e;
  background-color: #fafafa;
}
.returned-order::after {
  background: #ff2e2e;
}
.accepted-order {
  color: #3699ff;
  background-color: #e1f0ff;
}
.done-order {
  background: #c9f7f5;
  color: #18b3bd;
}
.accepted-order::after {
  background: #3699ff;
}
.orders-status::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  left: 16px;
}
.my-orders-card-header p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727474;
  margin-top: 10px;
}
.my-orders-card-body {
  display: flex;
  justify-content: space-between;
}

.my-orders-card-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 48px;
}
.my-orders-card-footer div p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #727474;
}
.my-orders-card-footer div span {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-top: 4px;
  text-transform: capitalize;
}
.my-orders-card-body > span svg {
  width: 20px;
  height: 10px;
}
.my-orders-card-body > span {
  display: flex;
  align-items: center;
  margin-right: 4px;
}
.order-product {
  display: grid;
  grid-template-columns: 80px auto;
}
.my-orders-card-body {
  margin-bottom: 32px;
}
.order-products {
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
}
.order-product-img {
  width: 80px;
  height: 80px;
  background: rgba(217, 217, 217, 0.2);
  border-radius: 10px;
}
.order-product-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.order-product-body {
  padding-left: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.order-product-body p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: rgba(114, 116, 116, 0.6);
}
</style>
