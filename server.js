import express from 'express';
import https from 'https';
import path from 'path';
import fs from 'fs';
import url from 'url';

const app = express();

// view engine setup
app.engine('.html', require('ejs').__express); //设置视图为ejs引擎
app.set('views', path.join(__dirname, 'views'));//设置视图为html引擎，ejs在页面仍然可用
app.set('view engine', 'html'); //设置视图为html引擎，ejs在页面仍然可用

let asUrl = url.parse('https://localhost:8712');
let port = asUrl.port;

app.use(express.static(path.join(__dirname, 'static')));
console.log('----------test-----------------');
app.get('/login', function(req, res) {
  res.render('login');
})
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});


// app.get('/', (req, res) => {
//   res.send('hello world');
// });

const options = {
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt')
};

const server = https.createServer(options, app).listen(port, () => {
  console.log('server running in port 8712');
});
