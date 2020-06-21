const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPluginConfig = new htmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: 'development',
   devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test:  /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            }
        ]
    },
    plugins: [
        htmlWebPackPluginConfig
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    }
};
