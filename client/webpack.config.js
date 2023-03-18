const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      // html webpack plugin
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "J.A.T.E",
      }),
      // new InjectManifest({
      //   swSrc: "./src-sw.js",
      //   swDest: "src-sw.js",
      // }),
      // new WebpackPwaManifest({
      //   fingerprints: false,
      //   inject: true,
      //   name: 'Just Another Text Editor',
      //   short_name: 'J.A.T.E',
      //   description: 'A text editor!',
      //   start_url: './',
      //   publicPath: './',
      // })
    ],

    // TODO: Add CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          // bable
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@bable/preset-env"],
              plugins: [
                "@bable/plugin-proposal-object-rest-spread",
                "@bable/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
