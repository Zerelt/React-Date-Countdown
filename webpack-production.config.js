var path = require('path');
var webpack = require('webpack');
//for production;
//use with cli command:  webpack --config webpack-production.config.js -p

module.exports = {
    devtool: 'cheap-source-map', //cheap-source-map, cheap-module-source-map, source-map, nosource-source-map
    entry: ['./src/js/entry.jsx'],
    output: {
        path: path.join(__dirname, 'build/bundle'),
        filename: 'bundle.js',
        publicPath: './build/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: ['style', 'css', 'sass?sourceMap']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // loaders: ['url?limit=8192', 'img']
                include:/src/,
                exclude:/(node-modules)/,
                loader:'file-loader?name=[name].[ext]&outputPath=../images/'
            }, {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loaders: ['react-hot-loader/webpack', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'],
                include: path.join(__dirname, 'src')
            }, {
              test:/\.mp3$/,
              include:/src/,
              loader:'file-loader?name=[name].[ext]&outputPath=../sounds/'
            }
        ]
    }
};
