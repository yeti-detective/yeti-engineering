var port = process.env.PORT || 8000;

var express = require('express');
var app = express();
var path = require('path');
const mongo = require('mongodb').MongoClient

var db
var likes
var id

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
    db.collection('likes').save({_id: 69420247, likes: ++likes})
    res.json(likes)
});

app.get('/click', (req, res) => {
    res.json(likes);
})

mongo.connect('mongodb://liker:thisisasecurepassword@ds157278.mlab.com:57278/yetis_first_db', (err, database) => {
    if (err) throw err
    db = database
    app.listen(port, ()=>{
    console.log('listening on ' + port);
    });
    db.collection('likes').find().toArray((err, result) => {
        if (err) throw err
        likes = result[0]['likes']
    })
})

