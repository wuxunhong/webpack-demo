const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { title } = require('process');

module.exports = {

  entry: "./src/index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string (default)
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "index.[contenthash].js", // string (default)
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '小吴',
      template: 'src/assets/index.html'
    }),
  ]
};


