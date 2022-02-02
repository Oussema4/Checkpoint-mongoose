import { GETALLPRODUCTS, GETONEPRODUCT, TOGGLEFALSE, TOGGLETRUE } from "../types";

const initstate={

    produits:[],
    loading:true,
    edit:false,
    produit:null
}

const productReducer=(state=initstate,action)=>{

switch (action.type) {
    case GETALLPRODUCTS:
        return{...state,produits:action.payload,loading:false}

case TOGGLETRUE:
    return{...state,edit:true}
case TOGGLEFALSE:
    return{...state,edit:false}

    case GETONEPRODUCT:
        return{...state,produit:action.payload,loading:false}
    default:
        return state;
}
           
    }

export default productReducer