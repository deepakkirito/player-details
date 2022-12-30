const express = require('express');
const routes = require('express').Router();
const playerRoutes = require('./src/players.routes');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');


const port = 8000;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://deepakkirito:Deep%40kkirito@cluster0.otcmztf.mongodb.net/test");
let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'DB Connection error!'));
db.on('open', () => {
    console.log('MongoDB is connected successfully');
    // startServer();
});

app.use(cors())

app.use("/", function (req, res, next) {
    console.log(req.query)
    // res.status(200).send(`Welcome to the Players Database`);
    next();
});

app.use("/player", playerRoutes);

app.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}`);
});
