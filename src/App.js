import './App.css';
import Navbar from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import logoPNG from '/Users/mateooliver/Desktop/React/gorras/src/components/img/logoPNG.png'

function App() {
  return (
    <header>
        <Navbar logo={logoPNG}/>
        <ItemListContainer stock={0} />
    </header>
  );
}

export default App;
