let express = require('express');
let server= express();
let path = require('path');


server.get('/',(req,res) => {
    res.send('Hello world');
});

server.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname, '/home.html'));

});

server.get('/add',(req,res) => {
    res.send(' Addition:' + (parseInt(req.query.num1) + parseInt(req.query.num2)));

});

server.get('/name',(req,res) => {
    res.send('Hello ' + req.query.name);

});


server.listen(4000);
console.log('Hello world');