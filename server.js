var express = require('express'),
  app = express(),
  port = process.env.PORT || 2810;

app.listen(port);

console.log('Bakugan RESTful API server started on: ' + port);