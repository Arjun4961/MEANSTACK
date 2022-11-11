const express=require('express');

const app=express();

const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/CSE_C",(err)=>{
if(!err){
console.log("db connected");

}
else
console.log("db error");
});

const ns=new mongoose.Schema({
name:String,
age:Number
});
const nm=new mongoose.model("records",ns);
nm.deleteOne({name:'balli'}).then(function(){
console.log("Data deleted");//success
}).catch(function(error){
console.log(error)//failure
});