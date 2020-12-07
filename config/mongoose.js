const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost/contact_db");

const db= mongoose.connection;
db.on('error',console.error.bind(console,"this is error for mongo"));
db.once('open',function(){
console.log("this coonection is done ");

});