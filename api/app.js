var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var usersAPI = require('./users');
var choicesAPI = require('./choices');

app.use('*', bodyParser.json())
app.get('/', function(req, res){
	res.send('hello world');
});

app.get('/users', usersAPI.getUsers);
app.get('/users/:id', usersAPI.getUser); 
app.post('/users', usersAPI.createUser);
app.put('/users/:id', usersAPI.updateUser);
app.delete('/users/:id', usersAPI.deleteUser);

app.get('/choices/:id', choicesAPI.getChoice);
app.post('/choices', choicesAPI.createChoice);
app.put('/choices/:id', choicesAPI.updateChoice);
app.delete('/choices/:id', choicesAPI.removeChoice);
app.get('/choices', choicesAPI.queryChoices);
app.delete('/choices', choicesAPI.removeByQuestionId);

// REST
//
// CRUD



app.listen(3000);
console.log('App is running on port 3000');
