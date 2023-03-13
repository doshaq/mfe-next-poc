/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;

const path = require("path");
const deps = require("./package.json").dependencies;
const production = process.env.NODE_ENV === "production";

module.exports = (params) => {
  const config = {
    entry: "./src/index",
    mode: production ? "production" : "development",
    stats: production ? "normal" : "minimal",
    target: "web",
    devServer: {
      watchFiles: ["src/*"],
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 3002,
      open: false,
      hot: true,
      liveReload: true,
    },
    output: {
      publicPath: "auto",
      filename: "js/[name].js",
      chunkFilename: "js/[name].[chunkhash:3].js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          // exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        {
          loader: "babel-loader",
          test: "/.(js|jsx)$/",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new ModuleFederationPlugin({
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
          './index': './src/bootstrap',
        },
        shared: {
          ...deps,
          "react-router-dom": {
            singleton: true,
          },
          "@emotion/react":{
            singleton:true
          },
          "@mantine/core":{
            singleton:true
          },
          "@mantine/hooks":{
            singleton:true
          },
          react: {
            singleton: true,
          },
        },
      }),
    ],
  };

  if (production) {
    config.optimization = {
      minimize: true,
      minimizer: [
        new ESBuildMinifyPlugin({
          css: true,
        }),
      ],
    };

    config.plugins.push(new HTMLInlineCSSWebpackPlugin());
  }
  return config;
};
