const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map', //kad sukompiliavus koda, development eitu geriau suprasit koda
    entry: {
        //nurodom musu programos pagrindini js faila , is cia viskas bus paimta
        main: path.resolve(__dirname, './src/app.js'),
    },
    devServer: {
        contentBase: './dist',
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
            {
                test: /\.js$/,
                exclude: /node_modules/, //taspats ieskosim js failu, isskyrus(exlude) node_modules faile
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], //kiek daug atgal i praeiti mes norim sugrizti(kad veiktu ant senu narsykliu)
                    },
                },
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
