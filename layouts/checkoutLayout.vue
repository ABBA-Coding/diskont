<template lang="html">
  <div class="layout-back">
    <Header />
    <Nuxt />
    <CheckOutFooter />
  </div>
</template>
<script>
import CheckOutFooter from "../components/layout/CheckOutFooter.vue";
import Header from "../components/layout/Header.vue";

export default {
  data() {
    return {
      locations: {}
    }
  },
  async fetch() {
    const [translationsData] = await Promise.all([
      this.$store.dispatch("fetchTranslations/getTranslations", {
        headers: {
          lang: this.$i18n.locale,
        },
      }),
      this.$store.dispatch("siteInfo", {
        headers: {
          lang: this.$i18n.locale,
        },
      }),
    ]);
    this.$store.commit("getTranslations", translationsData?.translates);
  },
  async mounted() {
    try {
      await this.$getLocation().then((coordinates) => {
        this.locations = coordinates;
      });
    } catch (e) {}
    this.$store.commit("reloadStore");
    // this.$store.dispatch("dicoinInfo");
    this.$store.dispatch("profileInfo", this.$route.path);
    this.$store.dispatch("siteInfo", {
      params: {
        lat: this.locations.lat,
        lon: this.locations.lng,
      },
      headers: {
        lang: this.$i18n.locale,
      },
    });
  },
  computed: {
    targetLang() {
      return this.$i18n.locale;
    },
  },
  watch: {
    async targetLang() {
      const [translationsData] = await Promise.all([
        this.$store.dispatch("fetchTranslations/getTranslations", {
          headers: {
            lang: this.$i18n.locale,
          },
        }),
      ]);
      this.$store.dispatch("siteInfo", {
        headers: {
          lang: this.$i18n.locale,
        },
      });
      this.$store.commit("getTranslations", translationsData?.translates);
    },
  },
  components: { Header, CheckOutFooter },
};
</script>
<style>
@media screen and (max-width: 1024px) {
  .check__wrap {
    margin-top: 60px;
  }
}
</style>
