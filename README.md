# Web安全-XSS的攻击和防范

点击可查看[笔记内容](http://icke.site/2017/06/11/20170611-XSS-WebSecurity/)

1.通过构建Node服务和建立一个评论功能，使用ajax实例演示XSS的攻击和预防。

- 文本由服务器端转义，客户端反转义，再DomParse，再过滤
- 使用encode.js和domparse.js第三方库对文本进行解码和DOM parse操作
- 详见本人Github的两个文件[`routes/index.js`](https://github.com/ickedesign/XSS_WebSecurity/blob/master/routes/index.js)和[`views/index.ejs`](https://github.com/ickedesign/XSS_WebSecurity/blob/master/views/index.ejs)，内含注释


2.文件夹涉及的命令行操作如下：

- `express -e ./ `使用express脚手架，用ejs作为模板引擎，在当前目录执行
- `npm install`安装依赖

<strong>备注：</strong>因为node_modules文件夹过大未上传，若clone本仓库，请使用命令行`npm install`安装依赖

另： 
- 查询字符串要通过encodeURIComponent()进行编码，然后才放到URL的末尾
- 获取服务器的响应内容，先把响应内容的文本转化为JSON格式，再获取URL的name对应的value，最后解码。比如在Ajax的成功响应函数中可以这样写，decodeURIComponent(JSON.parse(xhr.response).comment)，其中xhr是一个XMLHttpRequest对象，comment是对应的查询字段的name名称
