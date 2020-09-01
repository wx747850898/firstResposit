let express = require('express');   //引入express
let Mock = require('mockjs');       //引入mock

let app = express();        //实例化express

app.use('/mode2/DataOne', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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

app.listen('8090', () => {
  console.log('监听端口 8090')
})
