const express = require('express')
const router = express.Router()
const clientresult = require('../models/clientresult')

const todolist = require('../db/api/todolist')

router
    .get("/api/index", function(req, res) {
        var result = clientresult.success("get请求~");
        todolist.findByPk(req.query["id"], (item) => {
            if (item != null) {
                todolist.getPriority(item.priority, item2 => {
                    result = clientresult.success({ todolist: item, priority: item2 });
                    res.send(result);
                })
            } else {
                result = clientresult.error("数据不存在");
                res.send(result);
            }
        })

    })
module.exports = router