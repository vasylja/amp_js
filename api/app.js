var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world');
});

app.get('/users', usersAPI.getUsers);
app.get('/users/:id', usersAPI.getUser); 
app.post('/users', usersAPI.createUser);
app.put('/users/:id', usersAPI.updateUser);
app.delete('/users/:id', usersAPI.deleteUser);

// REST
//
// CRUD



app.listen(3000);
console.log('App is running on port 3000');
