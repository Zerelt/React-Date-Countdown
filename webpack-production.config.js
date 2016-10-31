var path = require('path');
var webpack = require('webpack');
//for production;
//use with cli command:  webpack --config webpack-production.config.js -p

module.exports = {
    devtool: 'source-map',
    entry: ['./src/js/entry.jsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
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
        })
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: ['style', 'css', 'sass?outputStyle=expanded']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url?limit=8192', 'img']
            }, {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loaders: ['react-hot-loader/webpack', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
