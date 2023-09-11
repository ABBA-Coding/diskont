<template lang="html">
  <div class="categories-page-inner">
    <div class="container_xl">
      <div>
        <div class="page-breadcrumb" v-if="loading">
          <b-skeleton width="20%"></b-skeleton>
        </div>
        <div class="page-breadcrumb" v-else>
          <nuxt-link :to="localePath('/')">{{
            $store.state.translations["main.home-page"]
          }}</nuxt-link>
          <nuxt-link :to="localePath('/')">
            {{ showcases?.name }}
          </nuxt-link>
        </div>
        <div class="d-flex justify-content-between align-items-end showcases_top">
          <div class="d-flex categories-page-title mb-0">
            <b-skeleton width="200px" v-if="loading"></b-skeleton>
            <MainTitle :title="showcases?.name" class="mb-0" v-else />
            <!-- <span class="align-items-end">{{ showcases?.products?.length }} {{ $store.state.translations["category.product-count"] }}</span> -->
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
          <div class="filter-range">
            <h5>{{ $store.state.translations["category.price"] }}</h5>
            <a-slider
              range
              :step="10000"
              :max="20000000"
              :min="10000"
              v-model="sliderValue"
              :default-value="[10000, 20000000]"
              @change="onChangeSlider"
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
        <div class="categories-products showcases_products">
          <div class="categories-card-grid" v-if="loading">
            <div
              class="empty-card"
              v-for="product in [1, 2, 4, 5, 6, 7, 8]"
              :key="product"
            >
              <b-skeleton width="100%" height="100%"></b-skeleton>
            </div>
          </div>
          <div
            class="categories-card-grid"
            v-if="showcases?.products?.length > 0 && !loading"
          >
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="comments-empty" v-else>
            <img src="../../assets/images/comments-empty.png" alt="" />
            <h4>{{ $store.state.translations["category.product-not-found"] }}</h4>
          </div>
          <!-- <div
            class="categories-products-show-more"
            v-if="showcases?.products?.length > 30"
          >
            {{ $store.state.translations["main.show-more"] }} 44
          </div> -->
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
      <div class="categories-page-inner-grid">
        <span></span>
        <div>
          <!-- <div class="categories-page-info">
            <h5>
              ШИРОКИЙ АССОРТИМЕНТ МЕБЕЛИ В ТАШКЕНТЕ ПРЕДСТАВЛЕН В ИНТЕРНЕТ-МАГАЗИНЕ
              DISKONT (ТАШКЕНТ, УЗБЕКИСТАН) ПО ВЫГОДНЫМ ЦЕНАМ ОТ ПРОИЗВОДИТЕЛЯ.
            </h5>
            <p>
              DISKONT предлагает: мебель для гостиной, шкафы и комоды, кровати и матрасы,
              мягкую мебель, стулья, кресла и столы, садовую мебель и мебель для офиса.
            </p>
            <p>
              В нашем интернет-магазине представлен широкий ассортимент предметов мебели
              на любой вкус и бюджет. Мы предлагаем удобный выбор непосредственно на
              сайте, минуя долгие утомительные разъезды по множеству мебельных магазинов и
              рынков Ташкента, где можно купить хорошую недорогую мебель. Но! Поскольку их
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
              Условия доставки вашего заказа: мы доставляем заказанные товары по Ташкенту
              и в радиусе 5 км от большой кольцевой дороги.
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
          </div> -->
        </div>
      </div>
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
import global from "../../mixins/global";
export default {
  mixins: [global],
  data() {
    return {
      sortItems: [
        {
          value: "all",
          label: "Barchasi",
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
      loading: false,
      showAllAtr: [],
      sliderValue: [10000, 10000000],
      arrow: require("../../assets/svg/dropdown-icon.svg?raw"),
      filterX: require("../../assets/svg/selected-filter-x.svg?raw"),
      sort: "all",
      disabled: false,
      filterOptions: [],
      products: [],
      showcases: [],
      atr: [],
      atributDrop: [],
    };
  },
  async asyncData({ params, query, store, i18n }) {
    const [showcasesData] = await Promise.all([
      store.dispatch("fetchShowcases/getShowcasesBySlug", {
        slug: params.slug,
        params: {
          params: { ...query },
          headers: {
            lang: i18n.locale,
          },
        },
      }),
    ]);
    const showcases = showcasesData?.showcase;
    console.log(showcases);
    return {
      showcases,
    };
  },
  mounted() {
    this.getFirstData("__GET_PRODUCTS");
  },
  computed: {
    filterAtributs() {
      let arr = [];
      if (this.$route.query?.attributes) {
        arr = this.$route.query?.attributes.split(",");
      }
      return arr.length;
    },
  },
  methods: {
    showAllAtributs(id) {
      if (!this.showAllAtr.includes(id)) {
        this.showAllAtr.push(id);
      }
    },

    atributDropAction(id) {
      if (!this.atributDrop.includes(id)) {
        this.atributDrop.push(id);
      } else {
        this.atributDrop = this.atributDrop.filter((item) => item != id);
      }
    },
    onChangeSlider(val) {},
    clearFilter() {
      this.$router.replace({
        path: this.$route.path,
        query: {},
      });
      this.filterOptions = [];
    },
    async __GET_PRODUCTS() {
      this.loading = true;
      const data = await this.$store.dispatch("fetchProducts/getProducts", {
        params: { ...this.$route.query, showcase: this.$route.params.slug },
      });
      this.totalPage = data?.products?.total;
      this.products = data?.products?.data;
      this.loading = false;
    },
    async onChange(value) {
      let atr = [];
      if (this.$route.query.attributes) {
        atr = await this.$route.query.attributes.split(",");
      }
      if (atr.includes(`${value}`)) {
        atr.splice(atr.indexOf(`${value}`), 1);
      } else {
        atr.push(value);
      }
      let string = await atr.join(",");
      if (!this.$route.query.attributes || this.$route.query.attributes != string) {
        let query = { ...this.$route.query, attributes: string };
        await this.$router.replace({
          path: this.$route.path,
          query: query,
        });
      }
      this.filterOptions = [];
      if (this.$route.query.attributes) {
        let filterAtr = this.$route.query.attributes.split(",");
        filterAtr.forEach((item) => {
          let findItem = this.options.find((elem) => elem.id == item);
          this.filterOptions.push(findItem);
        });
      }
    },
    async deleteFilterItem(id) {
      let atr = await this.$route.query.attributes.split(",");
      atr.splice(atr.indexOf(`${id}`), 1);
      let query = { ...this.$route.query, attributes: atr.join(",") };

      await this.$router.replace({
        path: this.$route.path,
        query: query,
      });
      if (!Object.keys(query).includes("attributes")) {
        this.filterOptions = [];
      }
    },
    async onAfterChange(value) {
      if (
        !this.$route.query.max_price ||
        this.$route.query.min_price != value[0] ||
        this.$route.query.max_price != value[1]
      ) {
        let query = { ...this.$route.query, min_price: value[0], max_price: value[1] };
        await this.$router.replace({
          path: this.$route.path,
          query: query,
        });
        this.__GET_PRODUCTS();
      }
    },
  },
  watch: {
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
    async current(val) {
      this.changePagination(val, "__GET_PRODUCTS");
    },
    filterAtributs(val) {
      if (val == 0) this.filterOptions = [];
      this.__GET_PRODUCTS();
      if (val == 0 && this.$route.query.attributes == "") {
        let query = { ...this.$route.query };
        delete query.attributes;
        this.$router.replace({
          path: this.$route.path,
          query: query,
        });
      }
      if (val > 0) {
        this.filterOptions = [];
        if (this.$route.query.attributes) {
          let filterAtr = this.$route.query.attributes.split(",");
          filterAtr.forEach((item) => {
            let findItem = this.options.find((elem) => elem.id == item);
            this.filterOptions.push(findItem);
          });
        }
      }
    },
  },
  components: {
    MainTitle,
    CategoriesCard,
    ProductCard,
    CategoriesAppCard,
  },
};
</script>
<style lang="css">
@import "../../assets/css/pages/categories.css";
.showcases_top {
  margin-bottom: 32px;
}
.showcases_products {
  padding-top: 64px;
}
</style>
