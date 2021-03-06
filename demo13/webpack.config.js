const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'development',
  entry: './index.js',
  output: {
    filename: 'index.js'
  },
  module: {
    rules:[
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}
