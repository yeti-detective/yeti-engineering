var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?/, /\.js?$/],
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['env', 'react']
                }
            }
        ]
    },
    resolve: {
      extensions: [".js", ".jsx", "*"]
    }
};
