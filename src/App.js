import './App.css';
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import logoPNG from '/Users/mateooliver/Desktop/React/gorras/src/components/img/logoPNG.png'

function App() {
  return (
    <header>
        <Navbar logo={logoPNG}/>
        <ItemListContainer/>
    </header>
  );
}

export default App;
