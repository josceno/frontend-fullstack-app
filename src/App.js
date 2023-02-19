import logo from './logo.svg';
import './App.css';
import'./index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import NovoClIente from './clientes/NovoCliente'
import Clientes from './pages/Clientes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar/>
      <Routes>
        <Route exac path="/" element={<Home/>}/>
        <Route exac path="/clientes" element={<Clientes/>}/>
        <Route exec path ="/novoCliente" element={<NovoClIente/>}/>
      </Routes>
     
    </Router>
    
    </div>
  );
}

export default App;
