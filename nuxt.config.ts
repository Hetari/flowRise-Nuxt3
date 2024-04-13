// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "Flow Rise",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Unleash your potential by harmonizing your daily tasks and habits with your unique energy rhythms.",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      ],
    },
  },
  css: [
    "~/assets/css/main.css",
    "@fontsource-variable/nunito",
    "@fontsource-variable/nunito-sans",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildAssetsDir: "assets",
  imports: {
    dirs: ["constant"],
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          "postcss-import": {},
          "postcss-each": {
            plugins: {
              beforeEach: [],
            },
          },
          "postcss-custom-media": {},
          autoprefixer: {},
        },
      },
    },

    // @ts-ignore
    transpile: [
      "@thenightleague/shared",
      "tailwindcss/plugin",
      "lodash-es",
      "blaze-slider",
      "vee-validate/dist/rules",
    ],
  },
});
