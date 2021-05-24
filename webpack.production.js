const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    // devtool: 'source-map', //kad sukompiliavus koda, development eitu geriau suprasit koda
    entry: {
        //nurodom musu programos pagrindini js faila , is cia viskas bus paimta
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        //i cia viskas bus sudeta
        filename: 'final.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[name][ext]', //nurodome kur bus padeti paveiksleliai
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i, //pritiakome taisykles esancias use skiltyje visiems *.css failams su tokia pabaiga(css.loader pagamina faila, o style-loader ideda i dist folderi)
                //TODO: production environmente minicssExtractPlugin irasyti
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    // ['imagemin-webp'], - nebereikia
                    ['mozjpeg', { quality: 50 }],
                    ['gifsicle'],
                    ['pngquant', { quality: [0.3, 0.6] }], //sitas savybes galima paziureti google npm ivedus pngquant ar kita
                    ['imagemin-svgo'],
                ],
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack intro dynamic',
            template: 'src/template.html',
        }),
    ],
};
