const clientresult = require('../models/clientresult')
var express = require('express')

var router = express.Router();
router
    .get("/api/index", function(req, res) {
        var result = clientresult.success("get请求~");
        res.send(result)
    })
module.exports = router