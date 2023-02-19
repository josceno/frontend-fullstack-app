import logo from './logo.svg';
import './App.css';
import'./index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Clientes from './pages/Clientes';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Clientes/>
    </div>
  );
}

export default App;
