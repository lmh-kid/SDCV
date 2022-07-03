const express = require('express');

const app = express();

// 设置跨域访问
app.all('*', (req: any, res: any, next: any) => {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  // //允许的header类型
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With'
  );
  // //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  // 可以带cookies 123
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

export default app;
