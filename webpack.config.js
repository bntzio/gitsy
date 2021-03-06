var webpack = require('webpack');

module.exports = {
  entry: './app/assets/frontend/App.jsx',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/assets/frontend',
      './app/assets/frontend/api',
      './app/assets/frontend/components'
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets:['react', 'es2015', 'stage-0']
      }
    }]
  },
  devtool: 'cheap-module-eval-source-map'
};
