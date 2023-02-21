import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams,useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';

export default function Clientes() {
    let navigate= useNavigate()
    const [clientes, setClientes] = useState([]);
    const {codigo} = useParams();

   
    const [cliente, setCliente] = useState({
        
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
    });

    const { nome, cpf, endereco, cidade, complemento, uf, celular, telefone, observacao, rg, dataNascmemto, cep } = cliente;
   
    const onInputChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value });
    };
    const carregarClientes = async () => {
        const result = await axios.get("http://localhost:8080/clientes");
        setClientes(result.data);
        
    };
    const onSubmit = async (e) => {
        console.log("cliente: "+cliente.codigo)
        await axios.put(`http://localhost:8080/cliente/${codigo}`, cliente);
    };

    const carregarCliente = async () => {
        const result = await axios.get(`http://localhost:8080/cliente/${codigo}`);
        setCliente(result.data);
    };

    useEffect(() => {
        carregarCliente();
    }, []);

    useEffect(() => {
        
        carregarClientes();
    }, []);
    const deletarCliente=async (codigo)=>{
            await axios.delete(`http://localhost:8080/cliente/${codigo}`)
            carregarCliente()
            carregarClientes();
            navigate("/clientes")
    }

    return (
        
        <div className='container'>
            <Navbar/>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td></td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.cpf}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>vizualizar</button>
                                    <Link
                                        
                                        className='btn btn-outline-primary mx-2'
                                        to={`/novoCliente/${cliente.codigo}`} >
                                           Editar
                                    </Link>
                                    <button className='btn btn-danger mx-2'
                                    onClick={()=>deletarCliente(cliente.codigo)}
                                    >Deletar</button>
                                {}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




        </div>
    )
}
