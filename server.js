var port = 1337;
var express = require('./config/express.js');

var app = express();

app.listen(port);
module.exports = app;

console.log("Running on port "+port);
