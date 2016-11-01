/**
 * Created by Administrator on 2016/11/1.
 */
({
	appDir: './app/entry',  //源文件夹
	baseUrl: './',  //相对源文件夹的baseUrl
	dir: './app/dist-rjs',  //编译输出文件夹
	modules: [
		{
			name: "main"
		},
		{
			name: "inner/main4"
		}
	],  //每一个将要打包的模块
	generateSourceMaps: true,
	preserveLicenseComments: false,
	optimize: 'none'
})