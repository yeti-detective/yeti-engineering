var port = 8080; // 

var express = require('express');
var app = express();
var path = require('path');
// var mongo = require('mongodb').MongoClient; do I need mongo?
var fs = require('fs');
// var db;
var likes = require('./src/client/public/likes.js');
console.log(likes);



// serve the app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/client/index.html'));
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
        console.log('likes updated: ' + JSON.stringify(likes));
        res.json(likes);
    })
    // db.update({}, {$set:{'likes': likes}});
});

/*
mongo.connect('mongodb://liker:L1k3r@ds157278.mlab.com:57278/yetis_first_db', (err, dat)=>{
    if(err){throw err}
    console.log('mongo connected');
    db = dat.collection('likes');
    //likes = db.collection('likes').find({likes: {$gt: -1}}, {likes: 1}).toArray()[0];
    db.find({}, {_id: 0, likes: 1}).toArray((err, result) => {
        if(err) throw err;
        likes = parseInt(result[0].likes);
    });
});
*/

app.listen(port, ()=>{
    console.log('listening on ' + port);
    });