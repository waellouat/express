const express=require('express')
const app=express()
const port=4001
// sent file home.html using the path to the localhost
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
})
//
app.get('/ourservice',(req,res)=>{
    res.sendFile(__dirname+'/ourservice.html')
})
//
app.get('/contactus',(req,res)=>{
    res.sendFile(__dirname+'/contactus.html')
})
//
app.get('/aboutus',(req,res)=>{
    res.sendFile(__dirname+'/aboutus.html')
})
// include css file
app.use(express.static(__dirname+'/'))


app.listen(port,err => err?console.log(err):console.log(`you are on port ${port}`))