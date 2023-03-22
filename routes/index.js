var express = require('express');
var router = express.Router();
const sql = require("../config/dboperation")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test connection
router.get('/testconnect',function(req,res,next){
  sql.getdata().then((result) =>{
    res.json(result[0])
    console.log("数据查询成功")
  })
});

//添加数据
router.post('/upformdata',function(req,res,next){
  sql.adddata(req).then((result) =>{
    res.json(result[0])
    console.log("添加成功",result[0])
  })
})
//删除表格数据
router.post('/deldata',function(req,res,next){
  sql.deletedata(req).then((result)=>{
    res.json(result)
    console.log("成功删除数据",result)
  })
})
module.exports = router;
