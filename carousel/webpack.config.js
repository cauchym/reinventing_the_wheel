module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};

