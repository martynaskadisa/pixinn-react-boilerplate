import express = require('express');
import path = require('path');
import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotMiddleware = require('webpack-hot-middleware');
import webpack = require('webpack');
import webpackConfig = require('../../webpack.config');

const app = express();
const HOST: string = process.env.HOST || '0.0.0.0';
const PORT: number = process.env.PORT || 3000;
const ENV: string = process.env.NODE_ENV || 'development';

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { 
  noInfo: true, 
  publicPath: (webpackConfig as webpack.Configuration).output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use('/assets', express.static(path.resolve(__dirname, '../../dist')));

app.get('*', (req, res) => {
  const bundlePath = 
    (webpackConfig as webpack.Configuration).output.publicPath +
    (webpackConfig as webpack.Configuration).output.filename;

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
      <script src="${bundlePath}"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, HOST, (err: any) => {
  if (err) {
    return console.error('Failed to start server!', err);
  }

  console.log(`=> Express server started on ${HOST}:${PORT}`);
  console.log('Environment:', ENV);
});
