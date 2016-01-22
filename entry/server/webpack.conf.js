var webpack = require('webpack');

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'babel!awesome-typescript', exclude: /node_modules|lib/ },
      { test: /\.jsx?$/, loader: 'babel', query: { stage: 0 }, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'null' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  }
};

if (process.env.NODE_ENV !== 'production') {
  var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
  module.exports.plugins = [new ForkCheckerPlugin()]
}
