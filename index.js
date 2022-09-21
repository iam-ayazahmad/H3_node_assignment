const express= require("express")

const mongoose=require("mongoose")

const app=express()

const ConnectDB=()=>{
    mongoose.connect("mongodb+srvAyaz_AhmadAYAZisLUCKY@cluster0.sxbry.mongodb.netmyFirstDatabaseretryWrites=true&w=majority")

}

const userSchema