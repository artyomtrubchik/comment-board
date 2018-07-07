//var nodeExternals = require('webpack-node-externals');
var path = require('path');


module.exports = {
    entry: './App/js/index.jsx', // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './wwwroot'),     // путь к каталогу выходных файлов - папка public
        filename: 'bundle.js'     // название создаваемого файла
    },
    devtool: 'source-map',
    //target: 'node', // in order to ignore built-in modules like path, fs, etc.
    //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    resolve: {       
        extensions: ['.js', '.jsx'] // расширения для загрузки модулей
    },   
    module: {
        rules: [          
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["es2016"],
                            "react"]
                    }
                }
            }
        ]
    }   
}