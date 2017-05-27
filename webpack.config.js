var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: getEntrySources(['./src/js/entry.jsx']),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8080/build',
        filename: 'bundle.js'
    },
    devtool: 'eval', //for production 'source-map'
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: ['style', 'css', 'sass?outputStyle=expanded']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include:/src/,
                exclude:/(node-modules)/,
                loader:'file-loader?name=[name].[ext]&outputPath=./build/build/images/',
                // options: {   //need to install  "image-webpack-loader": "^3.3.1",
                //     name: './build/images/[name].[ext]'
                // }
                // loader: [
                //     'file-loader?hash=sha512&digest=hex&name=./build/build/images/[name].[ext]',
                //     'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                // ],
            }, {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loaders: ['react-hot-loader/webpack', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015']
            }, {
              test:/\.mp3$/,
              include:/src/,
              loader:'file-loader?name=[name].[ext]&outputPath=./build/build/sounds/'
            }, {
                test: /\.(eot|ttf|woff|woff2)$/i,
                // test: /\.(ttf|eot|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // include:path.join(__dirname, 'src/fonts'),
                // loader:'file-loader?name=/fonts/[name].[ext]',
                // loader: 'url-loader?importLoaders=1&limit=100000',
                loader:'file-loader?name=[name].[ext]&outputPath=../fonts/'
            }
        ]
    },
    plugins: [
      //from https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // load `moment/locale/ja.js` and `moment/locale/it.js`
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}
