module.exports = function (config) {
  // config.mode = "production"
  // config.devtool = "source-map"
  config.resolve.extensions = [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
  config.module.rules.push(
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader"
        }
      ]
    },
    // {
    //   enforce: "pre",
    //   test: /\.js$/,
    //   loader: "source-map-loader"
    // }
  )
  // config.externals = {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
}