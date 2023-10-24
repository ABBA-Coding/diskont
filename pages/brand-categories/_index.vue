<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb">
          <nuxt-link :to="localePath('/')">{{
            $store.state.translations["main.home-page"]
          }}</nuxt-link>
          <nuxt-link :to="localePath('/')"> {{ brand?.name }} </nuxt-link>
        </div>
        <div class="d-flex categories-page-title justify-content-between">
          <div class="d-flex justify-content-between">
            <MainTitle :title="brand?.name" class="mb-0" />
            <span
              >{{ totalPage }}
              {{ $store.state.translations["category.product-count"] }}</span
            >
          </div>
          <a-select
            v-model="sort"
            class="categories-filter-select mb-0"
            placeholder="Select good person"
            style="width: 252px"
          >
            <a-select-option
              v-for="item in sortItems"
              :key="item?.value"
              :label="item.label"
              :value="item.value"
              >{{ item.label }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="categories-page-inner-grid">
        <div class="categories-filter-list">
          <div class="categories-list">
            <h5>{{ $store.state.translations["main.categories"] }}</h5>
            <ul class="brand-list">
              <li v-for="brand in brandsAll" :key="brand?.id">
                <span
                  @click="$router.push(localePath(`/brand-categories/${brand?.slug}`))"
                  :class="{ 'active-brand': $route.params.index == brand?.slug }"
                  >{{ brand?.name }}</span
                >
              </li>
            </ul>
            <!-- <span
              class="categories-list_show-more"
              @click="showAll"
              v-if="brands?.length < brandsAll?.length"
              >{{ $store.state.translations["main.show-more"] }}</span
            > -->
          </div>
          <div class="filter-range">
            <h5>{{ $store.state.translations["category.price"] }}</h5>
            <a-slider
              range
              :step="10000"
              :max="20000000"
              :min="10000"
              v-model="sliderValue"
              :default-value="[10000, 20000000]"
              @afterChange="onAfterChange"
            />
            <div class="filter-slider-inputs">
              <span>
                <input
                  type="text"
                  v-model="sliderValue[0]"
                  placeholder="от"
                  @keyup.enter="onAfterChange(sliderValue)"
                />
                <span></span>
              </span>
              <span>
                <input
                  type="text"
                  placeholder="до"
                  v-model="sliderValue[1]"
                  @keyup.enter="onAfterChange(sliderValue)"
                />
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div class="categories-products">
          <div class="d-flex justify-content-end w-100"></div>
          <div class="categories-card-grid" v-if="loading">
            <div
              class="empty-card"
              v-for="product in [1, 2, 4, 5, 6, 7, 8]"
              :key="product"
            >
              <b-skeleton width="100%" height="100%"></b-skeleton>
            </div>
          </div>
          <div class="categories-card-grid" v-if="products.length > 0 && !loading">
            <ProductCard
              v-for="product in products"
              :product="{
                ...product,
                info: {
                  name: product?.name,
                },
              }"
              :key="product?.id"
            />
          </div>
          <div class="comments-empty" v-else>
            <nuxt-img format="webp" src="/comments-empty.png" alt="" />
            <h4>{{ $store.state.translations["category.product-not-found"] }}</h4>
          </div>
          <div class="categories-products-show-more" v-if="false">
            {{ $store.state.translations["main.show-more"] }} 44
          </div>
          <div class="products-pagination" v-if="totalPage > params.pageSize">
            <a-pagination
              size="small"
              v-model.number="current"
              :total="totalPage"
              :page-size.sync="params.pageSize"
            />
          </div>
        </div>
      </div>
      <!-- <div class="categories-page-inner-grid">
        <div></div>
        <div class="categories-page-info">
          <h5>
            ШИРОКИЙ АССОРТИМЕНТ МЕБЕЛИ В ТАШКЕНТЕ ПРЕДСТАВЛЕН В ИНТЕРНЕТ-МАГАЗИНЕ DISKONT
            (ТАШКЕНТ, УЗБЕКИСТАН) ПО ВЫГОДНЫМ ЦЕНАМ ОТ ПРОИЗВОДИТЕЛЯ.
          </h5>
          <p>
            DISKONT предлагает: мебель для гостиной, шкафы и комоды, кровати и матрасы,
            мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для офиса.
          </p>
          <p>
            В нашем интернет-магазине представлен широкий ассортимент предметов мебели на
            любой вкус и бюджет. Мы предлагаем удобный выбор непосредственно на сайте,
            минуя долгие утомительные разъезды по множеству мебельных магазинов и рынков
            Ташкента, где можно купить хорошую недорогую мебель. Но! Поскольку их
            ассортимент сильно отличается, и вы вынуждены тратить время и силы на
            перемещения из одной точки Ташкента в другую. А на DISKONT собраны лучшие
            предложения многих производителей по выгодным ценам! Покупая мебель у нас вы
            гарантированно получаете качественный товар, оперативную доставку и сборку
            мебели у вас дома.
          </p>
          <p>
            Модельный ряд мебели пополняется практически ежедневно, следите за нашими
            новостями и подписывайтесь на нашу рассылку в форме ниже.
          </p>
          <p>
            Условия доставки вашего заказа: мы доставляем заказанные товары по Ташкенту и
            в радиусе 5 км от большой кольцевой дороги.
          </p>
          <p>
            Форма оплаты заказа: вы производите оплату своего заказа при его получении
            наличными, пластиковой картой или перечислением (просим уточнить возможность
            безналичной оплаты у консультанта).
          </p>
          <p>
            Оформить заказ можно через Telegram или позвонив в нашу единую службу
            поддержки по номеру 200 7 002. Добро пожаловать в интернет-магазин tovarlar
            для дома DISKONT!
          </p>
        </div>
      </div> -->
    </div>
    <div class="categories-app-banner-container">
      <!--<div class="container_xl">
        <CategoriesAppCard />
      </div>-->
    </div>
  </div>
