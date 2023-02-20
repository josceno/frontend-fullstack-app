import logo from './logo.svg';
import './App.css';
import'./index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import NovoCliente from './clientes/NovoCliente';
import Clientes from './pages/Clientes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/clientes" element={<Clientes />} />
          <Route exact path="/novoCliente/:codigo" element={<NovoCliente />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
