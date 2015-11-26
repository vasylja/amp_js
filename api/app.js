var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var usersAPI = require('./users');
var choicesAPI = require('./choices');
var answersAPI = require('./answers');
var questionsAPI = require('./questions');

var path = require('path');

// http://expressjs.com/starter/static-files.html
app.use('/angular', express.static('node_modules/angular'));
app.use('/angular-route', express.static('node_modules/angular-route'));
app.use('/app', express.static('front'));

app.use('*', bodyParser.json());
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/../front/index.html'));
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

app.get('/answers/:id', answersAPI.getAnswer);
app.post('/answers', answersAPI.createAnswer);
app.put('/answers/:id', answersAPI.updateAnswer);
app.delete('/answers/:id', answersAPI.removeAnswer);
app.get('/answers', answersAPI.queryAnswer);

app.get('/questions', questionsAPI.getQuestions);
app.post('/questions', questionsAPI.createQuestion);

// REST
//
// CRUD



app.listen(3000);
console.log('App is running on port 3000');
