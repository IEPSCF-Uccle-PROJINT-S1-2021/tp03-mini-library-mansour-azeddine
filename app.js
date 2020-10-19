const express= require('express');
const app = express();
const books = require('./books')
const logger= require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


app.set('views',path.join(__dirname,"views"));
app.set('view engine',"pug");

const hostname ="127.0.0.1";
const port ="4242";


app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use("/static",express.static('public'));
app.use('/books',books);
app.use('/',books);
/*
app.get('/',(req,res) =>{
res.redirect('/static/form.html');
});*/


app.listen(port,()=>{
  console.log('Express.js server listening')
})
