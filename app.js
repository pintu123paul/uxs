//var express = require('express');
//var app = express();

//var port = process.env.PORT || 8080

//app.use(express.static('public'));

var express = require('express');
//create an express application
var pg = require('pg');
var parser = require('body-parser');
const app =express();

app.use(express.static('public'));
app.use(parser.json());

app.set('view engine', 'html');


app.get('/', function(request, response){
    response.render('index');
});
app.get('/about', function(request, response){
    response.render('about');
});
app.get('/contact', function(request, response){
    response.render('contact');
});
app.get('/gallery', function(request, response){
    response.render('gallery');
});
app.get('/interests', function(request, response){
    response.render('interests');
});
app.get('/Linkdln', function(request, response){
    response.render('Linkdln');
});
app.get('/weebly', function(request, response){
    response.render('weebly');
});
app.get('*', function(request, response) {
  response.status(404).send('Page not found.');
});
//have the application listen on a specific port
app.listen(process.env.PORT);

//app.listen(3000);