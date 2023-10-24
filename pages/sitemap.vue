<template lang="html">
  <div class="sitemap container_xl">
    <div class="head">
      <h1>{{ $store.state.translations["about.sitemap"] }}</h1>
    </div>
    <div class="body sitemap-categories">
      <ul
        class="sitemap-categories__list"
        v-for="category1 in categories"
        :key="category1?.id"
      >
        <nuxt-link
          :to="`categories-inner/${category1?.slug}`"
          class="sitemap-categories__title"
          aria-label="link"
          >{{ category1?.name }}</nuxt-link
        >
        <li
          class="sitemap-categories__item"
          v-for="category2 in category1?.children"
          :key="category2?.id"
        >
          <nuxt-link
            :to="`categories-inner/${category2?.slug}`"
            class="sitemap-categories__item-subtitle"
            aria-label="link"
            >{{ category2?.name }}</nuxt-link
          >
          <ul class="pl-3 test-1">
            <li
              style="padding: 4px 0"
              v-for="category3 in category2?.children"
              :key="category3?.id"
            >
              <nuxt-link
                :to="`categories-inner/${category3?.slug}`"
                class="sitemap-categories__item-link"
                aria-label="link"
                >{{ category3?.name }}</nuxt-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ store, i18n }) {
    store.commit("loaderHandler", true);
    const [categoriesData] = await Promise.all([
      store.dispatch("fetchCategories/getCategories", {
        headers: {
          lang: i18n.locale,
        },
      }),
    ]);
    const categories = categoriesData?.data;
    setTimeout(() => {
      store.commit("loaderHandler", false);
    },0)
    return {
      categories,
    };
  },
};
</script>
<style lang="css" scoped>
.head h1 {
  font-family: var(--SB_600);
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
  text-align: center;
}
.head {
  border-bottom: 2px solid #e5e7eb;
  padding: 40px 0;
}
.sitemap-categories {
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  gap: 16px;
  padding: 40px 0;
}
.sitemap-categories__list {
  margin-bottom: 12px;
}
.sitemap-categories__title {
  font-family: var(--SB_600);
  color: #111;
  display: block;
  font-size: 24px;
  margin-bottom: 14px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sitemap-categories .pl-3 {
  padding-left: 12px;
}
.sitemap-categories__item-link {
  color: #111;
  display: block;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.sitemap-categories__item-subtitle {
  color: #111;
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.sitemap-categories__item-link:hover,
.sitemap-categories__item-subtitle:hover,
.sitemap-categories__title:hover {
  color: var(--color_green);
}
@media (max-width: 576px) {
  .sitemap-categories {
    grid-template-columns: repeat(2, 1fr);
  }
  .head h1 {
    font-size: 20px;
  }
  .sitemap-categories__item-subtitle {
    font-size: 18px;

  }}
</style>
