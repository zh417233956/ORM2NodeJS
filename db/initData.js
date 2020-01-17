var priority = require('./models/priority');

var todolost = require('./models/todolist');
// 创建u_priority表的基础数据
priority.create({
    title: '重要 紧急'
}).then(function(p) {
    console.log('created. ' + JSON.stringify(p));
}).catch(function(err) {
    console.log('failed: ' + err);
});
todolost.create({
        title: "nodejs orm demo", // 标题
        content: "库数据对象关系映射的nodejs示例", // 详细内容
        priority: 1, // 级别
        owner: 1, // 承接人
        officer: 1, // 负责人
        state: 1, // 状态
        createUser: "钟海",
        updateUser: "钟海",
        version: 1,
        createdAt: "2020-1-17 14:20:22",
        updatedAt: "2020-1-17 14:20:22",
        startDate: "2020-1-17 14:20:22",
        planFinishDate: "2020-1-17 14:20:22",
        realFinishDate: "2020-1-17 14:20:22",
    })
    .then(function(p) {
        console.log('created. ' + JSON.stringify(p));
    }).catch(function(err) {
        console.log('failed: ' + err);
    });
priority.findAll().then(item => {
    if (item) {
        console.log(JSON.stringify(item))
    } else {
        console.log("没有找到结果")
    }
})
priority.findByPk(1).then(item => {
    if (item) {
        console.log(JSON.stringify(item))
    } else {
        console.log("没有找到结果")
    }
})
priority.findOne({ where: { id: 1 } }).then(item => {
    if (item) {
        console.log(JSON.stringify(item))
    } else {
        console.log("没有找到结果")
    }
})