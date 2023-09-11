<template lang="html">
  <div class="page-container">
    <div class="container_xl">
      <div class="page-breadcrumb">
        <nuxt-link :to="localePath('/')">{{
          $store.state.translations["main.home-page"]
        }}</nuxt-link>
        <nuxt-link :to="localePath('/')"> {{ promotion?.name }} </nuxt-link>
      </div>
      <div class="d-flex page-container-title">
        <MainTitle :title="promotion?.name" />
      </div>
      <div class="stock-page__container">
        <div class="stock-page__image">
          <img :src="promotion?.md_banner" alt="" />
        </div>
        <div class="stock-page__static">
          <p>
            Akisya davomiyligi:
            <span
              >{{ moment(promotion?.start_date).format("DD.MM") }} dan
              {{ moment(promotion?.end_date).format("DD.MM") }} gacha</span
            >
          </p>
          <p>Akisya bo’ladigan filiallar: <span>Barcha filiallar</span></p>
        </div>
        <div class="stock-page__info" v-html="promotion?.desc"></div>
      </div>
      <div class="d-flex justify-content-between align-items-end">
        <ProductListTitle title="Aksiyadagi mahsulotlar" />
      </div>
      <div class="categories-products categories-page-inner-grid">
        <div class="categories-filter-list d-block">
          <div>
            <h5 @click="dropAction()">
              {{ $store.state.translations["main.categories"] }}
              <span v-html="dropArrow" :class="{ rotate180: activeDrop }"></span>
            </h5>
            <div :class="{ 'height-auto': activeDrop }" class="list-drop-board">
              <div
                v-for="firstCategory in allCategories"
                :key="firstCategory?.id"
                class="categories-list-box"
              >
                <nuxt-link
                  :to="
                    localePath(
                      `/stock/${$route.params.index}?category=${firstCategory?.slug}`
                    )
                  "
                  :class="{
                    'active-category': $route.query?.category == firstCategory?.slug,
                  }"
                  class="first-category"
                  >{{ firstCategory?.name }}</nuxt-link
                >
                <ul
                  class="categories-list-inner"
                  v-if="
                    (firstCategory?.children.length > 0 &&
                      firstCategory?.slug == $route.query?.category) ||
                    firstCategory.children.find(
                      (item) => item.slug == $route.query?.category
                    ) ||
                    firstCategory.children.find((item) =>
                      item.children.find((elem) => elem.slug == $route.query?.category)
                    )
                  "
                >
                  <li
                    v-for="middCategory in firstCategory?.children"
                    :key="middCategory?.id"
                  >
                    <span
                      :class="{
                        'active-category': $route.query?.category == middCategory?.slug,
                      }"
                      @click="
                        $router.push(
                          `/stock/${$route.params.index}?category=${middCategory?.slug}`
                        )
                      "
                      >{{ middCategory?.name }}</span
                    >
                    <div
                      class="child-categories-list"
                      v-if="
                        middCategory?.slug == $route.query?.category ||
                        middCategory?.children.find(
                          (item) => item.slug == $route.query?.category
                        )
                      "
                    >
                      <nuxt-link
                        v-if="middCategory?.children.length > 0"
                        v-for="childs in middCategory?.children"
                        :to="
                          localePath(
                            `/stock/${$route.params.index}?category=${childs?.slug}`
                          )
                        "
                        class="mb-0"
                        :class="{
                          'active-category': $route.query?.category == childs?.slug,
                        }"
                        :key="childs.id"
                        >{{ childs?.name }}</nuxt-link
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <span class="categories-list_show-more">{{ $store.state.translations["main.show-more"] }}</span> -->
          </div>
        </div>
        <div class="categories-card-grid" v-if="promotion?.products.length > 0">
          <ProductCard
            v-for="product in promotion?.products"
            :key="product.id"
            :product="{
              ...product,
              ...product?.default_product,
            }"
          />
        </div>
        <div class="comments-empty" v-else>
          <img src="../../assets/images/comments-empty.png" alt="" />
          <h4>{{ $store.state.translations["category.product-not-found"] }}</h4>
        </div>
        <div class="categories-products-show-more" v-if="promotion?.products.length > 30">
          {{ $store.state.translations["main.show-more"] }} 44
        </div>
        <div class="products-pagination" v-if="promotion?.products.length > 30">
          <a-pagination size="small" :default-current="6" :total="500" />
        </div>
      </div>
      <!-- <div class="product-grid stock-page__products">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div> -->
    </div>
  </div>
