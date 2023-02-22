import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"




function Fpdf() {
 
    let navlink=useNavigate("/clientes")
    
    const { codigo } = useParams();
    const [cliente, setCliente] = useState({
        codigo: codigo,
        nome: "",
        cpf: "",
        endereco: "",
        cidade: "",
        complemento: "",
        uf: "",
        celular: "",
        telefone: "",
        observacao: "",
        rg: "",
        dataNascmemto: "",
        cep: ""
    })
    console.log("cliente: 2"+codigo)
    const { nome, cpf, endereco, cidade, complemento, uf,
        celular, telefone, observacao, rg, dataNascmemto, cep } = cliente

    const onInputChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        // Load the PDF file after the component has mounted
        axios.get(`http://localhost:8080/imprimirF/${codigo}`);
      }, []);
      
    
    //axios.get(`http://localhost:8080/imprimirF/${codigo}`);
    /*const carregarCliente = async () => {
         await axios.get(`http://localhost:8080/imprimirF/${codigo}`);
        
    };

    useEffect(() => {
        carregarCliente();
    }, []);*/

    const [numPages, setNumPages] = useState(1);  
    return (
        <div>
        <object data="/clientesF.pdf" type="application/pdf" width="100%" height="1000px">

        </object>
    </div>

  );    


  
}
export default Fpdf
