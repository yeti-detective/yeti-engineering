var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/client/index.html'));
});

app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/client/public/bundle.js'));
});

app.listen(8080, ()=>{
    console.log('listening on 8080');
})