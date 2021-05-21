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
    module: {
        rules: [
            {
                test: /\.css$/i, //pritiakome taisykles esancias use skiltyje visiems *.css failams su tokia pabaiga(css.loader pagamina faila, o style-loader ideda i dist folderi)
                //TODO: production environmente minicssExtractPlugin irasyti
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack intro dynamic',
            template: 'src/template.html',
        }),
    ],
};
