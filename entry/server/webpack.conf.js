var webpack = require('webpack');

var babelSettings = { presets: ['react', 'es2015', 'stage-0'] };
babelSettings.plugins = ['transform-decorators-legacy'];

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'babel?' + JSON.stringify(babelSettings) + '!ts', exclude: /node_modules|lib/ },
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'null' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  }
};

//if (process.env.NODE_ENV !== 'production') {
//  var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
//  module.exports.plugins = [new ForkCheckerPlugin()]
//}
