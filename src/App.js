
import './App.css';
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import logoPNG from '/Users/mateooliver/Desktop/React/gorras/src/components/img/logoPNG.png'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Navigate, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>


  
        <Navbar logo={logoPNG}/>
        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
          
          {/* error  */}
          <Route path='*' element={<Navigate to="/"/>} />
        </Routes>


      </BrowserRouter>
  );
}

export default App;
