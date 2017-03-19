import express = require('express');
import path = require('path');

const app = express();
const HOST: string = process.env.HOST || '0.0.0.0';
const PORT: number = process.env.PORT || 3000;
const ENV: string = process.env.NODE_ENV || 'development';

const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pixinn react boilerplate</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/assets/bundle.js"></script>
  </body>
  </html>
`;

app.use('/assets', express.static(path.resolve(__dirname, '../../dist')));

app.get('*', (req, res) => {
  res.send(html);
});

app.listen(PORT, HOST, (err: any) => {
  if (err) {
    return console.error('Failed to start server!', err);
  }

  console.log(`=> Express server started on ${HOST}:${PORT}`);
  console.log('Environment:', ENV);
});
