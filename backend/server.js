const express = require('express')
const app = express()
const dotenv = require('dotenv');
const path = require('path')
const connectDB = require("./config/connectionDB");
const User = require('./models/Register');
connectDB()
dotenv.config()
const PORT = process.env.PORT||5000

app.use(express.json());
app.use(express.urlencoded({extended:false}));


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../gym/build")));

    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,"../gym/build/index.html"))
    })
}else{
    app.get('/',(req,res) =>{
        res.send('running')
    })
}


app.post("/register",async(req,res) =>{
    try{
        const reg = new User({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            address:req.body.address,
            time:new Date()
        })
        console.log("register success")
        const regMember = await reg.save();
        res.status(200).send("registration successful")
        res.redirect("/");
    }catch(err){
        res.status(400).send(err)
    }
})

app.listen(PORT , ()=>{
    console.log(`server run in ${process.env.NODE_ENV} mode on port ${PORT}`)
})


