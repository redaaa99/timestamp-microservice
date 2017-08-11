// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get("/", function (request, response) {
  response.render('index', function(err, html) {
  response.send(html);
});
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
