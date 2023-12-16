const express = require('express');
const helmet = require('helmet');
const app = express();

module.exports = app;
const API = require('./server.js'); // Declare 'api' once

app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', API); // Use 'api' here
app.get('/', function(request, response){
  response.sendFile(__dirname + '/views/index.html');
});

let Port = process.env.PORT || 3030;

app.listen(Port, () => {
  console.log(`Useful Programmer Info Security App Started on Port ${Port}`);
});












































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
