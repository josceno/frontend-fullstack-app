import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";




export default function NovoCliente() {

    let navigate=useNavigate();

    const { codigo } = useParams();
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
    })

    const { nome, cpf, endereco, cidade, complemento, uf,
        celular, telefone, observacao, rg, dataNascmemto, cep } = cliente

    const onInputChange = (e) => {
        setCliente({ ...cliente, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("cliente: " + cliente.codigo)
        await axios.put(`http://localhost:8080/cliente/${codigo}`, cliente);
        navigate("/clientes")
    };

    const carregarCliente = async () => {
        const result = await axios.get(`http://localhost:8080/cliente/${codigo}`);
        setCliente(result.data);
    };

    useEffect(() => {
        carregarCliente();
    }, []);

    useEffect(() => {
        const carregarClientes = async () => {
            const result = await axios.get("http://localhost:8080/clientes");
            setCliente(result.data);
        };
        carregarClientes();
    }, []);

    return (
        
            <div className='container'>
                <div className='row'>
                        <form onSubmit={(e) => onSubmit(e)} >
                            <div className='form-group'>
                                <label htmlFor="nome">Nome:</label>
                                <input className="form-control" type={"text"}  id="nome" name="nome" value={nome} onChange={(e) => onInputChange(e)} />
                            </div>

                            <div className='form-group row'>
                                <div className='col-md-4'>
                                    <label htmlFor="cpf">CPF:</label>
                                    <input className="form-control" type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => onInputChange(e)} />
                                </div>


                                <div className='col-md-4'>
                                    <label htmlFor="rg">RG:</label>
                                    <input className="form-control" type="text" id="rg" name="rg" value={rg} onChange={(e) => onInputChange(e)} />

                                </div>

                                <div className='col-md-3'>
                                    <label htmlFor="dataNascmemto">Data de Nascimento:</label>
                                    <input  className="form-control" type="date" id="dataNascmemto" name="dataNascmemto" value={dataNascmemto} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-md-6'>
                                    <label htmlFor="endereco">Endereço:</label>
                                    <input className="form-control" type="text" id="endereco" name="endereco" value={endereco} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="complemento">Complemento:</label>
                                    <input className="form-control" type="text" id="complemento" name="complemento" value={complemento} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-md-6'>
                                    <label htmlFor="cep">CEP:</label>
                                    <input className="form-control" type="text" id="cep" name="cep" value={cep} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className='col-md-4'>
                                    <label htmlFor="cidade">Cidade:</label>
                                    <input className="form-control" type="text" id="cidade" name="cidade" value={cidade} onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className='col-md-2'>
                                    <label htmlFor="uf">UF:</label>
                                    <input className="form-control" type="text" id="uf" name="uf" value={uf} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className='col-md-4'>
                                    <label htmlFor="celular">Celular:</label>
                                    <input className="form-control" type="text" id="celular" name="celular" value={celular} onChange={(e) => onInputChange(e)} />
                                </div>


                                <div className='col-md-4'>

                                    <label htmlFor="telefone">Telefone:</label>
                                    <input className="form-control" type="text" id="telefone" name="telefone" value={telefone} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="observacao">Observação:</label>
                                <input className="form-control" type="text" id="observacao" name="observacao" rows="6" value={observacao} onChange={(e) => onInputChange(e)} />
                            </div>
                            <button type='submit' className='btn btn-outline-primary'>adicionar</button>
                            <button type='reset' className='btn btn-outline-danger'>Cancelar</button>
                        </form>

                </div>

            </div>



        
    )
}
