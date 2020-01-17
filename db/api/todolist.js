var todolist = require('../models/todolist')
var priority = require('../models/priority')
var findByPk = function(id, callback) {
    todolist.findByPk(id).then(item => {
        callback(item);
    })
}
var getPriority = function(id, callback) {
    priority.findByPk(id).then(item => {
        callback(item);
    })
}
var findOne = function(id, callback) {
    todolist.findOne({ where: { id: id } }).then(item => {
        callback(item);
    })
}

module.exports = {
    findOne,
    findByPk,
    getPriority
}