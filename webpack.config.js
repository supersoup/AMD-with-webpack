/**
 * Created by Administrator on 2016/10/31.
 */

module.exports = {
	// configuration
	context: './app',
	entry: "./entry/main.js",
	output: {
		path: "./app/dist-webpack",
		publicPath: './dist-webpack/',

		filename: "[id].bundle.js",
		chunkFilename: '[id].bundle.js'
	},
	resolve: {
		alias: {
			'inner': './inner'
		}
	},
	devtool: '#inline-source-map',
};
