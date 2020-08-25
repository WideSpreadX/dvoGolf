const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const Handlebars = require('handlebars')
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
/* app.use(express.urlencoded({extended: true})); */
app.use(express.json());
app.use(express.static('public'));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/golf', {useNewUrlParser: true, useUnifiedTopology: true});

// Landing Page
app.get('/', (req, res) => {
    res.render('index');
});

// Invitation Page
app.get('/invitation', (req, res) => {
    res.render('invite');
});

// Register Page
app.get('/register', (req, res) => {
    res.render('register');
});

// Logout Page
app.post('/logout', (req, res) => {
    res.render('/');
});

// Food & Drink Menu Page
app.get('/food-drink', (req, res) => {
    res.render('food-drink');
});

// Home Page
app.get('/home', (req, res) => {
    res.render('home');
});

// Scorecard Page
app.get('/scorecard', (req, res) => {
    res.render('scorecard');
});

// Help Page
app.get('/help', (req, res) => {
    res.render('help');
});

// Start Server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
})