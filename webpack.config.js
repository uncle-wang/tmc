const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	mode: "production",
	entry:  __dirname + "/src/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	devServer: {
		port: "8082",
		contentBase: "./build",
		historyApiFallback: true,
		inline: true
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
						presets: ['env', 'stage-3']
					}
				}
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
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.min.js'
		}
	},
};
