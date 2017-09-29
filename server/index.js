import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8712);
console.log('the project running in prot 8712');
