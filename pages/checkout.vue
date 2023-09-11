<template lang="html">
  <div class="checkout-page">
    <div class="container_xl">
      <div class="checkout-container">
        <div class="check-form-block">
          <div class="checkout-step-title">
            <span
              v-if="form.phone_number && form.name && form.surname"
              class="step-active"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
              >
                <path
                  d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                  fill="white"
                /></svg
            ></span>
            <span v-else>1</span>
            <h4>{{ $store.state.translations["checkout.step1-title"] }}</h4>
          </div>
          <a-form-model :model="form" ref="ruleForm" :rules="rules" layout="vertical">
            <div class="checkout-form">
              <a-form-model-item class="mb-3" prop="phone_number">
                <input
                  class="w-100"
                  v-mask="'+998 ## ### ## ##'"
                  :placeholder="`${$store.state.translations['main.your-phone-number']}*`"
                  v-model="form.phone_number"
                />
              </a-form-model-item>
              <div class="checkout-input-grid">
                <a-form-model-item class="mb-0" prop="name">
                  <a-input
                    :placeholder="`${$store.state.translations['main.enter-your-name']}*`"
                    v-model="form.name"
                  />
                </a-form-model-item>
                <a-form-model-item class="mb-0" prop="surname">
                  <a-input
                    :placeholder="`${$store.state.translations['main.enter-your-last-name']}*`"
                    v-model="form.surname"
                  />
                </a-form-model-item>
              </div>
            </div>
          </a-form-model>
          <div class="checkout-step-title" id="cash">
            <span
              v-if="form.phone_number && form.name && form.surname && typePayment != null"
              class="step-active"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
              >
                <path
                  d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                  fill="white"
                /></svg
            ></span>
            <span v-else>2</span>
            <h4>{{ $store.state.translations["checkout.step2-title"] }}</h4>
          </div>
          <div class="radio-card-grid">
            <div class="radio-card cursor-pointer" @click="typePayment = 'cash'">
              <span
                :class="{
                  'active-radio': typePayment == 'cash',
                  'required-border': required.cash && typePayment == null,
                }"
              >
              </span>
              <div class="radio-card-body">
                <h6>{{ $store.state.translations["checkout.step2-card1-title"] }}</h6>
                <p>
                  {{ $store.state.translations["checkout.step2-card1-text"] }}
                </p>
              </div>
            </div>
            <div class="radio-card cursor-pointer" @click="typePayment = 'pay'">
              <span
                :class="{
                  'active-radio': typePayment == 'pay',
                  'required-border': required.cash && typePayment == null,
                }"
              >
              </span>
              <div class="radio-card-body">
                <h6>{{ $store.state.translations["checkout.step2-card2-title"] }}</h6>
                <p>
                  {{ $store.state.translations["checkout.step2-card2-text"] }}
                </p>
                <div class="pay-cards-grid" v-if="typePayment == 'pay'">
                  <!-- <div class="pay-card" @click="form.payment_method = 'uzum'">
                    <span v-if="form.payment_method == 'uzum'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/apelsin.uz.png" alt="" />
                  </div>
                  <div class="pay-card" @click="form.payment_method = 'cash'">
                    <span v-if="form.payment_method == 'cash'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/uzcard.uz.png" alt="" />
                  </div> -->
                  <div class="pay-card" @click="form.payment_method = 'click'">
                    <span v-if="form.payment_method == 'click'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/click.uz.png" alt="" />
                  </div>
                  <div class="pay-card" @click="form.payment_method = 'payme'">
                    <span v-if="form.payment_method == 'payme'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/payme.uz.png" alt="" />
                  </div>
                  <!-- <div class="pay-card" @click="form.payment_method = 'payze'">
                    <span v-if="form.payment_method == 'payze'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/humocard.uz.png" alt="" />
                  </div> -->
                  <!-- <div class="pay-card" @click="form.payment_method = 'uzum'">
                    <span v-if="form.payment_method == 'uzum'" class="step-active"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                          fill="white"
                        /></svg
                    ></span>
                    <span v-else></span>
                    <img src="../assets/images/uzum.png" alt="" />
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="checkout-step-title" id="delivery">
            <span
              v-if="
                form.phone_number &&
                form.name &&
                form.surname &&
                typePayment != null &&
                form.delivery_method != null
              "
              class="step-active"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
              >
                <path
                  d="M12.8148 0.767054L12.2128 0.181052C11.9648 -0.0603507 11.56 -0.0603507 11.3098 0.181052L4.99759 6.3279L1.69096 3.10901C1.44297 2.86758 1.03811 2.86758 0.787992 3.10901L0.185988 3.69502C-0.0619959 3.93645 -0.0619959 4.33054 0.185988 4.57402L4.54399 8.81635C4.66906 8.9381 4.83012 9 4.99335 9C5.15657 9 5.31977 8.9381 5.44274 8.81635L12.8084 1.64609C13.0628 1.40056 13.0628 1.00851 12.8148 0.767054Z"
                  fill="white"
                /></svg
            ></span>
            <span v-else>3</span>
            <h4>{{ $store.state.translations["checkout.step3-title"] }}</h4>
          </div>
          <div class="radio-card-grid-horizontal">
            <div
              class="radio-card radio-card-horizontal cursor-pointer"
              @click="form.delivery_method = 'pickup'"
            >
              <span
                :class="{
                  'active-radio': form.delivery_method == 'pickup',
                  'required-border': required.delivery && form.delivery_method == null,
                }"
              >
              </span>
              <div class="radio-card-body">
                <h6>{{ $store.state.translations["checkout.step3-card1-title"] }}</h6>
                <p>
                  {{ $store.state.translations["checkout.step3-card1-text"] }}
                </p>
              </div>
            </div>
            <div
              class="radio-card radio-card-horizontal cursor-pointer"
              @click="form.delivery_method = 'courier'"
            >
              <span
                :class="{
                  'active-radio': form.delivery_method == 'courier',
                  'required-border': required.delivery && form.delivery_method == null,
                }"
              >
              </span>
              <div class="radio-card-body">
                <h6>{{ $store.state.translations["checkout.step3-card2-title"] }}</h6>
                <p>{{ $store.state.translations["checkout.step3-card2-text"] }}</p>
              </div>
            </div>
          </div>
          <div class="adress-space">
            <div v-if="form.delivery_method == 'courier'">
              <h6>{{ $store.state.translations["checkout.address-list"] }}</h6>
              {{ $store.state.profile.address }}
              <div
                class="radio-card radio-card-horizontal mb-3 position-relative"
                v-for="address in $store.state.profile.addresses"
                :key="address?.id"
              >
                <div
                  class="cursor-pointer"
                  style="
                    position: absolute;
                    width: 70%;
                    height: 100%;
                    left: 0;
                    z-index: 100;
                  "
                  @click="form.user_address_id = address?.id"
                ></div>
                <span
                  :class="{
                    'active-radio': form.user_address_id == address?.id,
                  }"
                >
                </span>
                <div class="radio-card-body d-flex justify-content-between w-100">
                  <h5>
                    {{ address?.region?.name }}, {{ address?.district?.name }},
                    {{ address?.address }}
                  </h5>
                  <button>
                    <span
                      v-html="addressEdit"
                      @click="
                        addressEditAction({
                          region_id: address?.region?.id,
                          district_id: address?.district?.id,
                          village_id: address?.village?.id,
                          address: address?.address,
                          id: address?.id,
                        })
                      "
                    ></span>
                  </button>
                </div>
              </div>

              <div class="add-adress-btn" @click="visible = true">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M5.82927 14.1069V0.892578H9.17017V14.1069H5.82927ZM0.892578 9.17017V5.82927H14.1069V9.17017H0.892578Z"
                      fill="white"
                    /></svg
                ></span>
                {{ $store.state.translations["checkout.add-new-address"] }}
              </div>
            </div>
            <div class="bottom-text">
              <span>
                <a-checkbox
                  @change="onChange"
                  :class="{ checkboxRequiredClass: required.checkbox }"
                >
                </a-checkbox>
                <p>
                  {{ $store.state.translations["checkout.check-text1"] }},
                  <span>{{ $store.state.translations["checkout.check-text2"] }}</span>
                  {{ $store.state.translations["checkout.check-text3"] }}
                  <span @click="visibleConsent = true">{{
                    $store.state.translations["checkout.check-text4"]
                  }}</span>
                  {{ $store.state.translations["checkout.check-text5"] }}
                </p></span
              >
              <span class="checkout-prob" @click="visibleCheckoutProblem = true">{{
                $store.state.translations["checkout.problem-buy"]
              }}</span>
            </div>
            <div class="checkout-btn" @click="submit()">
              {{ $store.state.translations["checkout.purchase-formalization"] }}
            </div>
          </div>
        </div>
        <div class="checkout-info-block">
          <div class="checkout-info">
            <div class="checkout-info-header">
              <h4>{{ $store.state.translations["checkout.your-order"] }}</h4>
              <h5 class="cursor-pointer" @click="$router.push(localePath('/basket'))">
                {{ $store.state.translations["checkout.to-cart"] }}
              </h5>
            </div>
            <div class="checkout-info-body">
              <span
                ><p>{{ $store.state.translations["main.products"] }}</p>
                <p>
                  {{ `${totalRealPrice}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
                  {{ $store.state.translations["main.som"] }}
                </p></span
              >

              <span
                ><p>{{ $store.state.translations["checkout.discount"] }}</p>
                <p>
                  {{
                    `-${totalRealPrice - reduceTotalPrice}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      " "
                    )
                  }}
                  {{ $store.state.translations["main.som"] }}
                </p></span
              >
              <span
                ><p>{{ $store.state.translations["main.dicoin"] }}</p>
                <p>
                  {{
                    `- ${
                      sendDicoin ? dicoinSumm * $store.state.dicoin?.dicoin_to_sum : 0
                    }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                  }}
                  {{ $store.state.translations["main.som"] }}
                </p></span
              >
              <span
                ><p>{{ $store.state.translations["main.delivery"] }}</p>
                <p>
                  {{
                    `${deliveryCost ? deliveryCost : 0}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      " "
                    )
                  }}
                  {{ $store.state.translations["main.som"] }}
                </p></span
              >
              <span
                ><p>{{ $store.state.translations["checkout.total-sum"] }}</p>
                <p>
                  {{
                    `${
                      (sendDicoin
                        ? reduceTotalPrice -
                          dicoinSumm * $store.state.dicoin?.dicoin_to_sum
                        : reduceTotalPrice) + deliveryCost
                    }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                  }}
                  {{ $store.state.translations["main.som"] }}
                </p></span
              >
            </div>
            <div
              class="checkout_dicoin_input cursor-pointer"
              v-if="sendDicoin"
              @click="sendDicoin = false"
            >
              <div class="d-flex">
                <img src="../assets/images/d-coin.png" alt="" />
                <h6 class="active_dicoin">
                  <span>{{ dicoinSumm }}</span
                  >{{ $store.state.translations["main.dicoin"] }}
                </h6>
              </div>
              <p>
                -
                {{
                  `${dicoinSumm * $store.state.dicoin?.dicoin_to_sum}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    " "
                  )
                }}
                {{ $store.state.translations["main.som"] }}
              </p>
            </div>
            <div
              class="checkout_dicoin"
              v-if="$store.state.dicoin?.dicoin_to_sum && !sendDicoin"
            >
              <div class="d-flex">
                <p>
                  {{ $store.state.translations["checkout.total-count-dicoin"] }}:
                  <span
                    ><img src="../assets/images/d-coin.png" alt="" />{{
                      $store.state.profile?.dicoin?.quantity
                    }}</span
                  >
                </p>
                <p>
                  {{ $store.state.translations["checkout.one-dicoin"] }}:
                  <span
                    >{{
                      `${$store.state.dicoin?.dicoin_to_sum}`.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        " "
                      )
                    }}
                    {{ $store.state.translations["main.som"] }}
                  </span>
                </p>
              </div>
              <div class="max-dicoin-sum">
                <p>
                  {{ $store.state.translations["checkout.max"] }}:
                  <span
                    >{{ `${priceWithDiCoin}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
                    {{ $store.state.translations["main.som"] }}</span
                  >
                </p>
              </div>
              <div class="checkout_dicoin_input">
                <div>
                  <img src="../assets/images/d-coin.png" alt="" />
                  <input
                    class="dicoin-input"
                    type="number"
                    v-model="dicoinSumm"
                    placeholder="0"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    :maxlength="`${$store.state.profile?.dicoin?.quantity}`.length"
                    @keyup.enter="numberFormat"
                  />
                </div>
                <p v-if="skeleton">
                  <b-skeleton width="100px" height="100%"></b-skeleton>
                </p>
                <p
                  v-if="
                    priceWithDiCoin > dicoinSumm * $store.state.dicoin?.dicoin_to_sum &&
                    !skeleton
                  "
                >
                  -
                  {{ dicoinSumm * $store.state.dicoin?.dicoin_to_sum }}
                  {{ $store.state.translations["main.som"] }}
                </p>
                <p
                  style="color: red"
                  v-if="
                    !skeleton &&
                    priceWithDiCoin < dicoinSumm * $store.state.dicoin?.dicoin_to_sum
                  "
                >
                  -
                  {{ dicoinSumm * $store.state.dicoin?.dicoin_to_sum }}
                  {{ $store.state.translations["main.som"] }}
                </p>
              </div>
              <button
                @click="currentDicoin"
                :class="{
                  disabled:
                    priceWithDiCoin < dicoinSumm * $store.state.dicoin?.dicoin_to_sum ||
                    $store.state.profile?.dicoin?.quantity < dicoinSumm,
                }"
              >
                {{ $store.state.translations["checkout.acceptance"] }}
              </button>
            </div>
            <div class="checkout-info-products">
              <div
                class="checkout-info-product-card"
                v-for="product in products"
                :key="product.id"
              >
                <div class="checkout-info-product-card-img">
                  <img :src="product.images[0].sm_img" alt="" />
                </div>
                <div class="checkout-info-product-card-body">
                  <p>{{ product?.info?.name }}</p>
                  <span
                    >{{ $store.state.translations["checkout.count"] }}:
                    {{ $store.state.cart.find((item) => item.id == product.id)?.count }}
                    {{ $store.state.translations["checkout.piece"] }}</span
                  >
                  <h5>
                    {{
                      `${
                        product.discount_price
                          ? product.discount_price
                          : product.real_price *
                            $store.state.cart.find((item) => item.id == product.id)?.count
                      }`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }}
                    {{ $store.state.translations["main.som"] }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="what adress-space">
          <div v-if="form.delivery_method == 'courier'">
            <h6>{{ $store.state.translations["checkout.address-list"] }}</h6>
            {{ $store.state.profile.address }}
            <div
              class="radio-card radio-card-horizontal mb-3 position-relative"
              v-for="address in $store.state.profile.addresses"
              :key="address?.id"
            >
              <div
                class="cursor-pointer"
                style="position: absolute; width: 70%; height: 100%"
                @click="form.user_address_id = address?.id"
              ></div>
              <span
                :class="{
                  'active-radio': form.user_address_id == address?.id,
                }"
              >
              </span>
              <div class="radio-card-body d-flex justify-content-between w-100">
                <h5>
                  {{ address?.region?.name }}, {{ address?.district?.name }},
                  {{ address?.village?.name }}, {{ address?.address }}
                </h5>
                <button>
                  <span
                    v-html="addressEdit"
                    @click="
                      addressEditAction({
                        region_id: address?.region?.id,
                        district_id: address?.district?.id,
                        village_id: address?.village?.id,
                        address: address?.address,
                        id: address?.id,
                      })
                    "
                  ></span>
                </button>
              </div>
            </div>

            <div class="add-adress-btn" @click="visible = true">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M5.82927 14.1069V0.892578H9.17017V14.1069H5.82927ZM0.892578 9.17017V5.82927H14.1069V9.17017H0.892578Z"
                    fill="white"
                  /></svg
              ></span>
              {{ $store.state.translations["checkout.add-new-address"] }}
            </div>
          </div>
          <div class="bottom-text">
            <span>
              <a-checkbox
                @change="onChange"
                v-model="checkboxVal"
                :class="{ checkboxRequiredClass: required.checkbox }"
              >
              </a-checkbox>
              <p>
                {{ $store.state.translations["checkout.check-text1"] }},
                <span>{{ $store.state.translations["checkout.check-text2"] }}</span>
                {{ $store.state.translations["checkout.check-text3"] }}
                <span @click="visibleConsent = true">{{
                  $store.state.translations["checkout.check-text4"]
                }}</span>
                {{ $store.state.translations["checkout.check-text5"] }}
              </p></span
            >
            <span class="checkout-prob" @click="visibleCheckoutProblem = true">{{
              $store.state.translations["checkout.problem-buy"]
            }}</span>
          </div>
          <div class="checkout-btn" @click="submit()">
            {{ $store.state.translations["checkout.purchase-formalization"] }}
          </div>
        </div>
      </div>
    </div>
    <a-modal
      v-model="visible"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="804px"
      @ok="handleOk"
    >
      <div class="vmodal-header">
        <h5>{{ $store.state.translations["checkout.add-new-address"] }}</h5>
        <span @click="handleOk"
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
      <div class="vmodal-body">
        <a-form-model
          :model="formAddress"
          ref="ruleFormAddress"
          :rules="rules"
          layout="vertical"
        >
          <div class="modal-select-grid">
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': formAddress.region_id == null }"
            >
              <a-select
                class="checkout-select"
                v-model="formAddress.region_id"
                :placeholder="$store.state.translations['checkout.select-region']"
              >
                <a-select-option v-for="(region, index) in regions" :key="region.id">
                  {{ region.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': formAddress.district_id == null }"
            >
              <a-select
                class="checkout-select"
                :class="{ disabled: districts.length == 0 }"
                v-model="formAddress.district_id"
                :placeholder="$store.state.translations['checkout.select-city']"
              >
                <a-select-option v-for="(city, index) in districts" :key="city.id">
                  {{ city.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </div>

          <a-form-model-item class="form-item mb-0 pb-0">
            <a-input
              class="checkout-textarea"
              type="textarea"
              rows="5"
              v-model="formAddress.address"
              :placeholder="$store.state.translations['checkout.enter-address']"
            />
          </a-form-model-item>
        </a-form-model>
      </div>
      <div class="vmodal-btn" @click="submitAddress">
        {{ $store.state.translations["checkout.add-adress"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleAddressErr"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="561px"
      @ok="handleOkErr"
    >
      <div class="vmodal-header">
        <h5>{{ $store.state.translations["checkout.count-3"] }}</h5>
        <span @click="handleOkErr"
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
      <div class="vmodal-body"></div>
      <div class="vmodal-btn" @click="handleOkErr">
        {{ $store.state.translations["checkout.to-back"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <!-- <a-modal
      v-model="visible"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="804px"
      @ok="handleOk"
    >
      <div class="vmodal-header">
        <h5>{{ $store.state.translations["checkout.add-new-address"] }}</h5>
        <span @click="handleOk"
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
      <div class="vmodal-body">
        <a-form-model :model="form" ref="ruleFormFaq" :rules="rules" layout="vertical">
          <div class="modal-select-grid">
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': form.name == '' }"
            >
              <a-select
                class="checkout-select mb-0"
                v-model="form.name"
                placeholder="Shaharni tanlang"
              >
                <a-select-option v-for="(city, index) in cities" :key="city.id">
                  {{ city.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item
              class="form-item mb-0 pb-0"
              :class="{ 'select-placeholder': form.name == '' }"
            >
              <a-select
                class="checkout-select mb-0"
                v-model="form.name"
                placeholder="Tumanni tanlang"
              >
                <a-select-option v-for="(category, index) in regions" :key="category.id">
                  {{ category.name }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
            <a-form-model-item class="form-item mb-0 pb-0">
              <a-input
                class="checkout-textarea"
                v-model="form.name"
                placeholder="Ko’cha uy va manzil haqida ma’lumot"
              />
            </a-form-model-item>
          </div>
        </a-form-model>
      </div>
      <div class="vmodal-btn adress-modal-btn">Manzilni qo’shish</div>
      <template slot="footer"> <h3></h3></template>
    </a-modal> -->
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: 0, borderRadius: '4px', overflow: 'hidden' }"
      centered
      :closable="false"
      width="590px"
      @ok="handleOk"
    >
      <div class="vmodal-header so-modal-header">
        <h5>{{ $store.state.translations["checkout.order-accepted"] }}</h5>
        <span @click="handleOk"
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
      <div class="vmodal-body os-vmodal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <circle cx="40" cy="40" r="40" fill="#F4F5F5" />
          <path
            d="M38.1475 46.5859C37.3665 47.367 36.1002 47.367 35.3191 46.5859L30.0833 41.3501C29.5587 40.8255 29.5587 39.9748 30.0833 39.4501C30.608 38.9255 31.4587 38.9255 31.9833 39.4501L35.3191 42.7859C36.1002 43.567 37.3665 43.567 38.1475 42.7859L48.0167 32.9168C48.5413 32.3921 49.392 32.3921 49.9167 32.9168C50.4413 33.4415 50.4413 34.2921 49.9167 34.8168L38.1475 46.5859Z"
            fill="#009A10"
          />
        </svg>
        <p>
          {{ $store.state.translations["checkout.order"] }} №{{ orderId }}
          {{ $store.state.translations["checkout.framed"] }}.
          {{ $store.state.translations["checkout.order-text"] }}
        </p>
        <div class="os-vmodal-btns">
          <button class="vmodal-btn os-vmodal-btn-close" @click="handleOk">
            {{ $store.state.translations["checkout.continue-shopping"] }}
          </button>
          <button
            class="vmodal-btn os-vmodal-btn"
            @click="$router.push(localePath('/profile/my-orders'))"
          >
            {{ $store.state.translations["checkout.go-view"] }}
          </button>
        </div>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleCheckoutProblem"
      :body-style="{
        padding: '32px',
        borderRadius: '14px',
        overflow: 'hidden',
      }"
      centered
      :closable="false"
      width="571px"
      @ok="handleOkProblem"
    >
      <div class="checkout-problems">
        <h4>{{ $store.state.translations["checkout.problem-buy"] }}</h4>
        <p>{{ $store.state.translations["checkout.contact-us"] }}</p>
        <a :href="`tel:${$store.state.siteInfo?.phone_number}`"
          >+{{
            `${$store.state.siteInfo?.phone_number}`
              .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
              ?.filter((item, index) => index != 0)
              .map((elem, index) => (index == 1 ? `(${elem})` : elem))
              .join(" ")
          }}</a
        >
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleConsent"
      :body-style="{
        padding: '18px',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#F1F1F1',
      }"
      centered
      :closable="false"
      width="361px"
      @ok="handleOkConsent"
    >
      <div class="checkout-consent">
        <h4>{{ $store.state.translations["checkout.consent-text1"] }}</h4>
        <p>{{ $store.state.translations["checkout.consent-text2"] }}</p>
        <button>{{ $store.state.translations["checkout.consent-text3"] }}</button>
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>
<script>
export default {
  layout: "checkoutLayout",
  data() {
    return {
      visibleAddressErr: false,
      checkboxRequired: false,
      required: {
        cash: false,
        checkbox: false,
        delivery: false,
        address: false,
      },
      checkboxVal: false,
      dicoinSumm: null,
      sendDicoin: false,
      skeleton: false,
      form: {
        name: "",
        delivery_method: null,
        phone_number: "",
        postcode: null,
        email: null,
        comments: null,
        payment_method: "cash",
        products: [],
        amount: "",
        user_address_id: null,
        surname: "",
        dicoin: null,
      },
      addressEditId: null,
      addressEdit: require("../assets/svg/Edit.svg?raw"),
      visibleConsent: false,
      visibleCheckoutProblem: false,
      visibleSuccess: false,
      typePayment: null,
      paymentElement: "payme",
      visible: false,
      regions: [],
      districts: [],
      villages: [],
      products: [],
      profile: {},
      orderId: null,
      deliveryCost: 0,
      formAddress: {
        region_id: null,
        district_id: null,
        village_id: null,
        address: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        surname: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
      priceWithDiCoin: 0,
    };
  },
  async mounted() {
    this.$store.commit("reloadStore");
    let storeProducts = JSON.parse(localStorage.getItem("cart"));
    await this.__GET_PROFILE_INFO();
    this.__GET_REGIONS();
    if (storeProducts.length > 0) {
      this.skeletonLoad = true;
      await this.__GET_PRODUCTS_BY_ID({
        products: storeProducts.map((item) => item.id),
      });
    }
  },
  computed: {
    totalRealPrice() {
      const totalSumm = this.products.reduce((summ, item) => {
        return (
          summ +
          item.real_price *
            this.$store.state.cart.find((elem) => elem.id == item.id)?.count
        );
      }, 0);
      return totalSumm;
    },
    reduceTotalPrice() {
      const totalSum = this.products.reduce((summ, item) => {
        return (
          summ +
          (item.discount_price ? item.discount_price : item.real_price) *
            this.$store.state.cart.find((elem) => elem.id == item.id)?.count
        );
      }, 0);
      return totalSum;
    },
  },
  methods: {
    handleOkErr() {
      this.visibleAddressErr = false;
    },
    numberFormat(e) {
      var txt = String.fromCharCode(e.which);
      if (!txt.match(/[A-Za-z0-9&.]/)) {
        return false;
      }
    },
    currentDicoin() {
      this.sendDicoin = true;
      this.form.dicoin = this.dicoinSumm;
      this.totalPrice();
    },
    totalPrice() {
      this.form.amount =
        (this.sendDicoin
          ? this.reduceTotalPrice -
            this.dicoinSumm * this.$store.state.dicoin?.dicoin_to_sum
          : this.reduceTotalPrice + this.deliveryCost) + this.deliveryCost;
    },
    submit() {
      const data = {
        ...this.form,
        dicoin: this.dicoinSumm ? this.dicoinSumm : null,
        products: this.products.map((item) => {
          return {
            count: this.$store.state.cart.find((elem) => elem.id == item.id)?.count,
            product_id: item.id,
            price: item.price,
          };
        }),
        phone_number: this.form.phone_number.split(" ").join("").replace("+", ""),
        amount: this.form.amount
          ? this.form.amount
          : this.reduceTotalPrice + this.deliveryCost,
      };
      if (this.typePayment == null) {
        this.required.cash = true;
        this.scrollElement("cash");
      } else {
        this.required.cash = false;
      }
      if (this.form.delivery_method == null) {
        this.required.delivery = true;
        this.scrollElement("delivery");
      } else {
        this.required.delivery = false;
      }
      if (this.form.delivery_method == "courier" && this.form.user_address_id == null) {
        this.required.address = true;

        this.$notification.warning({
          message: "Required",
          description: "Manzil kiritilmagan",
        });
      } else {
        this.required.address = false;
      }
      if (!this.checkboxVal) {
        this.required.checkbox = true;
      } else {
        this.required.checkbox = false;
      }
      if (Object.values(this.required).filter((item) => item).length == 0) {
        this.$refs["ruleForm"].validate((valid) => {
          valid ? this.__POST_ORDER(data) : false;
        });
      }
    },
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    },
    addressEditAction(obj) {
      this.addressEditId = obj.id;
      this.visible = true;
      this.districts = this.regions.find((item) => item.id == obj.region_id).districts;
      this.villages = this.districts.find((item) => item.id == obj.district_id).villages;
      this.formAddress = {
        region_id: obj.region_id,
        district_id: obj.district_id,
        village_id: obj.village_id,
        address: obj.address,
      };
    },
    submitAddress() {
      this.$refs["ruleFormAddress"].validate((valid) => {
        valid
          ? this.addressEditId
            ? this.__EDIT_ADDRESSS(this.formAddress)
            : this.__POST_ADDRESSS(this.formAddress)
          : false;
      });
    },
    handleOkConsent() {
      this.visibleConsent = false;
    },
    handleOkProblem() {
      this.visibleCheckoutProblem = false;
    },
    async __GET_PROFILE_INFO() {
      this.skeleton = true;
      const profileData = await this.$store.dispatch("fetchAuth/getProfileInfo");
      this.profile = profileData?.user;
      this.skeleton = false;
      this.form = {
        ...this.form,
        name: this.profile.name ? this.profile.name : "",
        phone_number: this.profile.login ? `+${this.profile.login}` : "",
        surname: this.profile.surname ? this.profile.surname : "",
      };
    },
    async __GET_PRODUCTS_BY_ID(dataForm) {
      const data = await this.$store.dispatch("fetchProducts/getProductsById", {
        data: dataForm,
        params: {
          headers: {
            lang: this.$i18n.locale,
          },
        },
      });
      this.products = data?.products;
      if (this.products.filter((elem) => elem.dicoin).length > 0) {
        this.priceWithDiCoin = this.products
          .filter((elem) => elem.dicoin)
          .reduce((summ, item) => {
            return (
              summ +
              (item.discount_price ? item.discount_price : item.real_price) *
                item.dicoin *
                0.01 *
                this.$store.state.cart.find((elem) => elem.id == item.id)?.count
            );
          }, 0);
      } else {
        this.priceWithDiCoin = 0;
      }
    },
    async __GET_REGIONS() {
      const data = await this.$store.dispatch("fetchRegions/getRegions", {
        headers: {
          lang: this.$i18n.locale,
        },
      });
      this.regions = data?.regions;
    },
    async __POST_ORDER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postOrder", formData);
        if (data?.redirect_url) {
          window.location.replace(data?.redirect_url);
          localStorage.setItem("cart", JSON.stringify([]));
          this.$store.commit("reloadStore");
        } else {
          this.visibleSuccess = true;
          this.orderId = data?.order?.id;
          localStorage.setItem("cart", JSON.stringify([]));
          this.$store.commit("reloadStore");
        }
      } catch (e) {
        // console.log(e);
      }
    },
    async __POST_ADDRESSS(formData) {
      try {
        const data = await this.$store.dispatch("fetchRegions/postAddress", formData);
        this.$store.dispatch("profileInfo");
        this.visible = false;
      } catch (e) {
        if (e.response.status == 500) {
          this.visibleAddressErr = true;
        }
      }
    },
    async __EDIT_ADDRESSS(formData) {
      try {
        const data = await this.$store.dispatch("fetchRegions/editAddress", {
          data: formData,
          id: this.addressEditId,
        });
        this.$store.dispatch("profileInfo");
        this.visible = false;
      } catch (e) {
        // console.log(e);
      }
    },
    handleOk() {
      this.visible = false;
      this.visibleSuccess = false;
    },
    onChange(e) {
      this.checkboxVal = e.target.checked;
    },
  },
  watch: {
    checkboxVal(val) {
      if (val) {
        this.checkboxRequired = false;
      }
    },
    "formAddress.region_id"(val) {
      this.formAddress.district_id = null;
      this.districts = this.regions.find((item) => item.id == val).districts;
    },
    "formAddress.district_id"(val) {
      if (val) this.villages = this.districts.find((item) => item.id == val).villages;
    },
    visible(val) {
      if (!val) {
        this.addressEditId = null;
        this.formAddress.region_id = null;
        this.formAddress.district_id = null;
        this.formAddress.address = null;
        this.districts = [];
      }
    },
    "form.delivery_method"(val) {
      if (val == "pickup") {
        this.form.user_address_id = null;
      }
    },
    "form.user_address_id"(val) {
      if (val) {
        const regionGroupId = this.$store.state.profile.addresses.find(
          (item) => item.id == val
        ).region.group_id;
        if (regionGroupId) {
          const currentGroup = this.regions.find(
            (elem) => elem.group_id == regionGroupId
          );
          if (currentGroup) {
            this.deliveryCost = currentGroup.group.delivery_price;
          }
        }
      } else {
        this.deliveryCost = null;
      }
    },
    deliveryCost() {
      this.totalPrice();
    },
    visible(val) {},
    visibleSuccess(val) {
      if (!val) this.$router.push("/");
    },
    typePayment(val) {
      if (val) {
        this.form.payment_method = "cash";
      }
    },
  },
};
</script>
<style lang="css">
@import "../assets/css/pages/checkout.css";
.so-modal-header {
  padding: 22px 20px 24px 40px;
  background: #f7f7f7;
}
.os-vmodal {
  padding: 40px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #fff;
}
.os-vmodal p {
  color: #020105;
  text-align: center;
  font-family: var(--SB_500);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  width: 75%;
  margin-top: 24px;
}
.os-vmodal-btns {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  margin-top: 40px;
}
.os-vmodal-btn,
.os-vmodal-btn-close {
  font-size: 16px;
  font-family: var(--SB_500);
  border: none;
  margin-top: 0;
  height: 52px;
}
.os-vmodal-btn-close {
  background: #f4f5f5;
  color: #000;
}
.checkout-problems {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkout-problems h4 {
  color: #000;
  font-family: var(--SB_600);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
}
.checkout-problems p {
  color: #000;
  text-align: center;
  font-family: var(--SB_400);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
}
.checkout-problems a {
  color: var(--color_dark_green);
  font-family: var(--SB_700);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
}
.checkout-consent {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
}
.checkout-consent h4 {
  color: #000;
  font-family: var(--SB_600);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.checkout-consent p {
  color: var(--color_dark_green);
  font-family: var(--SB_400);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-decoration-line: underline;
}
.checkout-consent button {
  border-radius: 12px;
  background: #fff;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 14px;
  color: var(--color_dark_green);
  font-family: var(--SB_700);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
}
.checkout_dicoin {
  padding: 16px 24px;
  display: flex;
  background-color: #fafafa;
  flex-direction: column;
}
.checkout_dicoin button {
  border: none;
  border-radius: 12px;
  border: 1px solid #09454f;
  background: #e8faf5;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  color: var(--color_dark_green);
  font-family: var(--SB_600);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  margin-top: 12px;
}
.checkout_dicoin p {
  color: #727474;
  font-family: var(--SB_400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 47px;
}
.checkout_dicoin p:last-child {
  margin-right: 0;
}
.checkout_dicoin p span {
  color: #000;
  font-family: var(--SB_500);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-top: 8px;
}
.checkout_dicoin p span img {
  margin-right: 4px;
}
.checkout_dicoin_input {
  display: flex;
  border-radius: 16px;
  border: 1px solid #f1f1f1;
  background: #fff;
  padding: 20px;
  justify-content: space-between;
  margin-top: 12px;
}
.checkout_dicoin_input div input {
  border: none;
  padding-left: 4px;
  color: #666;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
}
.checkout_dicoin_input div input:focus {
  outline: none;
}
.checkout_dicoin_input p {
  color: var(--color_dark_green);
  text-align: right;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
}
.active_dicoin {
  color: #a1a1a1;
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 8px;
}
.active_dicoin span {
  color: #000;
}

.what {
  display: none;
}
@media screen and (max-width: 1024px) {
  .adress-space {
    display: none;
  }
  .what {
    display: block;
  }
  .checkout-info-product-card .checkout-info-product-card-img {
    width: 80px;
    height: 80px;
  }
  .checkout-info-product-card {
    display: grid;
    grid-template-columns: 2fr 8fr;
    gap: 24px;
  }
  .checkout-info-product-card-body {
    padding: 0;
  }
  .checkout-info-product-card-body {
    gap: 14px;
  }
  .chekout-footer-head p {
    margin: 0;
  }
}
.max-dicoin-sum {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.max-dicoin-sum p {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  align-items: center;
  position: absolute;
  right: 16px;
  bottom: -12px;
}
.max-dicoin-sum p span {
  margin-top: 0;
  font-size: 12px;

  margin-left: 5px;
}
.dicoin-input::-webkit-outer-spin-button,
.dicoin-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.checkboxRequiredClass .ant-checkbox-inner {
  border-color: red !important;
}
.dicoin-input[type="number"] {
  -moz-appearance: textfield;
}
.required-border {
  border-color: red !important;
}
</style>
