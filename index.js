var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello World');//	Отправка ответа различных типов.
});

app.listen(3000, function(){
  console.log("3000 порт");
})
//для .env
// require('dotenv').config();
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {

//     res.send(process.env.SECRET_MSG);
// });
// app.get("/user", (req, res)=>{

//   res.send({name: process.env.NAME, age: process.env.AGE});
// });

//  app.listen(3000);


