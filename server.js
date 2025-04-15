const express = require("express");
const app=express();
const PORT=3000;
app.use(express.json());


let users=[];
app.post('/email',(req,res)=>{
    const email=req.query.email;
    if(!email){
        return res.status(400).json({message:"Email cannot be empty"});
    }
    res.json(
        id=email.length+1,
        email
    )
    email.push(users);
    res.status(201).json({message:"email added sucessfully"});
})
    
app.post('/password',(req,res)=>{
    const password =req.query.password;
    if(!password){
        return res.status(400).json({message:"passwords cannot be empty"});
    }
    res.json(
        id=password.length+1,
        password
    )
    password.push(users);
    res.status(201).json({message:"Password added successfully"})
})

app.get('/login',(req,res)=>{
    res.json(users)
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})