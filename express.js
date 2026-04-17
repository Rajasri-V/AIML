const express=require('express')
const app=express()

app.get('/',(req,res)=> {
    res.send("main page")
})


app.get('/home',(req,res)=> {
    res.send("home page")
})

app.get('/login',(req,res)=> {
    res.send("login page")
})

app.get('/about',(req,res)=> {
    res.send("about page")
})
app.get('/school',(req,res)=> {
    res.send("welcome page")
})

app.get('/heyy',(req,res)=> {
    res.send("hii i am rajasri learning FSD  TQ")
})
app.get('/loves',(req,res)=> {
    res.send("biryani,panipuri,choclates,icecream,kurtha sets")
})
//dynamic
app.get('/file/:id',(req,res)=>{
    res.send("file is running in cdml")
    console.log(req.params.id)
    console.log(req.query.name)
    console.log(req.query.age)
    console.log(req.query)
    console.log(req.headers)
    console.log(req.method)
})

app.listen(3000,()=>{
    console.log("runninggg")
})

