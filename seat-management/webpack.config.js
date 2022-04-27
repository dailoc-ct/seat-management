module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.svg$/,
      //   loader: "vue-svg-loader", // `vue-svg` if using webpack 1.x
      // },
    ],
  },
  // plugin omitted
};
