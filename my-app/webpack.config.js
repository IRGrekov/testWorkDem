module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
