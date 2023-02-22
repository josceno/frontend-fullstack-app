import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"




export default function Fpdf() {
 
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
    
    const carregarCliente = async () => {
        const result = await axios.get(`http://localhost:8080/imprimirF/${codigo}`);
        console.log("cliente: "+codigo)
        setCliente(result.data);
    };

    useEffect(() => {
        carregarCliente();
    }, []);

    const [numPages, setNumPages] = useState(1);  
    return (
            <html width={"100%"}>
              <embed src={process.env.PUBLIC_URL + './clientesF.pdf'} width="100%" height="1336px" />
              </html>
  );    


  
}
