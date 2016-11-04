# 分别使用 r.js 和 webpack 打包 AMD 规范的前端项目

被依赖的文件包括 `*/**.js` 和 `./**.js` 以及 在代码内部动态引入 三种情况。

---

首先安装 node.js 和 webpack

## 使用 r.js 打包：

```
npm run rjs-build
```

然后打开 `./app/index-rjs.html`。

### 说明

因为需要动态添加 `inner/main4.js`，在内部动态引入的文件无法直接被 r.js 识别，所以我需要把 `main1.js` 和 `main4.js` 都进行打包。就需要选择 `appDir` + `dir` + `modules` 的这种模式 而不是 `name` + `out` 模式。才能够输出多个被打包的文件。

但是有一个问题就是，r.js 他是先把文件复制到 `dir` 里面，再进行优化。如果我设置了 `fileExclusionRegExp` 字段，就会报如下错误：

```
Error: ENOENT: no such file or directory, open 'D:\Program Files\practise_projects\webpack_use_study\app\dist-rjs\inner\main2.js'
In module tree:
    main
```

所以导致 `main2.js` 和 `main3.js` 这些也在生产环境里面。

## 使用 webpack

```
npm run webpack-build
```

然后打开 `./app/index-webpack.html`。

### 说明

webpack 则是能够把 `require()` 动态引入的文件识别为一个 chunk。所以这一点上是非常先进的。

要注意的：

1. 在没有启动 `webpack-dev-server` 的情况下，需要配置 `output.publicPath` 和 `output.path` 字段指向同一个文件夹。因为内部 `require()` 的路径， 是相对于 `output.publicPath` 的。

2. `entry` 和 `output.publicPath` 是相对于 `context` 字段的，而 `output.path` 是相对于 `webpack.config.js` 这个文件的。

3. 在处理 `dirctory/file.js` 这样的格式上，require.js 是相对于 `baseUrl` 进行寻址，而 webpack 则会去 `node_module` 文件夹里面去找。这一点上是有差异的。所以我把 `baseUrl` 下面的所有文件在 webpack 里面都配了假名，之后 webpack 
就会根据我的假名地址去找了。

### webpack-dev-server 和其它 backend 服务器配合工作

我们开发的时候经常需要从 backend 服务器上获取 api，这个服务器需要打包编译部署等阶段。我们可不可以不用那些复杂的操作，就像单独使用 `webpack-dev-server` 那样进行开发阶段的调试呢？

这里我提供两种方法：

#### 方法一

从 backend 进入，把 devServer 作为静态文件提供者，而 api 则从自身获取。

需要注意的是，要让 publicPath 和 html 中的 `<script>` 标签设置为同一带有主机名和端口号对应的路径。

我的 devServer 端口是 8080，backend 端口是 9999. 我需要把 `output.publickPath` 设置为 `'http://localhost:8080/app/dist-webpack/'`，并且在入口 html 中，把标签写成 `<script src="http://localhost:8080/app/dist-webpack/0.bundle.js"></script>`。

#### 方法二

从 devServer 进入，从自身获取静态资源，并设置 proxy 把 api 转发到 backend 获取 response。

这个官方文档写得太简略，按照它的配置并不能成功。于是我到 github 上的 (示例)[https://github.com/webpack/webpack-dev-server/blob/master/examples/proxy-advanced/webpack.config.js] 查看，把 `devServer.proxy` 配置成:

```javascript
{
	'/api': {
		target: 'http://localhost:9999/',
		changeOrigin: true,
		pathRewrite: {
			"^/api": ""
		}
	}
}
```

这样，我发出一个 AJAX 请求 `/api/test/proxy`， proxy 就会帮我转发一个 `/test/proxy` 到我的 9999 端口的服务器上获取数据。
