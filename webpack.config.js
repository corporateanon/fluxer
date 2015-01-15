module.exports = {
  entry: "app/index.js",
  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    modulesDirectories: ["web_modules", "node_modules", "app_modules"],
    //   alias: {
    //     'app': './src/app'
    //   }
  },
  module: {
    loaders: [{
      test: /web_modules(\/|\\).+\.js$/,
      loader: 'traceur',
      query: {
        runtime: true,
        sourceMaps: true,
      }
    }, {
      test: /.+\.json$/,
      loader: 'json',
    }, {
      test: /.+\.jsx$/,
      loader: 'jsx',
      query: {
        harmony: true,
      }
    }]
  },
};
