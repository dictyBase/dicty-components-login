var eslintWebpack = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              formatter: require("react-dev-utils/eslintFormatter"),
            },
            loader: "eslint-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
}

module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    extra: eslintWebpack,
    html: {
      template: "demo/src/index.html",
    },
  },
}
