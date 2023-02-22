import logo from './logo.svg';
import './App.css';
import'./index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './layout/Navbar';
import Login from './pages/Login';
import NovoCliente from './clientes/NovoCliente';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NovoUsuario from './usuarios/NovoUsuario';
import Pdf from "./assets/pdf" 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/clienteRelatorio" element={<Pdf/>}/>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<NovoUsuario/>}/> 
          <Route exact path="/clientes" element={<Home />} />
          <Route exact path="/novoCliente/:codigo" element={<NovoCliente />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
