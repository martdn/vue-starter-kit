const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

require("babel-polyfill");

let config = {
    entry: ["babel-polyfill", "./src/main.js"],
    output: {
        path: path.resolve(__dirname, './public/dist'),
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'postcss-loader',
                ],
            },
            {
                test: /.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader',
                  'postcss-loader',
                ],
            },
            {
                test: /.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                          'vue-style-loader',
                          'css-loader',
                          'sass-loader'
                        ],
                        'sass': [
                          'vue-style-loader',
                          'css-loader',
                          'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /.ts$/,
                loader: 'ts-loader',
                exclude: [/node_modules/, /vendor/],
                options: {
                  appendTsSuffixTo: [/.vue$/]
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    resolve: {
        alias: {
            '@': __dirname + '/src',
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*','.ts', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'), 
        historyApiFallback: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        // development
    }

    if (argv.mode === 'production') {
        module.exports.devtool = '#source-map';
        module.exports.plugins = (module.exports.plugins || []).concat([
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: {},
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ])
    }

    return config;
};