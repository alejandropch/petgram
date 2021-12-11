/* eslint-disable prefer-regex-literals */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')
module.exports = {

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    compress: true,
    open: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Petgram - The best petgram cute animal photos',
      shortname: 'Petgram 🐕',
      description: 'In petgram you will see many cute animal photos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          size: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }

        },
        {
          urlPattern: new RegExp('https://petgram-server-edsf8xpy2.now.sh/categories'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }

        }
      ]
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],

            plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]]
          }

        }
      }
    ]

  }

}
