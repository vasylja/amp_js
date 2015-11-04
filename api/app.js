var express = require('express');
var app = express();

var usersAPI = require('./users');
var choicesAPI = require('./choices');

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
// method for choiceAPI.queryChoice
// method for choicesAPI.removeByQuestionId

// REST
//
// CRUD



app.listen(3000);
console.log('App is running on port 3000');
