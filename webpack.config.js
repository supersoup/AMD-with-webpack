/**
 * Created by Administrator on 2016/10/31.
 */

module.exports = {
	// configuration
	context: './',
	entry: "./app/entry/main.js",
	output: {
		path: "./app/dist-webpack",
		publicPath: './app/dist-webpack/',
		filename: "[id].bundle.js",
		chunkFilename: '[id].bundle.js'
	},
	resolve: {
		alias: {
			'inner': './inner'
		}
	},
	devtool: '#inline-source-map',
	devServer: {
		inline: true
	}
};