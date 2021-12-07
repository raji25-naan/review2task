const express = require("express");
const route = express.Router();

router.get('/',function(req,res){
    res.render("index.ejs")
});


module.exports = route;