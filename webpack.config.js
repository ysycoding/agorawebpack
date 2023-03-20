const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module : {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
      port: 3001, //포트 번호는 임의로 지정한다.
  },
};