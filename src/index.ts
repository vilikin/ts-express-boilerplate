import * as express from 'express';
import config from './config';

const app = express();

app.get('/test', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.listen(config.PORT, () => {
  console.log(`Im listening to ${config.PORT}`);
});
