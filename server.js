var port = process.env.PORT || 8080;

var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var likes = require('./src/client/public/likes.js');
console.log(likes);

// serve the app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/client/index.html'));
});

app.get('/wedding', (req, res) =>{
    res.sendFile(path.join(__dirname + '/src/client/wedding.html'));
});

app.get('/urlShortner', (req, res) =>{
    res.sendFile(path.join(__dirname + '/src/client/urlShortener.html'));
});

// serve the script
app.get('/script', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/client/public/bundle.js'));
});

app.get('/likes', (req, res) =>{
    res.json(likes);
});

// post likes to the hosted database
app.post('/click', (req, res) => {
    likes.howMany += 1;
    fs.writeFile('./src/client/public/likes.js', "module.exports = (" + JSON.stringify(likes) + ");", 'utf-8', (err, data)=>{
        if(err){throw err}
        likes = require('./src/client/public/likes.js');
        res.json(likes);
    });
});

app.listen(port, ()=>{
    console.log('listening on ' + port);
    });