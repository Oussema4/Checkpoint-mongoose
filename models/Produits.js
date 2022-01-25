const mongoose=require("mongoose")

const schema=mongoose.Schema


const produitSchema=new schema ({

    designation:{

type:String,required:true

    },
    quantite:{
        type:Number,required:true


    },
    prixUnitaire:{
        type:Number,required:true
    },
    prixTotal:{

        type:Number,required:true

    }

})

module.exports=mongoose.model("Produit",produitSchema)