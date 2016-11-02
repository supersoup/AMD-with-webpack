/**
 * Created by Administrator on 2016/10/31.
 */

require(['inner/main2', './main3'], function() {
	console.log('hello main.js');

	require(['./inner/main4'], function() {
		console.log('load main4.js');
	})
});


