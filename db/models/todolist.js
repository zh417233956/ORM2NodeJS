var Sequelize = require('sequelize');
var db = require('../dbConn.js');

var todolist = db.defineModel('todolist', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    title: Sequelize.STRING(100), // 标题
    content: Sequelize.STRING(500), // 详细内容
    priority: Sequelize.INTEGER, // 级别
    owner: Sequelize.STRING, // 承接人
    officer: Sequelize.STRING, // 负责人
    startDate: Sequelize.DATE, // 开始时间
    planFinishDate: Sequelize.DATE, // 计划完成时间
    realFinishDate: Sequelize.DATE, // 实际完成时间
    bz: Sequelize.STRING(500), // 备注
    state: Sequelize.INTEGER, // 状态
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    createUser: Sequelize.STRING,
    updateUser: Sequelize.STRING,
    version: Sequelize.BIGINT
}, {
    timestamps: false // 不要默认时间戳
});

module.exports = todolist;