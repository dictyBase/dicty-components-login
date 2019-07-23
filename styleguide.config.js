module.exports = {
  styleguideDir: "docs",
  components: "src/components/*.js",
  ignore: ["src/components/*Styles.js", "src/components/*.test.js"],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader",
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
        },
        {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
}
