
一个非常简单的 Weex demo
----

### 准备工作:

* `npm i -g http-server` https://www.npmjs.com/package/http-server
* 下载安卓 Playground https://weex-project.io/playground.html
* 打开生成 QR code 的工具 http://www.qr-code-generator.com/

### 打开 Demo

在当前目录启动 `http-server`, 提供 `demo.js` 文件的 HTTP 服务:

```text
=>> http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://10.12.73.50:8080
Hit CTRL-C to stop the server
```

其中 `10.12.73.50` 是我当前的局域网 IP, 手机可以访问到, 那么 `demo.js` 的 HTTP 地址就是:

```text
http://10.12.73.50:8080/demo.js
```

生成一个 QR Code, 用 Weex Playground 扫一扫. 就可以看到 alert 了. `demo.js` 的源码:

```js
// { "framework": "Vue" }

weex.requireModule('modal').alert({
  message: weex.config.bundleUrl
})
```

### 原理

Weex 像是一个浏览器, 目前以 js 文件作为入口, 一个页面就是一个 js 文件. 通过 HTTP 服务能拿到 js 即可.

用 Webpack 也是做类似的事情, 只是说 Weex 主打的 Vue framework 需要编译才能跑. 只是写 demo 的话手写即可, 都不用 Webpack.

由于 Weex 设计方面原因, 一些框架是打包在应用里的, 比如 Vue, 那么需要在文件开头加上一行注释让 Weex 识别并进行**与之对应的全局变量的初始化**.

```js
// { "framework": "Vue" }
```

其他还有几种, Rax 是 React 语法, Vanilla 是无框架手写, Legacy 是 `.we` 文件的兼容(没有开头的注释对应 Legacy 环境):

```js
// { "framework": "Rax" }
// { "framework": "Vanilla" }
// { "framework": "Legacy" }
```

排查问题有时候会用到这个手写的办法.
