const express=require('express')
const app=express.Router()
app.get('/',(req,res)=>{
    res.send('Hello! My name is Manash');
})
module.exports=app