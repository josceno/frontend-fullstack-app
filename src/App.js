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
import FPdf from "./assets/Fpdf" 

function App() {
  return (
    <div>
    <Router>
           <Routes>
             <Route exact path="/clienteRelatorio" element={<Pdf/>}/>
            </Routes>
    </Router>
    {/*<Router>
           <Routes>
            <Route exact path="/fpdf/:codigo" element ={<FPdf/>}/>
            </Routes>*/}
 
   
   
    <div className="App">
      <Router>
        <Routes>         
          <Route exact path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<NovoUsuario/>}/> 
          <Route exact path="/fpdf/:codigo" element ={<FPdf/>}/>
          <Route exact path="/clientes" element={<Home />} />
          <Route exact path="/novoCliente/:codigo" element={<NovoCliente />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
