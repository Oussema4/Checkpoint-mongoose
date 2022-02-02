import './App.css';
import Navbarp from './Components/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Products from './Components/Products';
import AddEdit from './Components/AddEdit';
import Notfound from './Components/Notfound';
function App() {
  return (
    <div className="App">
    <Navbarp></Navbarp>
     <Routes>
       <Route path="/" element={<Home></Home>}>  </Route>
       <Route path="/product" element={<Products></Products>}></Route>
       <Route path="/add_edit" element={<AddEdit></AddEdit>}></Route>
       <Route path="*" element={<Notfound></Notfound>}></Route>


     </Routes>
    
    </div>
  );
}

export default App;
