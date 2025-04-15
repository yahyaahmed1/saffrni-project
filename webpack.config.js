const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



const path = require('path');


module.exports = {
  entry: './src/index.js',
  stats: {
    warnings: false
  },
  stats: { warnings: false },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
              esModule: false
            },
          },
          "css-loader",
          "sass-loader"],
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
          filename: './images/[name][ext]'
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
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: "css/index.css"
    }),
    new CssMinimizerPlugin()
  ]
};
