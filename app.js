var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', express.static('public'));


app.get('/', function (req, res) {
    res.render('./pages/index');
});
app.get('/home2', function (req, res) {
    res.render('./pages/index2');
});
app.get('/properties-grid', function (req, res) {
    res.render('./pages/available-property-grid');
});
app.get('/properties-list', function (req, res) {
    res.render('./pages/available-property-list');
});
app.get('/blog', function (req, res) {
    res.render('./pages/blog');
});
app.get('/blog-post', function (req, res) {
    res.render('./pages/blog-post');
});
app.get('/book-room', function (req, res) {
    res.render('./pages/book-property');
});
app.get('/filter-properties', function (req, res) {
    res.render('./pages/filter-properties');
});
app.get('/confirm', function (req, res) {
    res.render('./pages/confirm-booking');
});
app.get('/contact', function (req, res) {
    res.render('./pages/contact');
});
app.get('/property-details', function (req, res) {
    res.render('./pages/property-details');
});
app.get('/search-results', function (req, res) {
    res.render('./pages/search-results');
});
app.get('/profile', function (req, res) {
    res.render('./pages/profile');
});
app.get('/invoice', function (req, res) {
    res.render('./pages/invoice.ejs');
});



app.listen(PORT, function () {
    console.log('E-HOMES-USERS app server running on port: ' + PORT);
});