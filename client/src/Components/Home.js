import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFalse } from '../Redux/actions/productAction';

function Home() {
const dispatch=useDispatch()

  return <div className='home'>


<>
  <div className="mb-2">
      <Link to="/product">
      
      <Button variant="primary" size="lg">
     Products List
    </Button>{' '}</Link>


    <Link to="/add_edit">
    <Button variant="secondary" size="lg" onClick={()=>dispatch(toggleFalse())}>
      Add Product
    </Button>

    </Link>
  </div>

</>
  </div>;
}

export default Home;
