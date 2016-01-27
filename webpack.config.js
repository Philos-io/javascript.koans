module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'lodash.js',
    path: __dirname
  },

  module: {
    loaders: [{
      test: /\.js$/, loader: 'babel-loader',  exclude: /node_module/
    }]
  }
};
