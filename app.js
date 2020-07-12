const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo yeahh")
})

mongoose.connection.on('error', (err)=>{
    console.log("err connecting", err)
})

const customMiddleWare = ()=>{
    console.log("middleware executed!!");
}

app.use(customMiddleWare)

app.get('/', (req,res)=> {
    res.send('hello world');
})

app.listen(PORT, ()=>{
    console.log("server is running on", PORT)
})