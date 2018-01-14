var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'demo/bundle'),
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.DllPlugin({
      name: '[name]_lib',
      path: 'demo/[name]-manifest.json'
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
};
