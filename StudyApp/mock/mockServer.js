let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.listen('8090', () => {
  console.log('监听端口 8090')
})

app.use('/mode2/DataOne', function (req, res) {
  res.json(Mock.mock({
    'status': 200,
    'dataSource|1-9': [{
      'key|+1': 1,
      'mockTitle|1': ['肆无忌惮'],
      'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
      'mockAction|1': ['下载', '试听', '喜欢']
    }]
  }))
})

app.use('/test/data1', function (req, res) {
  res.json(Mock.mock({
    'code': 200,
    'data|1-9': [{
      'key|+1': 1,
      'name|1': ['wx', 'zs', 'ls'],
      'age|1': [28, 36, 78, 56, 3, 71],
      'discription|1': ['长得漂亮', '不错', '忠厚老实', '无脑']
    }]
  }))
})


app.use('/test/data2', urlencodedParser, function (req, res) {
  res.json(Mock.mock({
    'code': 200,
    'data|1-9': [{
      'key|+1': 1,
      'name|1': ['wx', 'zs', 'ls'],
      'age|1': [28, 36, 78, 56, 3, 71],
      'discription|1': ['长得漂亮', '不错', '忠厚老实', '无脑']
    }]
  }))
});


