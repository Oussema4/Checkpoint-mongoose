import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewProduit, editProduit } from '../Redux/actions/productAction';

function AddEdit() {
const edit=useSelector(state=>state.productReducer.edit)
const produit=useSelector(state=>state.productReducer.produit)

const navigate=useNavigate()

  const[formdata,setformdata]=useState({designation:"",quantite:0,prixUnitaire:0,prixTotal:0})

  const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
const dispatch=useDispatch()

const handleAdd=()=>{


  dispatch(addNewProduit(formdata))
 navigate("/product")
}

const handleEdit=()=>{


  dispatch(editProduit(produit._id,formdata))
 navigate("/product")
}
useEffect(()=>{
  edit && edit?setformdata({designation:produit && produit.designation,
    quantite:produit && produit.quantite,
    prixUnitaire:produit && produit.prixUnitaire,
    prixTotal:produit && produit.prixTotal },[produit]):setformdata({designation:"",quantite:0,prixUnitaire:0,prixTotal:0})
},[produit])

  return <div>


<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Désignation</Form.Label>
    <Form.Control  type="text" placeholder="désignation" value={formdata.designation} name="designation" onChange={handleChange}/>
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Quantité</Form.Label>
    <Form.Control type="number" placeholder="quantité"  name="quantite" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Prix Unitaire</Form.Label>
    <Form.Control type="number" placeholder="prix unitaire"  name="prixUnitaire" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Prix Total</Form.Label>
    <Form.Control type="number" placeholder="prix total"  name="prixTotal" onChange={handleChange}  />
  </Form.Group>
{edit?<Button  variant="info" type="submit"  onClick={handleEdit}   >
    Edit
  </Button>:<Button  variant="primary" type="submit"  onClick={handleAdd}>
    Add
  </Button>}
  
</Form>
  </div>;
}

export default AddEdit;
