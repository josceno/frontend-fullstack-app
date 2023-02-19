import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function handleSubmit(event) {
    event.preventDefault();
  }
 

export default function Navbar() {
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

    const onSubmit= async (e)=>{
        await axios.post("http://localhost:8080/cliente",cliente)
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button  data-bs-toggle="modal" data-bs-target="#janelaModal" className='btn btn-outline-light' to="/novoCliente" >Cadastrar Usuário</button>
                </div>
            </nav>

            <div id="janelaModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Novo Cliente</h3>
                            <button type="button" class="btn btn-close" ></button>
                        </div>
                        <div className='container'>
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

                </div>
            </div>
        </div>
    )
}
