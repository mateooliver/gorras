import './App.css';
import Navbar from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <header>
        <Navbar />
        <ItemListContainer stock={10} />
    </header>
  );
}

export default App;
