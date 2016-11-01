# 分别使用 r.js 和 webpack 打包 AMD 规范的前端项目

被依赖的文件包括 `*/**.js` 和 `./**.js` 以及 在代码内部动态引入 三种情况。

---

## 安装 node.js 和 webpack

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

3. 在处理 `dirctory/file.js` 这样的格式上，require.js 是相对于 `baseUrl` 进行寻址，而 webpack 则会去 `node_module` 文件夹里面去找。这一点上是有差异的。所以我把 `baseUrl` 下面的所有文件在 webpack 里面都配了假名，之后 webpack 就会根据我的假名地址去找了。