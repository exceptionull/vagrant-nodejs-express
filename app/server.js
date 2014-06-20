var express = require('express'),
    app = express(),
    port = 80;

app.configure(function() {
    app.use(express.static(__dirname));
});

console.log("vagrant-nodejs-express server listening...");

app.listen(port);