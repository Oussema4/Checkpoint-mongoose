const Produits = require("../models/Produits")


exports.addproduit=async(req,res)=>{

    const {designation,quantite,prixUnitaire,prixTotal}=req.body
    
    try {
        const produit=new Produits({
    
            designation,
            quantite,
            prixUnitaire,
            prixTotal,
        
        })
    
       await produit.save()
        res.send( {msg:"produit added",produit})
        
    } catch (error) {
        res.status(500).send("server error")
    }
    
    }



    

    exports.deleteproduit=async(req,res)=>{
        const  {produitId} =req.params
        try {
    await Produits.findByIdAndDelete(produitId)
    res.send("produit deleted")
    
            
        } catch (error) {
            res.status(500).send("server error")
        }
    }
    




    exports.getallproduits=async(req,res)=>{
        try {
        
        const produits= await Produits.find()
        
        res.send(produits)
            
        } catch (error) {
            res.status(500).send("server error")
        }
        
        }




        exports.updateproduit=async(req,res)=>{

            const  {produitId} =req.params
        
        
        try {
            await Produits.findByIdAndUpdate(produitId,{$set:{...req.body}})
            res.redirect("/api/produits")
            
        } catch (error) {
        
            res.status(500).send("server error")
        
        }
        
            
        }





        exports.getoneproduit=async(req,res)=>{
            const {produitId}=req.params
            try {
                const produit=await Produits.findById(produitId)
                res.send(produit)
                
            } catch (error) {
                res.status(500).send("server error")
            }
            
            }
   