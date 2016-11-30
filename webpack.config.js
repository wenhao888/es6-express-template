var webpack= require("webpack");
var ExternalsPlugin = require('webpack-externals-plugin');

module.exports = {
    entry: __dirname+"/src/server.js",
    output: {
        path:__dirname +"/dist",
        filename:"server.js"
    },
    target:"node",
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        loaders:[
            {
                test:/\.js$/,loader:"babel-loader"
            }
        ]
    },
    plugins: [
        new ExternalsPlugin({
            type: 'commonjs',
            include: __dirname + '/node_modules',
        }),
    ]

};