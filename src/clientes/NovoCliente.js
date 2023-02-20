import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";




export default function NovoCliente() {
 

    
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
        const carregarClientes = async () => {
            const result = await axios.get("http://localhost:8080/clientes");
            setCliente(result.data);
        };
        carregarClientes();
    }, []);

    return (
        <div>

<                   div className='container'>
                            <div className='row'>
                                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                                    <div className='mb-3'>
                                        <form onSubmit={(e)=>onSubmit(e)} >
                                            <label htmlFor="nome">Nome:</label>
                                            <input type={"text"} className="form-control" id="nome" name="nome" value={nome} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="cpf">CPF:</label>
                                            <input type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="endereco">Endereço:</label>
                                            <input type="text" id="endereco" name="endereco" value={endereco} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="cidade">Cidade:</label>
                                            <input type="text" id="cidade" name="cidade" value={cidade} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="complemento">Complemento:</label>
                                            <input type="text" id="complemento" name="complemento" value={complemento} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="uf">UF:</label>
                                            <input type="text" id="uf" name="uf" value={uf} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="celular">Celular:</label>
                                            <input type="text" id="celular" name="celular" value={celular} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="telefone">Telefone:</label>
                                            <input type="text" id="telefone" name="telefone" value={telefone} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="observacao">Observação:</label>
                                            <input type="text" id="observacao" name="observacao" value={observacao} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="rg">RG:</label>
                                            <input type="text" id="rg" name="rg" value={rg} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="dataNascmemto">Data de Nascimento:</label>
                                            <input type="date" id="dataNascmemto" name="dataNascmemto" value={dataNascmemto} onChange={(e) => onInputChange(e)} /><br />

                                            <label htmlFor="cep">CEP:</label>
                                            <input type="text" id="cep" name="cep" value={cep} onChange={(e) => onInputChange(e)} /><br />

                                            <button  type='submit' className='btn btn-outline-primary'>adicionar</button>
                                            
                                            <button type='reset' className='btn btn-outline-danger'>Cancelar</button>
                                        </form>

                                    </div>

                                </div>
                            </div>

                        </div>



        </div>
    )
}
