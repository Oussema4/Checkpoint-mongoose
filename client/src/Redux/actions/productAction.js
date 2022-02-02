import axios from 'axios'
import { GETALLPRODUCTS,GETONEPRODUCT,TOGGLEFALSE,TOGGLETRUE } from '../types'

export const getAllProducts=()=>async(dispatch)=>{

    try {
        
const res= await axios.get('/api/produits')
dispatch({type:GETALLPRODUCTS,payload:res.data})
    } 
    
    catch (error) {
        console.log(error)
        
    }

}

export const addNewProduit=(formData)=>async(dispatch)=>{

    try {
        await axios.post('/api/produits',formData)
        dispatch(getAllProducts())
    }
    
    catch (error) {
        console.log(error)

    }
}

export const deleteProduit=(id)=>async(dispatch)=>{

    try {
        await axios.delete(`api/produits/${id}`)
        dispatch(getAllProducts())

        
    } catch (error) {
        console.log(error)

    }
}

export const editProduit=(id,formData)=>async(dispatch)=>{
    try {
        
        await axios.put(`api/produits/${id}`,formData)

        dispatch(getAllProducts())

    } catch (error) {
        console.log(error)

    }
}

export const toggleTrue=()=>{

    return{
        type:TOGGLETRUE
    }
}

export const toggleFalse=()=>{

    return{
        type:TOGGLEFALSE
    }
}

export const getOneProduct=(id)=>async (dispatch)=>{

    try {
        const res=await axios.get(`/api/produits/${id}`)
        dispatch({type:GETONEPRODUCT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}