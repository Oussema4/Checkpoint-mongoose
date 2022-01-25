 const mongoose=require("mongoose")
require("dotenv").config()




 const connectDb= async ()=>{


try {
   await mongoose.connect(process.env.DBURL)
console.log("db connected")
} catch (error) {
    console.log("db not connected")
    
}



 }

 module.exports=connectDb
