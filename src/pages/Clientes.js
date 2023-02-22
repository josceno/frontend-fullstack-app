import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';

export default function Clientes() {
    let navigate = useNavigate()
    const [clientes, setClientes] = useState([]);
    const { codigo } = useParams();

    const [search, setSearch] = useState('');

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
        setSearch(e.target.value);
    };

    const carregarClientes = async () => {
        const result = await axios.get("http://localhost:8080/clientes");
        setClientes(result.data);
    };

    const carregarCliente = async () => {
        const result = await axios.get(`http://localhost:8080/cliente/${codigo}`);
        setCliente(result.data);
    };

    const onSubmit = async (e) => {
        await axios.put(`http://localhost:8080/cliente/${codigo}`, cliente);
    };

    const deletarCliente = async (codigo) => {
        await axios.delete(`http://localhost:8080/cliente/${codigo}`);
        carregarCliente();
        carregarClientes();
        navigate("/clientes");
    };

    useEffect(() => {
        carregarCliente();
    }, []);

    useEffect(() => {
        carregarClientes();
    }, []);

   

    const filteredClientes = clientes.filter(cliente => {
        return cliente.nome?.toLowerCase().includes(search.toLowerCase()) ||
            cliente.cpf?.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className='container' style={{ width: '60%', margin: 'auto' }}>
            <Navbar />
            <div className='py-1'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="button-pesquisar" onChange={onInputChange} />
                    <button className="btn btn-primary" type="button" id="button-pesquisar">Pesquisar</button>
                </div>
                <table style={{ width: '148%' }} className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">codigo</th>
                            <th scope="col">Nome</th>
                            <th scope="col">cnpj</th>
                            <th scope='col'>ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredClientes.map((cliente, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{cliente.nome ?? ""}</td>
                                    <td>{cliente.cpf ?? ""}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>vizualizar</button>
                                        <Link className='btn btn-outline-primary mx-2'
                                            to={`/novoCliente/${cliente.codigo}`} >
                                            Editar
                                        </Link>
                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deletarCliente(cliente.codigo)}
                                        >Deletar</button>
                                        { }
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}
