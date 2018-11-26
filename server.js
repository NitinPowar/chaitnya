var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use("/css", express.static(path.join(__dirname + '/css')));
app.use("/images", express.static(path.join(__dirname + '/images')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
});