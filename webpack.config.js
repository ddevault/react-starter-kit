var webpack = require('webpack');
module.exports = {
    devtool: "#source-map",
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/main.jsx' // Your appʼs entry point
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: "app.js",
        path: __dirname + "/js",
        publicPath: "/js/"
    },
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader?stage=1"],
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
