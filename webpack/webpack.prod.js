const webpack = require('webpack')

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('http://ergast.com/api/f1'),
    }),
  ],
}