</template>
<script>
import MainTitle from "../../components/Main-title.vue";
import CategoriesCard from "../../components/cards/CategoriesCard.vue";
import ProductCard from "../../components/cards/ProductCard.vue";
import CategoriesAppCard from "../../components/categories/categories-app-banner.vue";
import CategoriesInnerBannerCarousel from "../../components/categories/categoriesInner-banner-carousel.vue";
import CategoriesInnerBanner from "../../components/categories/categoriesInner-banner.vue";
import CategoriesTabCarousel from "../../components/categories/categoriesInner-tab-carousel.vue";
import global from "../../mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      sliderValue: [10000, 10000000],
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../../assets/svg/selected-filter-x.svg?raw"),
      sort: "all",
      disabled: false,
      loading: false,
      products: [],
      totalPage: 0,
      // brands: [],
      // brandProducts: [],
      // brandsAll: [],
      // brand: {},
      sortItems: [
        {
          value: "all",
          label: "Все товары",
        },
        {
          value: "popular",
          label: "По популярности",
        },
        {
          value: "cheap",
          label: "Подешевле",
        },
        {
          value: "expensive",
          label: "Подороже",
        },
      ],
    };
  },
  async asyncData({ store, params, i18n }) {
    store.commit("loaderHandler", true);
    const [brandsData, brandData] = await Promise.all([
      store.dispatch("fetchBrands/getBrands"),
      store.dispatch("fetchBrands/getBrandsBySlug", {
        id: params.index,
        params: {
          headers: {
            lang: i18n.locale,
          },
        },
      }),
    ]);
    let brands = [...brandsData.brands];
    let brandsAll = brandsData.brands;
    brands = [...brandsData.brands];
    brands = [...brands.splice(0, 6)];
    let brand = brandData.brand;
    setTimeout(() => {
      store.commit("loaderHandler", false);
    },0)
    return {
      brandsAll,
      brands,
      brand,
    };
  },
  mounted() {
    this.getFirstData("__GET_PRODUCTS");
    this.sortItems = [
      {
        value: "all",
        label: this.$store.state.translations["category.all"],
      },
      {
        value: "popular",
        label: this.$store.state.translations["category.popular"],
      },
      {
        value: "cheap",
        label: this.$store.state.translations["category.cheap"],
      },
      {
        value: "expensive",
        label: this.$store.state.translations["category.expensive"],
      },
    ];
  },
  methods: {
    async __GET_PRODUCTS() {
      this.loading = true;
      const data = await this.$store.dispatch("fetchProducts/getProducts", {
        params: { ...this.$route.query, brand: this.$route.params.index },
      });
      this.totalPage = data?.products?.total;
      this.products = data?.products?.data;
      this.loading = false;
    },
    onChange(value) {
      // console.log("change: ", value);
    },
    async onAfterChange(value) {
      if (
        !this.$route.query.max_price ||
        this.$route.query.min_price != value[0] ||
        this.$route.query.max_price != value[1]
      ) {
        let query = {
          ...this.$route.query,
          min_price: value[0],
          max_price: value[1],
        };
        await this.$router.replace({
          path: this.$route.path,
          query: query,
        });
        this.__GET_PRODUCTS();
      }
    },
    showAll() {
      this.brands = this.brandsAll;
    },
  },
  watch: {
    async current(val) {
      this.changePagination(val, "__GET_PRODUCTS");
    },
    async sort(val) {
      let filterObj = {
        ...this.$route.query,
        sort: val,
      };
      if (val == "all") {
        delete filterObj["sort"];
        await this.$router.replace({
          path: this.$route.path,
          query: { ...filterObj },
        });
      } else {
        if (this.$route.query.sort != filterObj.sort) {
          await this.$router.replace({
            path: this.$route.path,
            query: { ...filterObj },
          });
        }
        this.__GET_PRODUCTS({ ...this.$route.query });
      }
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
    CategoriesInnerBannerCarousel,
    CategoriesInnerBanner,
    CategoriesTabCarousel,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
.active-brand {
  color: #09454f !important;
}
.brand-list {
  max-height: 500px;
  overflow-y: scroll;
}
</style>
