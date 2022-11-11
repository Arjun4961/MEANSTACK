const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{

if(err)
console.log("DB NOT connected-Error");
else
console.log("DB Connected");});
