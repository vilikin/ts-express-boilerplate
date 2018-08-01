import * as express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.listen(8080, () => {
  console.log('Im listening');
});
