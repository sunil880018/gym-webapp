const mongoose = require('mongoose')
/*
mongoose.connect("mongodb://localhost:27017/gympersondetails",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then( () =>{
    console.log("connection success")
}).catch( (e) =>{
    console.log("no connection")
})*/

const connectDB = async() =>{
 try{
     const conn = await mongoose.connect("mongodb+srv://gym1234:gym1234@cluster0.wz1rv.mongodb.net/gympersondetails",{
         useUnifiedTopology:true,
         useNewUrlParser:true,
         useCreateIndex:true,
     })


     console.log(`Mongo Connect: ${conn.connection.host}`)
 } catch (error){
    console.log(`Error: ${error.message}`)
    process.exit(1)
 }
}

module.exports = connectDB