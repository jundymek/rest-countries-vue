module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/rest-countries-vue/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
