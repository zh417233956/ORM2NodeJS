var express = require('express')
var bodyParser = require('body-parser');
var app = express()
const router = require('./router/ormapi');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
var server = app.listen(9009, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("启动服务，访问地址为 http://%s:%s", host, port)
})