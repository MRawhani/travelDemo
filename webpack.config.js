var path = require('path'); //path is part of node
//the objects following are creatred by us
module.exports = {
    entry: {
        App: "./app/assets/scripte/App.js",
        Vendor: "./app/assets/scripte/Vendor.js",
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/, //the fewer js the faster babel
            exclude: /node_modules/
        }]
    }
} 