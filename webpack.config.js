const path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [
      {
        test: /index\.scss$/,
        loader: 'mixin-loader?mixins[]=css3', // or mixins[]=border-radius
      },
    ],

    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')],
  },
};
