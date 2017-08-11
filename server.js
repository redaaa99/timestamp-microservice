// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require("moment");

app.use(express.static(__dirname + '../public'));
app.set('view engine', 'jade');

app.get("/", function (request, response) {
  response.render('index');
});

function unixToNatural(unixtime)
{
  return moment.unix(unixtime).format("MMMM D, YYYY");
}

function naturalToUnix(natural)
{
  var unixtime;
  return unixtime;
}
var regNums = /^\d+$/;
app.get("/:str", function (request, response) {
  var str = request.params.str;
  if(regNums.test(str))
    {
      response.json({unix : parseInt(str),
                natural : unixToNatural(parseInt(str)*1000)});
    }
  else if(moment(str).isValid())
    {
      response.json({
        unix : parseInt(moment(str).format("X")),
        natural : moment(str).format("MMMM D, YYYY")
      });
    }
  else
    {
      response.json({
        unix : null,
        natural : null
      });
    }
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
