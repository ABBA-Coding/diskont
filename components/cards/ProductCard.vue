<template lang="html">
  <div class="product-card">
    <div class="position-relative">
      <div class="product-card-header">
        <span class="hover-btns">
          <span
            class="like-active"
            v-html="activeHeart"
            v-if="$store.state.like.includes(product?.id)"
            @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
          >
          </span>
          <span
            class="like-inactive"
            v-else
            v-html="like"
            @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
          >
          </span>
        </span>
        <span
          class="hover-btns"
          v-html="comp"
          :class="{
            'active-comparison': $store.state.comparison.includes(product?.id),
          }"
          @click="$store.commit('addToStore', { id: product?.id, name: 'comparison' })"
        ></span>
        <div class="fast_show" @click="visible = true">
          {{ $store.state.translations["main.quick-view"] }}
        </div>
        <span
          class="pc-img-container"
          @click="$router.push(localePath(`/product/${product?.slug}`))"
        >
          <!-- <NuxtImg
            format="webp"
            v-if="product?.images[0]?.md_img"
            :src="product?.images[0]?.md_img"
            loading="lazy"
          /> -->
          <img
            v-if="product?.images[0]?.md_img"
            :src="product?.images[0]?.md_img"
            alt=""
          />
          <img v-else src="../../assets/images/empty-img.png" alt="" />
        </span>
      </div>
      <div class="product_promotions" v-if="product?.promotions">
        <span v-for="promotion in product?.promotions">
          <span></span>
          <span
            :style="`background-color: ${promotion?.product_card_back_color};color: ${promotion?.product_card_text_color}`"
            class="promotion-name"
            v-if="promotion?.name?.ru"
          >
            {{ promotion?.name?.ru }}
          </span>
          <span class="promotion-img" v-if="promotion?.md_sticker"
            ><img :src="promotion?.md_sticker" alt=""
          /></span>
          <span
            class="promotion-img"
            v-if="promotion?.sticker_svg"
            v-html="promotion?.sticker_svg"
          ></span>
        </span>
      </div>
      <div class="product_badges" v-if="product?.badges || product?.discount">
        <span>
          <span
            v-if="product?.discount"
            class="product_discount_item"
            :style="{ background: 'red', color: '#fff' }"
            ><p>
              {{
                product?.discount?.pivot?.amount
                  ? `-${(
                      (product?.discount?.pivot?.amount * 100) /
                      product?.real_price
                    ).toFixed()}%`
                  : `-${product?.discount?.pivot?.percent}%`
              }}
            </p></span
          >
        </span>
        <span v-if="product?.badges" v-for="badge in product?.badges" :key="badge.id">
          <span
            class="product_badges_item"
            :style="{
              background: badge.background_color,
              color: badge.text_color,
            }"
            ><p>{{ badge?.name }}</p></span
          >
        </span>
      </div>
    </div>
    <div class="product-card-body">
      <nuxt-link :to="localePath(`/product/${product?.slug}`)">
        <h3 class="product-card-title">
          {{ product?.info?.name ? product?.info?.name : "---" }}
        </h3>
      </nuxt-link>
      <p v-if="product.info.stars">
        <!-- <span v-html="star"></span>{{ product?.info?.stars ? product?.info?.stars : "0" }} -->
        <a-rate class="product-card-rate" v-model="product.info.stars" disabled />
      </p>
      <p v-else>
        <!-- <span v-html="star"></span>{{ product?.info?.stars ? product?.info?.stars : "0" }} -->
        <a-rate class="product-card-rate" v-model="fullRating" disabled />
      </p>

      <span class="product-card-price"
        ><h4>
          {{
            `${(product?.discount_price
              ? product?.discount_price
              : product?.real_price
            ).toFixed()}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          {{ $store.state.translations["main.som"] }}
        </h4>
        <!-- <span> +5 ta dicoin</span> -->
      </span>
    </div>
    <div class="product-discount">
      <p v-if="product?.discount_price">
        {{ `${product?.real_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
        <!-- .slice(0, product?.price?.indexOf("."))
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") -->
        so'm
      </p>
    </div>
    <!-- <div class="cart-anim"></div> -->

    <div class="product-card-footer">
      <div
        class="to-basket-count"
        v-if="$store.state.cart.find((item) => item.id == product?.id)"
      >
        <span
          @click="
            $store.state.cart.find((item) => item.id == product?.id)?.count > 0 &&
              $store.commit('productCountDown', { id: product?.id })
          "
          >-</span
        >{{ $store.state.cart.find((item) => item.id == product?.id)?.count }}
        <span
          :class="{
            disabled:
              productInner?.stock ==
              $store.state.cart.find((item) => item.id == product?.id)?.count,
          }"
          @click="
            $store.state.cart.find((item) => item.id == product?.id)?.count <
              productInner?.stock && $store.commit('productCountUp', { id: product?.id })
          "
          >+</span
        >
      </div>
      <div
        class="to-basket-btn"
        id="addtocart"
        v-else
        @click="($event) => addToCart($event, product)"
      >
        <span>{{ $store.state.translations["main.to-basket"] }}</span
        >{{ $store.state.translations["main.to-basket"] }}
      </div>
    </div>
    <a-modal
      v-model="visible"
      :body-style="{
        padding: '24px',
        borderRadius: '14px',
        minHeight: '613px',
      }"
      centered
      :closable="false"
      width="1023px"
      @ok="handleOk"
    >
      <div class="product-show-modal">
        <div class="product-show-modal-header">
          <h3>{{ product?.info?.name }}</h3>
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
                stroke="#000"
                stroke-width="3.28586"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0003 17.9861L1.99512 1.97754"
                stroke="#000"
                stroke-width="3.28586"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
        <div class="product-show-modal-body">
          <div class="product-show-modal-carousel">
            <a-carousel
              arrows
              dots-class="slick-dots slick-thumb default-thumb"
              v-if="product?.images.length == 1"
            >
              <a slot="customPaging" slot-scope="props">
                <img
                  :src="getImgUrl([...product?.images, ...product?.images], props.i)"
                />
              </a>

              <div v-for="item in [...product?.images, ...product?.images]">
                <img :src="item?.md_img" />
              </div>
            </a-carousel>
            <a-carousel arrows dots-class="slick-dots slick-thumb" v-else>
              <a slot="customPaging" slot-scope="props">
                <img :src="getImgUrl(product?.images, props.i)" />
              </a>

              <div v-for="item in product?.images">
                <img :src="item?.md_img" />
              </div>
            </a-carousel>
          </div>
          <div class="product-show-modal-info">
            <div class="product-modal-like-comp">
              <span
                :class="{
                  'active-like-comp-btn': $store.state.like.includes(product?.id),
                }"
                @click="$store.commit('addToStore', { id: product?.id, name: 'like' })"
                ><span v-html="activeHeart"></span
                >{{ $store.state.translations["main.to-favorites"] }}</span
              >
              <span
                :class="{
                  'active-like-comp-btn': $store.state.comparison.includes(product?.id),
                }"
                @click="
                  $store.commit('addToStore', {
                    id: product?.id,
                    name: 'comparison',
                  })
                "
                ><span v-html="comp"></span>
                {{ $store.state.translations["main.comparison"] }}</span
              >
            </div>

            <div class="product-modal-price-block">
              <div class="cardo">
                <div class="cardo__header">
                  <div class="discount" v-if="product?.discount">
                    <p v-if="product?.discount?.pivot?.percent" class="tag">
                      - {{ product?.discount?.pivot?.percent }}%
                    </p>
                    <p v-if="product?.discount?.pivot?.amount" class="dis__price">
                      - {{ product?.discount?.pivot?.amount }}
                      {{ $store.state.translations["main.som"] }}
                    </p>
                    <p class="dis__txt">
                      {{ $store.state.translations["main.at-discount-price"] }}
                    </p>
                  </div>

                  <p class="price">
                    {{
                      `${product?.real_price}`
                        .replace(".", ",")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }}
                    {{ $store.state.translations["main.som"] }}
                  </p>

                  <p class="delivery">
                    {{ $store.state.translations["main.depends-region"] }}
                  </p>

                  <!-- <p class="coin">
                    <img src="@/assets/images/coin.svg" alt="" /> +5 ta dis coin
                  </p> -->
                  <p class="coin" v-if="skeleton">
                    <b-skeleton width="150px" height="100%"> </b-skeleton>
                  </p>
                  <p v-else class="coin">
                    <img src="@/assets/images/coin.svg" alt="" />
                    {{
                      Math.floor(
                        product?.real_price /
                          ($store.state.dicoin?.sum_to_dicoin
                            ? $store.state.dicoin?.sum_to_dicoin
                            : 1)
                      )
                    }}
                    {{ $store.state.translations["main.cout-di-coin"] }}
                  </p>
                </div>

                <div class="buttons">
                  <button
                    class="cart"
                    :class="{
                      'disabled-btn': $store.state.cart.find(
                        (item) => item.id == product?.id
                      ),
                    }"
                    @click="
                      $store.commit('addToCart', {
                        obj: { id: product?.id, count: 1 },
                        name: 'cart',
                      })
                    "
                  >
                    {{ $store.state.translations["main.add-to-cart"] }}
                  </button>
                  <button class="click" @click="visibleOc = true">
                    {{ $store.state.translations["main.boc-title"] }}
                  </button>
                </div>
              </div>
            </div>
            <div class="product-modal-characteristic">
              <h4>{{ $store.state.translations["main.short-info"] }}</h4>
              <div>
                <p>Бренд</p>
                <p>Samsung</p>
              </div>
              <div>
                <p>Диагональ</p>
                <p>6,5"</p>
              </div>
              <div>
                <p>Экран тури</p>
                <p>PLS</p>
              </div>
              <div>
                <p>Экраннинг янгиланиш тезлиги</p>
                <p>60 Гц</p>
              </div>
            </div>
            <nuxt-link
              class="product-modal-show-more"
              :to="localePath(`/product/${product?.slug}`)"
              >{{ $store.state.translations["main.more-products-info"] }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928933C11.9526 0.538409 11.3195 0.538409 10.9289 0.928933C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9L18 7L1 7L1 9Z"
                  fill="#00B2A9"
                /></svg
            ></nuxt-link>
          </div>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model="visibleBuy"
      :body-style="{
        padding: '24px',
        borderRadius: '14px',
        minHeight: '613px',
      }"
      centered
      :closable="false"
      width="1023px"
      @ok="handleOkBuy"
    >
      <div class="product-show-modal">
        <div class="product-show-modal-body">
          <div class="product-show-modal-carousel product-show-modal-carousel-height">
            <a-carousel
              arrows
              dots-class="slick-dots slick-thumb default-thumb"
              v-if="product?.images.length == 1"
            >
              <a slot="customPaging" slot-scope="props">
                <img
                  :src="getImgUrl([...product?.images, ...product?.images], props.i)"
                />
              </a>

              <div v-for="item in [...product?.images, ...product?.images]">
                <img :src="item?.md_img" />
              </div>
            </a-carousel>
            <a-carousel arrows dots-class="slick-dots slick-thumb" v-else>
              <a slot="customPaging" slot-scope="props" v-if="product?.images.length > 0">
                <img :src="getImgUrl(product?.images, props.i)" />
              </a>
              <a slot="customPaging" slot-scope="props" v-else>
                <img :src="getImgUrl([1, 2, 3, 4], props.i)" alt="" />
              </a>

              <div v-for="item in product?.images" v-if="product?.images.length > 0">
                <img :src="item?.md_img" />
              </div>
              <div v-for="item in [1, 2, 3, 4]" v-else>
                <img src="../../assets/images/empty-img.png" alt="" />
              </div>
            </a-carousel>
            <!-- <a-carousel arrows dots-class="slick-dots slick-thumb">
              <a slot="customPaging" slot-scope="props" v-if="product?.images.length > 0">
                <img :src="getImgUrl(product?.images, props.i)" />
              </a>
              <a slot="customPaging" slot-scope="props" v-else>
                <img :src="getImgUrl([1, 2, 3, 4], props.i)" alt="" />
              </a>
              <div v-for="item in product?.images" v-if="product?.images.length > 0">
                <img :src="item?.md_img" />
              </div>
              <div v-for="item in [1, 2, 3, 4]" v-else>
                <img src="../../assets/images/empty-img.png" alt="" />
              </div>
            </a-carousel> -->
          </div>
          <div class="product-show-modal-info">
            <div>
              <div class="product-show-modal-header2">
                <h3>{{ product?.info?.name }}</h3>
                <span @click="handleOkBuy"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.9958 1.98438L2.00391 17.9762"
                      stroke="#000"
                      stroke-width="3.28586"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.0003 17.9861L1.99512 1.97754"
                      stroke="#000"
                      stroke-width="3.28586"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
              </div>
              <div class="product-modal-like-comp">
                <span
                  :class="{
                    'active-like-comp-btn': $store.state.like.includes(product?.id),
                  }"
                  @click="
                    $store.commit('addToStore', {
                      id: product?.id,
                      name: 'like',
                    })
                  "
                  ><span v-html="activeHeart"></span>
                  {{ $store.state.translations["main.to-favorites"] }}</span
                >
                <span
                  :class="{
                    'active-like-comp-btn': $store.state.comparison.includes(product?.id),
                  }"
                  @click="
                    $store.commit('addToStore', {
                      id: product?.id,
                      name: 'comparison',
                    })
                  "
                  ><span v-html="comp"></span>
                  {{ $store.state.translations["main.comparison"] }}</span
                >
              </div>
              <div class="product-modal-attribut-block">
                <h6 v-if="skeleton">
                  <b-skeleton width="40%" height="100%"></b-skeleton>
                </h6>
                <h6 v-else>
                  {{ productAttributes.find((item) => item?.title == "Цвет")?.title }}
                </h6>
                <div class="product-modal-colors" v-if="skeleton">
                  <span class="product-modal-color" v-for="colorOption in [1, 2, 3, 4]"
                    ><span><b-skeleton width="100%" height="100%"></b-skeleton></span
                  ></span>
                </div>
                <div class="product-modal-colors" v-else>
                  <span
                    class="product-modal-color"
                    v-for="colorOption in productAttributes.find(
                      (item) => item?.title == 'Цвет'
                    )?.options"
                    :class="{
                      'product-modal-attribut-active':
                        productInner.slug == colorOption?.slug,
                    }"
                    @click="getProductBySlug(colorOption?.slug)"
                    ><span :style="{ 'background-color': colorOption?.title }"></span
                  ></span>
                </div>
                <div v-if="skeleton">
                  <h6><b-skeleton width="30%" height="100%"></b-skeleton></h6>
                  <div class="product-modal-attributs">
                    <div
                      class="product-modal-attribut"
                      v-for="option in [1, 2, 3]"
                      :key="option"
                    >
                      <b-skeleton width="40px" height="100%"></b-skeleton>
                    </div>
                    <!-- <div class="product-modal-attribut">128 GB</div>
                <div class="product-modal-attribut">256 GB</div>
                <div class="product-modal-attribut">1 TBGB</div> -->
                  </div>
                </div>
                <div v-if="productAttributes.length > 0 && !skeleton">
                  <h6>{{ productAttributes[0]?.title }}</h6>
                  <div class="product-modal-attributs">
                    <div
                      class="product-modal-attribut"
                      :class="{
                        'product-modal-attribut-active':
                          productInner.slug == option?.slug,
                      }"
                      v-for="option in productAttributes[0]?.options"
                      :key="option?.id"
                      @click="getProductBySlug(option?.slug)"
                    >
                      {{ option?.title }}
                    </div>
                    <!-- <div class="product-modal-attribut">128 GB</div>
                <div class="product-modal-attribut">256 GB</div>
                <div class="product-modal-attribut">1 TBGB</div> -->
                  </div>
                </div>

                <div class="product-modal-count">
                  <div>
                    <button @click="productCount > 0 && productCount--">-</button
                    >{{ productCount }}
                    <button
                      :class="{ disabled: productInner?.stock == productCount }"
                      @click="productCount < productInner?.stock && productCount++"
                    >
                      +
                    </button>
                  </div>
                  <p>
                    {{ $store.state.translations["main.available-sale"] }}
                    {{ productInner?.stock }}
                  </p>
                </div>
                <nuxt-link
                  class="product-modal-show-more"
                  :to="localePath(`/product/${product?.slug}`)"
                  >{{ $store.state.translations["main.more-products-info"] }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                  >
                    <path
                      d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928933C11.9526 0.538409 11.3195 0.538409 10.9289 0.928933C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9L18 7L1 7L1 9Z"
                      fill="#00B2A9"
                    /></svg
                ></nuxt-link>
                <div class="product-modal-price">
                  <h4 v-if="skeleton">
                    <b-skeleton width="200px" height="100%"></b-skeleton>
                  </h4>
                  <h4 v-else>
                    {{
                      `${productInner?.real_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }}
                    СУМ
                  </h4>
                  <!-- <p>28 880 000 СУМ</p> -->
                </div>
              </div>
            </div>
            <div class="product-modal-buy-mode-btns">
              <div @click="visibleOc = true">
                {{ $store.state.translations["main.boc-title"] }}
              </div>
              <span
                :class="{
                  'disabled-btn': $store.state.cart.find((item) => item.id == product.id),
                }"
                @click="
                  $store.commit('addToCart', {
                    obj: { id: product?.id, count: productCount },
                    name: 'cart',
                  }),
                    (visibleBuy = false)
                "
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.4222 17.3203C5.8442 17.3203 6.1872 17.6633 6.1872 18.0853C6.1872 18.5073 5.8442 18.8493 5.4222 18.8493C5.0002 18.8493 4.6582 18.5073 4.6582 18.0853C4.6582 17.6633 5.0002 17.3203 5.4222 17.3203Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6752 17.3203C17.0972 17.3203 17.4402 17.6633 17.4402 18.0853C17.4402 18.5073 17.0972 18.8493 16.6752 18.8493C16.2532 18.8493 15.9102 18.5073 15.9102 18.0853C15.9102 17.6633 16.2532 17.3203 16.6752 17.3203Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.75 0.75L2.83 1.11L3.793 12.583C3.871 13.518 4.652 14.236 5.59 14.236H16.502C17.398 14.236 18.158 13.578 18.287 12.69L19.236 6.132C19.353 5.323 18.726 4.599 17.909 4.599H3.164"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.126 8.29492H14.899"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model="visibleOc"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="670px"
      @ok="handleOkName"
    >
      <div class="vmodal-header auth-modal oc-modal-header">
        <h5>{{ $store.state.translations["main.boc-title"] }}</h5>
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
      <div class="vmodal-body">
        <div class="oc-product">
          <div class="oc-product-img" v-if="product?.images?.length > 0">
            <img :src="product?.images[0]?.md_img" alt="" />
          </div>

          <div class="oc-product-body">
            <div>
              <h5>{{ product?.info?.name }}</h5>
              <Transition name="oc-bounce">
                <p class="oc-code" v-if="callBox">
                  {{ $store.state.translations["main.product-code"] }}:
                  <span>{{ product?.id }}</span>
                </p>
              </Transition>
            </div>
            <div
              class="d-flex flex-column align-items-center justify-content-center oc-counter-box"
            >
              <div class="oc-product-counter">
                <button @click="formName.count > 1 && formName.count--">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="2"
                    viewBox="0 0 12 2"
                    fill="none"
                  >
                    <path
                      d="M1 2C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0L11 0C11.2652 0 11.5196 0.105357 11.7071 0.292893C11.8946 0.48043 12 0.734784 12 1C12 1.26522 11.8946 1.51957 11.7071 1.70711C11.5196 1.89464 11.2652 2 11 2H1Z"
                      fill="#09454f"
                    />
                  </svg>
                </button>
                {{ formName.count }}
                <button @click="formName.count++">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M5.5 0C5.68234 0 5.8572 0.0724328 5.98614 0.201364C6.11507 0.330295 6.1875 0.505164 6.1875 0.6875V4.8125H10.3125C10.4948 4.8125 10.6697 4.88493 10.7986 5.01386C10.9276 5.1428 11 5.31766 11 5.5C11 5.68234 10.9276 5.8572 10.7986 5.98614C10.6697 6.11507 10.4948 6.1875 10.3125 6.1875H6.1875V10.3125C6.1875 10.4948 6.11507 10.6697 5.98614 10.7986C5.8572 10.9276 5.68234 11 5.5 11C5.31766 11 5.1428 10.9276 5.01386 10.7986C4.88493 10.6697 4.8125 10.4948 4.8125 10.3125V6.1875H0.6875C0.505164 6.1875 0.330295 6.11507 0.201364 5.98614C0.0724328 5.8572 0 5.68234 0 5.5C0 5.31766 0.0724328 5.1428 0.201364 5.01386C0.330295 4.88493 0.505164 4.8125 0.6875 4.8125H4.8125V0.6875C4.8125 0.505164 4.88493 0.330295 5.01386 0.201364C5.1428 0.0724328 5.31766 0 5.5 0Z"
                      fill="#09454f"
                    />
                  </svg>
                </button>
              </div>
              <p>
                {{ product?.real_price }}
                {{ $store.state.translations["main.som-count"] }}
              </p>
            </div>
          </div>
        </div>
        <a-form-model
          v-if="!callBox"
          :model="formName"
          ref="ruleFormNameClick"
          :rules="rulesName"
          layout="vertical"
        >
          <div class="oc-modal-form">
            <a-form-model-item
              class="form-item register-input mb-0 pb-0"
              :label="$store.state.translations['main.enter-your-name']"
              prop="name"
            >
              <a-input
                v-model="formName.name"
                type="text"
                :placeholder="$store.state.translations['main.enter-your-name']"
              />
            </a-form-model-item>
            <a-form-model-item
              class="form-item register-input mb-0 pb-0"
              :label="$store.state.translations['main.your-phone-number']"
              prop="phone_number"
            >
              <a-input
                v-model="formName.phone_number"
                v-mask="'+998 ## ### ## ##'"
                placeholder="+998 (__) ___ __ __"
              />
            </a-form-model-item>
          </div>
        </a-form-model>
      </div>
      <div
        class="vmodal-btn vmodal-btn-height oc-product-btn"
        v-if="!callBox"
        @click="submitOc()"
      >
        {{ $store.state.translations["main.send-info"] }}
      </div>
      <div class="vmodal-forget-password" v-if="!callBox" @click="callBox = true">
        {{ $store.state.translations["main.contact-you"] }}
      </div>
      <a href="tel:+998712077788">
        <Transition name="oc-bounce">
          <div class="oc-product-call" v-if="callBox">
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
              <a href="tel:+998712077788">
                <h4>71 207 77 88</h4>
              </a>
            </div>
          </div>
        </Transition>
      </a>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
    <a-modal
      v-model="visibleSuccess"
      :body-style="{ padding: '32px', borderRadius: '14px' }"
      centered
      :closable="false"
      width="671px"
      @ok="handleOkSuccess"
    >
      <div class="vmodal-header">
        <h5>{{ $store.state.translations["main.new-comment"] }}</h5>
        <span @click="handleOkSuccess"
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
      <div class="vmodal-body comment-modal-success">
        <img src="../../assets/images/modal-success.png" alt="" />
        <p>{{ $store.state.translations["main.comment-succes-text"] }}</p>
      </div>
      <div class="vmodal-btn" @click="handleOkSuccess">
        {{ $store.state.translations["main.comment-succes-btn"] }}
      </div>
      <template slot="footer"> <h3></h3></template>
    </a-modal>
  </div>
</template>
<script>
import "swiper/swiper-bundle.min.css";
export default {
  props: ["product"],
  data() {
    return {
      fullRating: 5,
      count: 1,
      productCount: 1,
      visibleSuccess: false,
      visibleOc: false,
      callBox: false,
      visible: false,
      byMode: false,
      visibleBuy: false,
      productAttributes: [],
      productInner: [],
      skeleton: false,
      star: require("../../assets/svg/product-star.svg?raw"),
      coin: require("../../assets/svg/product-coin.svg?raw"),
      comp: require("../../assets/svg/product-comp.svg?raw"),
      buy: require("../../assets/svg/product-buy.svg?raw"),
      like: require("../../assets/svg/card-like.svg?raw"),
      view: require("../../assets/svg/view.svg?raw"),
      activeHeart: require("../../assets/svg/active-heart.svg?raw"),
      formName: {
        name: "",
        phone_number: "",
        product_id: null,
        count: 1,
      },
      rulesName: {
        name: [
          {
            required: true,
            message: "Ismingizni kiriting",
            trigger: "change",
          },
        ],
        phone_number: [
          {
            required: true,
            message: "Telefon raqamingizni kiriting",
            trigger: "change",
          },
          { min: 9, message: "Length should be 9", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    handleOkSuccess() {
      this.visibleSuccess = false;
    },
    handleOkName() {
      this.visibleOc = false;
    },
    getImgUrl(props, i) {
      return props[i].md_img;
    },
    handleOkBuy() {
      this.visibleBuy = false;
    },
    handleOk() {
      this.visible = false;
    },

    submitOc() {
      const data = {
        ...this.formName,
        phone_number: this.formName.phone_number.split(" ").join("").replace("+", ""),
        product_id: this.product.id,
      };
      this.$refs["ruleFormNameClick"].validate((valid) => {
        if (valid) {
          this.__POST_ORDER(data);
        } else {
          return false;
        }
      });
    },
    getProductBySlug(slug) {
      this.__GET_PRODUCTS_BY_SLUG(slug);
    },
    async __POST_ORDER(formData) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postClickOrder", formData);
        this.visibleOc = false;
        // this.compToast = true;
        this.visibleSuccess = true;
      } catch (e) {
        // console.log(e);
      }
    },
    productPrice(product) {
      if (product?.discount?.amount) {
        return product?.real_price - product?.discount?.amount;
      } else if (product?.discount?.percent) {
        return (product?.real_price / 100) * product?.discount?.percent;
      } else {
        return product?.real_price;
      }
    },
    async __GET_PRODUCTS_BY_SLUG(slug) {
      this.skeleton = true;
      const productData = await this.$store.dispatch("fetchProducts/getProductsBySlug", {
        id: slug,
        params: {
          headers: {
            lang: this.$i18n.locale,
          },
        },
      });

      this.productInner = productData.product;
      this.productAttributes = productData?.attributes;
      this.skeleton = false;
    },
    addToCart(event, product) {
      // var xPos = event.clientX;
      // var yPos = event.clientY;
      // let element = document.getElementById("cart");
      // let x = element.offsetLeft;
      // let y = element.offsetTop;
      this.$store.commit("addToCart", {
        obj: { id: product?.id, count: this.productCount },
        name: "cart",
      });
    },
  },
  watch: {
    visibleBuy(val) {
      if (val) {
        this.__GET_PRODUCTS_BY_SLUG(this.product.slug);
      }
    },
    visibleOc(val) {
      if (val) {
        this.visible = false;
        this.visibleBuy = false;
      } else {
        this.count = 1;
      }
    },
  },
};
</script>
<style lang="css">
@import "../../assets/css/components/ProductCard.css";
@import "../../assets/css/pages/product.css";
.product-show-modal-carousel {
  max-width: 562px;
}
.product-show-modal-carousel .ant-carousel {
  height: 477px;
}
.product-show-modal-carousel-height .ant-carousel {
  height: 463px !important;
}
.ant-carousel .slick-list,
.ant-carousel .slick-slider {
  height: 100%;
}
.ant-carousel .slick-list,
.ant-carousel .slick-track,
.ant-carousel .slick-track div {
  height: 100%;
}
.ant-carousel .slick-slide {
  border: 1px solid #eaeaea;
  border-radius: 12px;
  overflow: hidden;
}
.ant-carousel .slick-slide img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.ant-carousel .slick-dots {
  height: auto;
}
.ant-carousel .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
}
.ant-carousel .slick-thumb {
  bottom: -102px;
  display: flex !important;
}
.ant-carousel .slick-thumb .slick-active {
  border: 1.5px solid #09454f;
}
.ant-carousel .slick-thumb li {
  width: 86px;
  height: 86px;
  border: 1.5px solid #eaeaea;
  border-radius: 9.06319px;
  margin-right: 16px;
}
.ant-carousel .slick-thumb li a {
  height: 100%;
  width: 100%;
}
.ant-carousel .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  object-fit: contain;
}
.ant-carousel .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
.product-card-header {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.product-card-header:hover .pc-img-container {
  transform: scale(1.1);
}
.hover-btns {
  cursor: pointer;
  position: absolute;
  transition: 0.3s;
  right: 12px;
  background: #ffffff;
  border-radius: 6.00364px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.06);
}
.hover-btns {
  display: flex;
  align-items: center;
}
.hover-btns:first-child {
  top: 12px;
}
.like-inactive:hover svg path {
  fill: #ff2525;
}
/* .like-active {
  display: none;
} */
/* .hover-btns:hover .like-inactive {
  display: none;
} */
/* .hover-btns:hover .like-active {
  display: flex;
} */
.hover-btns:hover svg path {
  transition: 0.3s;
}
.hover-btns:hover > svg path {
  fill: var(--color_green);
}
.active-comparison > svg path {
  fill: var(--color_green);
}
/* .hover-btns:hover svg path {
  fill: #fff;
} */
.pc-img-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.pc-img-container img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.hover-btns:nth-child(2) {
  transition-delay: 0.1s;
  top: 48px;
}
.product-card-header:hover .fast_show {
  bottom: 90px;
}
.fast_show {
  position: absolute;
  padding: 12px 16px 12px 16px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 27px rgba(2, 1, 5, 0.08);
  border-radius: 19px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #09454f;
  z-index: 10;
  bottom: -100%;
  transition: 0.3s linear;
  cursor: pointer;
}
.product-show-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  position: relative;
}

.product-show-modal-header span {
  cursor: pointer;
  padding: 20px;
  position: absolute;
  right: -20px;
}
.product-show-modal-header h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}
.product-show-modal-body {
  display: grid;
  grid-template-columns: 5.6fr 3.9fr;
  grid-gap: 24px;
}
.product-modal-like-comp {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
}
.product-modal-like-comp > span {
  display: flex;
  align-items: center;
  padding: 0 14px;
  border: 0.797059px solid #eaeaea;
  border-radius: 7.97059px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 510;
  font-size: 14px;
  line-height: 17px;
  color: #c7c7c7;
  margin-right: 16px;
  height: 33px;
  cursor: pointer;
}
.product-modal-like-comp > span > span {
  margin-right: 8px;
}
.product-modal-like-comp > span > span svg path {
  fill: #c7c7c7;
}
.product-modal-characteristic {
  margin-bottom: 21px;
  margin-top: 16px;
}
.product-modal-characteristic h4 {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 21px;
}
.product-show-modal-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-modal-characteristic div {
  padding-bottom: 9.6px;
  margin-bottom: 9.6px;
  border-bottom: 0.603385px dashed rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
.product-modal-characteristic div:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}
.product-modal-characteristic div p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 300;
  font-size: 14.4812px;
  line-height: 17px;
  color: #000000;
}
.product-modal-show-more {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #00b2a9;
}
.product-modal-show-more svg {
  margin-left: 9.7px;
}
.product-show-modal-header2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-show-modal-header2 {
  margin-bottom: 34px;
  position: relative;
}
.product-show-modal-header2 span {
  position: absolute;
  cursor: pointer;
  padding: 10px;
  right: -10px;
}
.product-show-modal-header2 h3 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
}
.product-show-modal-header2 span svg {
  height: 13px;
}
.product-modal-attribut-block {
  padding-top: 22px;
  margin-top: 8px;
  border-top: 1px solid #eaeaea;
}
.product-modal-attribut-block h6 {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-bottom: 13px;
}
.product-modal-colors {
  display: flex;
  margin-bottom: 24px;
}
.product-modal-color {
  width: 51.5px;
  height: 51.5px;
  background: #ffffff;
  border: 0.606767px solid #dedede;
  border-radius: 4.85414px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  cursor: pointer;
}
.product-modal-color span {
  content: "";
  position: absolute;
  width: 44px;
  height: 44px;
  /* background: #fbc100; */
  border-radius: 4.85414px;
}
.product-modal-attributs {
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.product-modal-attribut {
  padding: 8.8px 23px;
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 11.3117px;
  line-height: 13px;
  color: #000000;
  background: #ffffff;
  border-radius: 5.02743px;
  margin-right: 8px;
  cursor: pointer;
}
.product-modal-attribut-active {
  border: 0.628429px solid #04babe;
}
.product-modal-count {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.product-modal-count div {
  border: 1px solid #f2f2fa;
  border-radius: 4px;
  max-width: 128px;
  width: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #020105;
  padding: 12px 16px;
}
.product-modal-count div button {
  font-size: 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
.product-modal-count p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5d5d5f;
  margin-left: 16px;
}
.product-modal-price {
  display: flex;
  align-items: flex-end;
  margin-top: 17px;
  margin-bottom: 16px;
}
.product-modal-price h4 {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #020105;
}
.product-modal-price p {
  font-family: var(--SB_400);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #5d5d5f;
  margin-left: 25px;
}
.product-modal-buy-mode-btns {
  display: grid;
  grid-template-columns: auto 56px;
  grid-gap: 16px;
}
.product-modal-buy-mode-btns div {
  font-family: var(--SB_500);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #09454f;
  border: 1px solid #09454f;
  border-radius: 10px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
}
.product-modal-buy-mode-btns span {
  background: #09454f;
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.disabled-btn {
  pointer-events: none;
}
.product_badges {
  position: absolute;
  bottom: 5px;
  left: 1px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
}
.product_promotions {
  position: absolute;
  top: 5px;
  left: 1px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}
.product_badges_item {
  transform: rotate(-2.91deg);
  padding: 6px 6px;
  display: inline-flex;
}
.product_discount_item {
  transform: rotate(-2.91deg);
  padding: 2px 6px;
  display: inline-flex;
}
.product_discount_item p {
  font-family: var(--SB_700);
  font-style: normal;
  font-weight: 700;
  font-size: 23.8228px;
  line-height: 30px;
  color: #ffffff;
  transform: rotate(2.5deg);
}
.product_badges_item p {
  font-family: var(--SB_600);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  transform: rotate(2.5deg);
}
.default-thumb li:last-child {
  display: none;
}
@media screen and (max-width: 1024px) {
  .product-card-header {
    height: 150px;
  }
  .product-card-body p {
    margin-top: 14px;
  }
  .product-card-price h4 {
    font-size: 14px !important;
  }
  .product-card-price {
    margin-top: 14px;
    margin-bottom: 18px;
  }
  .product-discount {
    display: none;
  }
  .product-card-footer .to-basket-btn span,
  .product-card-footer .to-basket-btn {
    font-size: 12px;
  }
  .product-show-modal-body {
    grid-template-columns: repeat(1, 1fr);
  }
  .product-show-modal-carousel {
    width: 100% !important;
    box-sizing: border-box;
  }
  .fast_show {
    display: none;
  }
  .product-card-header:hover .pc-img-container {
    transform: scale(1);
  }
}

.product-card button {
  padding: 20px;
  border: none;
  background: lighten(#292d48, 65);
  position: relative;
  outline: none;
  border-radius: 5px;
  color: #292d48;
  font-size: 18px;
}
.sendtocart .cart-item {
  display: block;
  animation: xAxis 1s forwards cubic-bezier(1, 0.44, 0.84, 0.165);
}
.sendtocart .cart-item::before {
  animation: yAxis 1s alternate forwards cubic-bezier(0.165, 0.84, 0.44, 1);
}
.cart-item {
  position: absolute;
  height: 24px;
  width: 24px;
  top: -10px;
  right: -10px;
}
.cart-item::before {
  content: "1";
  display: block;
  line-height: 24px;
  height: 24px;
  width: 24px;
  font-size: 12px;
  font-weight: 600;
  background: #2bd156;
  color: white;
  border-radius: 20px;
  text-align: center;
}
.promotion-img {
  display: flex;
  width: 60px;
  /* height: 60px; */
}
.promotion-name {
  font-family: var(--SB_400);
  display: flex;
  line-height: 21px;
  font-size: 0.75rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 4px;
}
.promotion-img img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
@keyframes xAxis {
  0% {
    transform: translateX(calc(50vw - 105px));
  }
}

@keyframes yAxis {
  100% {
    transform: translateY(calc(-50vh + 75px));
  }
}

@keyframes shakeCart {
  25% {
    transform: translateX(6px);
  }
  50% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
.cart-anim {
  display: flex;
  width: 40px;
  height: 40px;
  /* background-color: red; */
  position: fixed;
  left: 400px;
  top: 600px;
  z-index: 10;
  transition: 0.3s;
}
</style>
