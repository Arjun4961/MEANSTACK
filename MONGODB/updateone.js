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
const old={name:'lalli'};
const new1={age:100};
let doc=nm.findOneAndUpdate(old,new1,(err)=>{
if(err){
console.log(err);
}
else{
console.log("update");
}
});