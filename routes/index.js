var express = require('express');
var router = express.Router();

var comments = {}; //设置一个服务器缓存，来模拟把comment的数据放置在数据库环境中

//编码，转为html转义字符
function html_encode(str) {
	var s = "";
	if(str.length == 0) return ""
	s = str.replace(/&/g,"&amp;");
	s = s.replace(/</g,"&lt;");
	s = s.replace(/>/g,"&gt;");
	s = s.replace(/\s/g,"&nbsp;");	
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quot;");
	s = s.replace(/\n/g,"<br>");
	return s
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });	
});	

//设置存储评论
//req请求，res响应，next捕获错误
router.get('/comment',function(req,res,next){
	comments.v =  html_encode(req.query.comment);
});

//拉取评论
router.get('/getComment',function(req,res,next){
	res.json({
		comment: comments.v
	})
});

module.exports = router;
