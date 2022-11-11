const express=require('express');

const app=express();

const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/priya",(err)=>{
if(!err){
console.log("db connected");
console.log('Record Inserted');
}
else
console.log("db error");
});

const ns=new mongoose.Schema({
name:String,
age:Number
});

const nm=new mongoose.model("records",ns);

const data=new nm({name:'priyaaa',age:35});

data.save();