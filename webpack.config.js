/**
 * Created by Administrator on 2016/10/31.
 */

module.exports = {
	// configuration
	context: './',
	entry: "./app/entry/main.js",
	output: {
		path: "./app/dist-webpack",

		//������ backend ��ͬ�����ķ���һ���� devServer ��Ϊ��̬�ļ��ṩ�ߡ�
		//��Ҫ�� publicPath �� html �е� <script> ��ǩ����Ϊͬһ�������Ͷ˿ںŶ�Ӧ��·��
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
