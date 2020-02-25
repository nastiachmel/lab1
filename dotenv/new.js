//console.log(process.env.SECRET_MSG);
var express = require('express');
var app = express();
// require('dotenv').config();
app.get('/', function(req, res){
  res.send(process.env.SECRET_MSG);//	Отправка ответа различных типов.
});
app.listen(3000, function(){
  console.log("3000 порт");
});

// app.get('/user', function(req, res){
//   res.send({name: process.env.NAME, age: process.env.AGE});
// });

// app.listen(3000);
