module.exports = {
    entry: getEntrySources(['./src/js/entry.jsx']),
    output: {
        publicPath: 'http://localhost:8080',
        filename: 'build/bundle.js'
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
                loaders: ['url?limit=8192', 'img']
            }, {
                test: /\.jsx?$/,
                exclude: /(node-modules)/,
                loaders: ['react-hot-loader/webpack', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015']
            }
        ]
    }
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}
