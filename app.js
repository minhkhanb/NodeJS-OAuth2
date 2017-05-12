var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
})

app.listen(3000);
console.log('Server started at http://localhost:3000');