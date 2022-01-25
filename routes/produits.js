const express=require("express");
const { addproduit, deleteproduit, getallproduits, updateproduit, getoneproduit } = require("../controllers/produitController");
const router=express.Router()


router.get("/test",(req,res)=>{

    res.send("hello guys");
})


router.post("/",addproduit)



router.get("/",getallproduits)

router.delete("/:produitId",deleteproduit)

router.put("/:produitId",updateproduit)

router.get("/:produitId",getoneproduit)




module.exports=router;  