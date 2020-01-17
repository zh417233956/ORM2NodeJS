var Sequelize = require('sequelize');
var db = require('../dbConn.js');

module.exports = db.sequelize.define('priority', {
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: Sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'u_priority' // 数据表名为u_priority
});