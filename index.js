const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const v1Router = require('./Routes/v1');
const v2Router = require('./Routes/v2');



const app = express();
app.listen(PORT, (err)=>{
    if(!err) return console.log(`ok on post ${PORT}`);
    console.log(err);
})
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/restDemo', (err)=>{
if(!err) return console.log("DB connected succussfully");
console.log(err);
});

app.use(['/api'], v1Router); 
app.use(['/api'], v2Router);
