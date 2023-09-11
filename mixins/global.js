export default {
  data() {
    return {
      page: 1,
      current: 1,
      totalPage: 1,
      params: {
        page: 1,
        pageSize: 30,
      },
      value: "",
    };
  },
  methods: {
    async changePagination(val, dataFunc) {
      if (this.$route.query.page != val) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            page: val,
          },
        });
        this[dataFunc]();
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    async getFirstData(dataFunc) {
      if (!Object.keys(this.$route.query).includes("page")) {
        await this.$router.replace({
          path: this.$route.path,
          query: { page: this.params.page },
        });
      }
      this[dataFunc]();
      this.current = Number(this.$route.query.page);
    },
  },
};
