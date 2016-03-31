var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var express=require('express')
var app = new express()
var port = 9000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname + '/dist'));//静态目录
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get("/pay/", function(req, res) {
  res.sendFile(__dirname + '/pay/index.html')
})
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎 正在监听端口： %s. 请在浏览器打开 http://localhost:%s/", port, port)
  }
})
