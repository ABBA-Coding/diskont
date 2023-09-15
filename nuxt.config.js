export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
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
    { src: "~plugins/geolocation.js", ssr: false },
  ],

  components: true,

  buildModules: ["@nuxtjs/svg"],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/dotenv",
    "@nuxt/image",
  ],
  // target: 'static',
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: process.env.BASE_URL,
  },
  image: {
    dir: "assets/images",
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
