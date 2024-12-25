
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productlist from './Components/Productlist';
import Carouselle from './Components/Carousel';
import { Route, Routes } from 'react-router-dom';
import Allproducts from './Components/Allproducts';

function App() {
  return (
   <div>

<Header/>
<Routes>
  <Route path='/' element={
    <div>
<Carouselle/>
<Productlist/>
    </div>
    }/>
<Route path='/products' element={<Allproducts/>}/>

</Routes>

<Footer/>


   </div>


  );
}

export default App;
