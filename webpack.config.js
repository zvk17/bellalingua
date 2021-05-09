const path = require('path');
const webpack = require('webpack');

var BUILD_DIR  = path.resolve(__dirname, 'public/js');
var SOURCE_DIR = path.resolve(__dirname, 'react/');

console.log(SOURCE_DIR);

module.exports = {
    entry: {
        exer: SOURCE_DIR + "/" + "Main.jsx",
        key: SOURCE_DIR + "/" + "Keyboard.jsx",
        lesson: SOURCE_DIR + "/" + "Lesson.jsx"

    },

    output: {
        filename: '[name].js',
        path: BUILD_DIR
    },

   devServer: {
      inline: true,
      port: 8080,
      secure: true
   },
   externals: {
     "react": "React",
     "react-dom":"ReactDOM"
   },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2016", "es2015"],
                    plugins: ["syntax-async-functions", "transform-regenerator"]
                }
            }
        ]
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ]
};
