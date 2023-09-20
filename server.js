const express=require('express');
const app=express()
const homeRouter=require('./routes/home')
app.use('/',homeRouter)
const port=process.env.port || 3000
app.listen(port)