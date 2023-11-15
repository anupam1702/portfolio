const express=require('express');
const dotenv=require('dotenv'); 
const bodyParser=require("body-parser");
const  mongoose = require('mongoose');



const app=express();
app.use(bodyParser.json());

dotenv.config({path:'./config.env'})

const DB=process.env.DATABASE;
const PORT=process.env.PORT;


mongoose.connect(DB).then(()=>{
    console.log(`connection sucessful`);
}).catch((err)=>console.log(`no connection ${err}`));

const User=require('./modals/userSchema')





app.use(express.json());

// async function insert(){
//     await User.create({
//         name:'Anupam',
//         email:'anupak',
//         subject:'hello',
//         message:'world'
//     })
// }
// insert();






// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

// app.get('/dat',(req,res)=>{
//     res.send("world")

// })



app.post('/dat',(req,res)=>{
  const {name,email,subject,message}=req.body;
  

  if(!name || !email || !subject || !message){
    res.status(422).json({error:"plz fill properly"});
  }


  User.findOne({email:email}).then((userExist)=>{
    if(userExist){
        return res.status(422).json({error:"email already exist"});
    }
    const user=new User({name,email,subject,message});
    user.save().then(()=>{
        res.status(201).json({message:"Data sent successfully"});

    }).catch((err)=>res.status(500).json({error:"failed to registered"}))
  }).catch(err=>{console.log(err);});
   
})

app.listen(PORT,(req,res)=>{
    console.log(`app is running on ${PORT}`);
})