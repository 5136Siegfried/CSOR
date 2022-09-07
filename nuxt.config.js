export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Collectif de Secours & Orientation de Rue',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tout au long de l’année, nous réalisons des maraudes sanitaires plusieurs fois par semaine en' +
          ' soirée dans le centre ville de Bordeaux. Au delà du soin, nos bénévoles ont un rôle préventif et' +
          ' informatif. Nous avons à coeur' +
          ' d’établir' +
          ' et de maintenir un réseau partenarial avec plusieurs associations caritatives, des établissements de' +
          ' soins et des travailleurs sociaux.' +
          'Au cours de l\'année, des professionnel.le.s du soin et de la santé mettent à disposition leurs compétences pour transmettre aux bénévoles du CSOR des notions importantes et utiles pour nos maraudes.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      { hid: 'og:title', property: 'og:title', content: 'Collectif de Secours & Orientation de Rue' },
      { hid: 'og:description', property: 'og:description', content: 'Tout au long de l’année, nous réalisons des maraudes sanitaires plusieurs fois par semaine en' +
          ' soirée dans le centre ville de Bordeaux. Au delà du soin, nos bénévoles ont un rôle préventif et' +
          ' informatif. Nous avons à coeur' +
          ' d’établir' +
          ' et de maintenir un réseau partenarial avec plusieurs associations caritatives, des établissements de' +
          ' soins et des travailleurs sociaux.' +
          'Au cours de l\'année, des professionnel.le.s du soin et de la santé mettent à disposition leurs compétences pour transmettre aux bénévoles du CSOR des notions importantes et utiles pour nos maraudes.' },
      { hid: 'og:image', property: 'og:image', content: "~/assets/img/csor-ogimage.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo2.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/variables.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/colors.scss',
    '~/assets/scss/mixins.scss',
    '~/assets/scss/global.scss',
    '~/assets/scss/media.scss'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/device'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.csor.fr',
    gzip: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
