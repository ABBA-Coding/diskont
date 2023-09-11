export default {
  server: {
    port: process.env.PORT || 3000,
  },
  head: {
    title: "Diskont",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "csrf-token", content: "{{ csrf_token() }}" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "@/assets/css/app.css",
    "ant-design-vue/dist/antd.css",
    "@/assets/css/main.css",
    "aos/dist/aos.css",
    "swiper/swiper-bundle.min.css",
  ],

  plugins: [
    { src: "~plugins/antdv.js" },
    { src: "~plugins/v-mask.js", ssr: false },
    { src: "~plugins/aos.js", ssr: false },
    { src: "~plugins/vue-ripple.js", ssr: false },
    { src: "~plugins/geolocation.js", ssr: false },
  ],

  components: true,

  buildModules: ["@nuxtjs/svg", "@nuxt/image"],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/axios", "@nuxtjs/i18n"],
  // target: "static",
  // server: {
  //   port: 8000,
  //   host: "localhost",
  // },
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://api.e-shop.ndc.uz/api",
  },
  image: {
    dir: "assets/images",
  },
  seoMeta: {
    title: "My site title",
    keywords: "keyword1, keyword2, keyword3",
    description: "My site description",
  },
  i18n: {
    locales: ["uz", "en", "ru"],
    defaultLocale: "uz",
    vueI18n: {
      fallbackLocale: "uz",
    },
  },
  build: {
    babel: {
      compact: true,
    },
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};
