const path = require('path');
const SRCDIR = path.join(__dirname, '/client/src');
const DESTDIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRCDIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DESTDIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  }
};
