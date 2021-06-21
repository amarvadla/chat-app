var mongoose = require('mongoose')


const dbUrl = 'mongodb://127.0.0.1:27017/new-app';

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to mongo");
});

db.on('error', function (err) {
    console.log('Mongodb error encountered [' + err + ']');
});


db.once('open', function () {
    
});