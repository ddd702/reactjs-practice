var path = require('path')
var webpack = require('webpack')
var appSrcPath=path.join(__dirname,'src');
module.exports = {
    entry: {
        //test:'./src/js/test.js',
        main:['./src/js/services/main.js','webpack-hot-middleware/client']
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js',
        publicPath:'/dist/js/'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
            exclude: /node_modules/,
            include: __dirname
        },{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            include: path.join(appSrcPath,'sass')
        }]
    }
}
