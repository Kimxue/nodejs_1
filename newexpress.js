import express from 'express';  
const app = express();
const port = 7000;

console.log('Express is being initialized');

app.get('/', (req, res) => {
  console.log('Received request for /');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
