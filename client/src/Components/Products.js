import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../Redux/actions/productAction';
function Products() {
const produits=useSelector(state=>state.productReducer.produits)

  const dispatch=useDispatch()

  useEffect(()=>{

dispatch(getAllProducts())
    
  },[])


  
  return <div className='productlist'>

{produits.map(el=><ProductCard el={el} key={produits._id}></ProductCard>)}


  </div>;
}

export default Products;
