var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    location: [String],
    browser: String,
    age: String,
    gender: String
}, {collection : "user"});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel

