var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(",")[0];
  var lang = req.headers["accept-language"].split(",")[0];
  var os = req.headers["user-agent"].split("(")[1].split(")")[0];

  var data = {
    "ipaddress": ip,
    "language": lang,
    "software": os
  };

  JSON.stringify(data);
  res.send(req.headers);
});

app.listen(3000, function () {
  console.log('Server started');
});