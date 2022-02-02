import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduit, getOneProduct, toggleTrue } from '../Redux/actions/productAction';

function ProductCard({el}) {
const dispatch=useDispatch()
const navigate=useNavigate()
const handleDelete=()=>{
if(window.confirm(`Do you want delete ${el.designation}`)){


  dispatch(deleteProduit(el._id))
}
  
}
const handleEdit=()=>{
  dispatch(getOneProduct(el._id))
  dispatch(toggleTrue());
  navigate("/add_edit")
  }

  return <div>

<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Designation : {el.designation}</ListGroup.Item>
    <ListGroup.Item>Quantite : {el.quantite}</ListGroup.Item>
    <ListGroup.Item>Prix Unitaire : {el.prixUnitaire}</ListGroup.Item>
    <ListGroup.Item>Prix Total : {el.prixTotal}</ListGroup.Item>
    <ListGroup.Item><Button variant="danger" onClick={handleDelete}>Delete</Button>
    <Button variant="warning" onClick={handleEdit} >Edit</Button></ListGroup.Item>


    
  </ListGroup>
</Card>

  </div>;
}

export default ProductCard;
