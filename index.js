const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


// app.get('/',function(req,res){
//     res.send('<h1>Gajendra</h1>');
// })

app.get('/',function(req,res){
    return res.render('home',{
        title : 'home page'
    });
})
app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('server running into port : ', port);
})