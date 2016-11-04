/**
 * Created by Administrator on 2016/10/31.
 */

module.exports = {
	// configuration
	context: './',
	entry: "./app/entry/main.js",
	output: {
		path: "./app/dist-webpack",

		//和其他 backend 共同工作的方法一：把 devServer 作为静态文件提供者。
		//需要让 publicPath 和 html 中的 <script> 标签设置为同一主机名和端口号对应的路径
		//publicPath: 'http://localhost:8080/app/dist-webpack/',

		publicPath: '/app/dist-webpack/',

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
		inline: true,
		proxy: {
			'/api': {
				target: 'http://localhost:9999/',
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	},

};
