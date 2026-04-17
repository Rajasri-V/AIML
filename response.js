const express=require('express')
const app=express()
//RESPONES
app.get('/about',(req,res)=> {
    res.json({name:"babu",age:50})
})
app.get('/heyy',(req,res)=> {
    //res.status(200).send("Success");
    res.status(400).send("failure");
})
app.get('/',(req,res)=>{
    res.status(105).send("ok ok")
})

app.get('/sir',(req,res)=>{
    res.sendFile(__dirname + '/index.html'); 

})

//METHODS HTTP
app.post('/aiml',(req,res)=>{
    res.send("This is POST request");
})
app.put('/ms',(req,res)=>{
    res.send("This is PUT request");
})
app.delete('/hi',(req,res)=>{
    res.send("delete request")
})
app.listen(3000,()=>{
    console.log("as hot as the fire as cold as the ice")
})