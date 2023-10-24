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
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      },
      {
        src:
        "https://www.googletagmanager.com/gtag/js?id=G-8DLJ722N8S",
        async: true
      },
    ],
  },

  css: [
    // "@/assets/css/app.css",
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
    { src: "~plugins/google-analitics.js", ssr: false },
    { src: "~plugins/yandex-analitics.js", ssr: false },
  ],
  components: true,

  buildModules: ["@nuxtjs/svg"],

  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/dotenv",
    "@nuxt/image",
    "nuxt-precompress",
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
    locales: [{
      code: 'en',
      iso: 'en' // Will be used as catchall locale by default
    },
    {
      code: 'uz',
      iso: 'uz'
    }, {
      code: 'ru',
      iso: 'ru'
    }],
    baseURL: process.env.BASE_URL,
    seo: true,
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
    },
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ["br", "gzip"],
    },
    gzip: {
      enabled: true,
      filename: "[path].gz[query]",
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      enabled: true,
      filename: "[path].br[query]",
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
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
