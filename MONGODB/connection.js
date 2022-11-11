const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{

if(err)
console.log("DB NOT connected-Error");
else
console.log("DB Connected");});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});
const nm=new mongoose.model("records",ns); 
nm.insertMany([
    { name: 'lalli', age: 28},
    { name: 'balli', age: 45},
    { name: 'pilli', age: 34}
]).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});