</template>
<script>
import ProductCard from "../../components/cards/ProductCard.vue";
import ProductListTitle from "../../components/ProductList-title.vue";
import moment from "moment";
export default {
  data() {
    return {
      activeDrop: false,
      dropArrow: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 20 12"
                    fill="none"
                  >
                    <path
                      d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.67301 17.5592 0.67301 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.67301 1.64932 0.67301 1.16116 1.16117C0.67301 1.64932 0.67301 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z"
                      fill="black"
                    /></svg
                >`,
    };
  },
  async asyncData({ store, params, i18n }) {
    const [promotionsData] = await Promise.all([
      store.dispatch("fetchPromotions/getPromotionsBySlug", {
        slug: params.index,
        params: {
          headers: {
            lang: i18n.locale,
          },
        },
      }),
    ]);
    const promotion = promotionsData?.promotion;
    const allCategories = promotionsData?.categories;

    return {
      promotion,
      allCategories,
    };
  },
  computed: {
    currentQuery() {
      return this.$route.query?.category;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPromotions/getPromotionsBySlug", {
      slug: this.$route.params.index,
      params: {
        headers: {
          lang: this.$i18n.locale,
        },
      },
    });
  },

  watch: {
    async currentQuery(val) {
      const [promotionsData] = await Promise.all([
        this.$store.dispatch("fetchPromotions/getPromotionsBySlug", {
          slug: this.$route.params.index,
          params: {
            params: {
              ...this.$route.query,
            },
            headers: {
              lang: this.$i18n.locale,
            },
          },
        }),
      ]);
      this.promotion = promotionsData?.promotion;
      this.allCategories = promotionsData?.categories;
    },
  },
  methods: {
    moment,
    dropAction() {
      this.activeDrop = !this.activeDrop;
    },
  },
  components: { ProductListTitle, ProductCard },
};
</script>
<style lang="css">
@import "../../assets/css/pages/comparison.css";
@import "../../assets/css/pages/main-page.css";
@import "../../assets/css/pages/categories.css";

.stock-page__container {
  width: 85%;
  margin-bottom: 48px;
}
.stock-page__image {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  max-height: 592px;
}
.stock-page__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stock-page__static {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 48px;
}
.stock-page__static p {
  color: var(--grey-64, #5d5d5f);
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-drop-board {
  max-height: 0;
  overflow: hidden;
  position: relative;
  transition: max-height 0.25s ease-out;
}
.stock-page__static p span {
  color: #000;
  font-family: var(--SB_500);
  font-size: 24px;
  font-style: normal;
  line-height: 24px;
}
.stock-page__info {
  margin-top: 48px;
}
.stock-page__info p {
  color: var(--grey-64, #5d5d5f);
  font-family: var(--SB_400);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.stock-page__products {
  margin-bottom: 300px;
}
@media (max-width: 1320px) {
  .stocks-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1320px) {
  .stocks-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 992px) {
  .stocks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 576px) {
  .stocks-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .stock-page__container {
    width: 100%;
  }
  .stocks-banner {
    max-height: 160px;
    height: 160px;
    border-radius: 20px;
  }
  .stock-page__static p {
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    gap: 5px;
  }
  .stock-page__static p span {
    font-size: 16px;
    line-height: 130%;
  }
  .stock-page__static {
    margin-top: 32px;
  }
  .stock-page__info {
    margin-top: 32px;
  }
  .stock-page__info p {
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }
}
@media (max-width: 512px) {
  .product_list-title h2 {
    font-size: 18px;
  }
  .stock-page__static {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .categories-card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
