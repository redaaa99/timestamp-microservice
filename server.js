// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var strftime = require('strftime');

app.use(express.static(__dirname + '../public'));
app.set('view engine', 'jade');

app.get("/", function (request, response) {
  response.render('index');
});

function unixToNatural(unixtime)
{
  var natural = strftime('%B %e, %Y', new Date(unixtime));
  return natural;
}

function naturalToUnix(natural)
{
  var unixtime;
  return unixtime;
}

app.get("/:str", function (request, response) {
  var str = request.params.str;
  response.json({unix : parseInt(str),
                natural : unixToNatural(parseInt(str))});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
