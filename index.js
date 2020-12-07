const { log } = require('console');
const express=require('express');
const port=8000;
const path=require('path');

const db=require('./config/mongoose.js');
const { findByIdAndDelete } = require('./models/contact.js');
const Contact=require('./models/contact.js');

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));

app.use(express.urlencoded());
app.use(express.static('assets'));


let contactList=[
        
];


app.get('/',function(req,res){


    // console.log(req);

    //fetching data from database using find funcion"""
    Contact.find({},function(err,contact){
if(err){
    console.log('error in fetching data from database');
    return;

}
return res.render('home',{
    title:"ContactLIST",
    contact_list:contact
});

    });
// 

});

app.post('/create_contact',function(req,res){
// console.log(req.myna);
// contactList.push(req.body);
//Add data from request in collection using create function

Contact.create({
    name:req.body.name,
  phone:req.body.phone  
},function(err,newContact){
if(err)
{
    console.log('error in document create');
    return;
}
console.log(newContact);

return res.redirect('/');

});



// return res.redirect('/');


});

app.get('/delete-contact',function(req,res){

let id=req.query.id;

// let contactIndex=contactList.findIndex(contact => contact.phone==phone);
Contact.findByIdAndDelete(id,function(err){
if(err)
{
    console.log(err);
    return;

}
return res.redirect('back');

});





});

// app.use(function(req,res,next){
//     req.myname="lovepreet singh";
    
//     next();
    
    
    
//     });
//     app.use(function(req,res,next){
//         // req.myname="lovepreet singh";
//         console.log(req.myname);

//         next();
        
        
        
//         });
app.listen(port,function(err){

    if(err)
    {
        console.log(err);
        return;

    }
    console.log('runnin');


});
