const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



const path = require('path');


module.exports = {
  entry: {
    index: './src/index.js',
    'scripts/scroll': './src/scripts/scoll.js',
    'scripts/gellary': './src/scripts/gellary.js',
    'style/turkey': './src/sass/pages/istanbul/turkey-tour.scss',
    'style/egypt': './src/sass/pages/Pyramids/egypt-tour.scss'
  },
  stats: {
    warnings: false
  },
  stats: { warnings: false },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    // for hidding warnings
    client: {
      overlay: {
        warnings: false,
      },
    },
    open: true,
    hot: false,
    port: 1804,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            },
          },
          "rtlcss-loader",
          "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index', 'scripts/scroll']
    }),
    new HtmlWebpackPlugin({
      filename: 'egypt-tour.html',
      template: 'src/egypt-tour.html',
      chunks: ['index', 'scripts/gellary', 'style/egypt']
    }),
    new HtmlWebpackPlugin({
      filename: 'turkey-tour.html',
      template: 'src/turkey-tour.html',
      chunks: ['index', 'scripts/gellary', 'style/turkey']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: 'src/login.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: 'src/signup.html',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CssMinimizerPlugin()
  ]
};
