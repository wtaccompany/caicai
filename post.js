let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
  let allData = '';
  req.on('data', function (trunk) {   //进行数据的接收
    allData += trunk;
  });
  req.on('end', function () {  //数据接收完成，出来数据,buffer缓冲区处理过的数据
    let obj = JSON.parse(allData);  //此时因为数据进行转换，拿到的user和pass为undefined，转成对象
    //成功返回1，失败返回-1
    if (obj.user === 'user' && obj.pass === 'pass') {
      res.end('1');
    } else {
      res.end('-1');
    }
    // console.log(allData);
    // console.log(allData.user);  //undefined
    // console.log(allData.pass);  //undefined
  });
}).listen(3000, () => {
  console.log('服务器已启动');
});
