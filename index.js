
const express= require('express');
const mongoose= require('mongoose');
const bookrouter =require("./routes/book")
// const config =  require("./config/mongoose")


const app=express();

const port=9000;
const url= "mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority";
console.log("url",url);

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}



app.use('./books', bookrouter)



app.listen(port, () =>{
    console.log('Server started'+  port);
})