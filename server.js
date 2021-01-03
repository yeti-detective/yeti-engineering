const port = process.env.PORT || 8000;

const express = require("express");
const app = express();
const path = require("path");
const sqlite = require("sqlite3").verbose();

const validPhone = require(path.join(
  __dirname + "/src/client/app/scripts/verify_phone"
));

const KILL_THE_HITLERS = "src/client/kth";

// const db = new sqlite3.Database('./src/db/likes.db', err => {
//   if (!err) {
//     console.log("successfully connected to in-memory db")
//   } else {
//     console.log("Error connecting to SQLITE3 Database:", JSON.stringify(err, undefined, 2))
//   };
// });


// serve the app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/client/index.html"));
});

app.get("/images/:filename", (req, res) => {
  res.sendFile(
    path.join(__dirname + `/src/client/public/images/${req.params.filename}`)
  );
});

app.get("/style", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/client/public/style.css"));
});

// serve the script
app.get("/script", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/client/public/bundle.js"));
});

app.get("/likes", (req, res) => {
  res.json(likes);
});

// post likes to the in memory database
app.post("/click", (req, res) => {
  db.collection("likes").save({ _id: 69420247, likes: ++likes });
  res.json(likes);
});

app.get("/click", (req, res) => {
  res.json(likes);
});

app.get("/call/:phoneNumber", (req, res) => {
  res.redirect(`tel:${validPhone(req.params.phoneNumber)}`);
});

app.get("/payme", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "client", "public", "payme.html"));
});

app.get("/kill_the_hitlers", (req, res) => {
  res.sendFile(path.join(__dirname, KILL_THE_HITLERS, "kill_the_hitlers.html"));
});

app.get("/kth/style", (req, res) => {
  res.sendFile(path.join(__dirname, KILL_THE_HITLERS, "kth_style.css"));
});

app.get("/kth/script", (req, res) => {
  res.sendFile(path.join(__dirname, KILL_THE_HITLERS, "script.js"));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});
