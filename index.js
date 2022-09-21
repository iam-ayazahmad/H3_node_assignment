const express= require("express")

const mongoose=require("mongoose")

const app=express()

const ConnectDB=()=>{
    return mongoose.connect("mongodb+srv://Ayaz_Ahmad:AYAZisLUCKY@cluster0.sxbry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

}

const userSchema=mongoose.Schema({
    name:String,
    price:Number
})

const Myuser=mongoose.model("user",userSchema)

app.post("/users",async(res,req)=>{
    try{

        const user= await Myuser.create(req.body)

        return res.status(201).send(user)

    }
    catch(err){

        return res.status(500).send({err:err.message})

    }
})


app.listen(5900,async()=>{
    try{

        await ConnectDB()
    }
    catch(err){


        console.log(err)

    }
})