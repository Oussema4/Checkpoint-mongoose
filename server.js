const express=require("express")
const connectDb = require("./config/db")
const produitsRouter=require("./routes/produits")

const app=express()

connectDb();


app.use(express.json())

app.use("/api/produits", produitsRouter )



const port=process.env.PORT||8000

app.listen(port,()=>{

console.log(`server is running ${port}`)


})