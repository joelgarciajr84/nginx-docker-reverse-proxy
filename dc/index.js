
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
let getHeros = require('./heroes-api');

app.get('/', (req, res) => res.send('DC API RUNNING'));
app.post('/get-hero/', getHeros.getDcHeroes);


let server = app.listen(8191, async function() {
  let host = await server.address().address;
  let port = await server.address().port;
  console.log('DC API RUNNING ON ', host, port);
});

module.exports = app;