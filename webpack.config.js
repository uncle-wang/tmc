const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
	mode: "development",
	entry:  __dirname + "/src/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle-[hash].js"
	},
	devServer: {
		port: "8082",
		contentBase: "./build",
		historyApiFallback: true,
		inline: true,
		proxy: {
			'/': {
				target: 'http://localhost:6932/',
				secure: false
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-3'],
						plugins: [[
							"transform-runtime",
							{
								"helpers": false,
								"polyfill": false,
								"regenerator": true,
								"moduleName": "babel-runtime"
							}
						]]
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)/,
				use: [{
					loader: 'url-loader',
					options: {
						// 小于5KB的图片直接转码
						limit: 5120
					}
				}]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.tmpl.html'
		}),
		new CleanWebpackPlugin('build/*.*', {
			root: __dirname,
			verbose: true,
			dry: false
		}),
	],
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	},
};
