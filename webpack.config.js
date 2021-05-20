const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        //nurodom musu programos pagrindini js faila , is cia viskas bus paimta
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        //i cia viskas bus sudeta
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack intro dynamic',
        }),
    ],
};
