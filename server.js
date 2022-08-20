const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');



// imports routes
app.use(bodyParser.json());
const postsRoutes = require('./routes/posts')



app.use('/posts',postsRoutes);



//ROUTES

app.get("/",(req,res) => {
    res.send("WE ARE ON HOME");
})

//  connect to database

 mongoose.connect(process.env.DB_CONNECTION, 
  {useNewUrlParser : true, useUnifiedTopology : true},
  ).then(()=>{
    console.log("DATABASE CONNECTED");
  }).catch((err) =>{
    console.log({mesaage : err});
  })
// How to listen to server;

app.listen(3000);