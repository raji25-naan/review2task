const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

// const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 4200

// log requests
app.use(morgan("common"));

// mongodb connection
// connectDB();

// parse request to body-parser 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assessts/css")))
app.use('/img', express.static(path.resolve(__dirname, "assessts/img")))
app.use('/js', express.static(path.resolve(__dirname, "assessts/js")))

// load routers
// app.use('/', require('./server/routes/router'))

app.get('/',function(req,res){
    //res.send("hello");
    res.render('index')
})
app.listen(4200,function(){
    console.log("server connected")
})