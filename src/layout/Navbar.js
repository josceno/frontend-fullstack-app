import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [cliente,setCliente]=useState({
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
        cep: null
    })

    const {nome,cpf,endereco,cidade,complemento,uf,
        celular,telefone,observacao,rg,dataNascmemto,cep}=cliente

    const onInputChange=(e)=>{

    }    

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
                    <button data-bs-toggle="modal" data-bs-target="#janelaModal" className='btn btn-outline-light' to="/novoCliente" >Cadastrar Usuário</button>
                </div>
            </nav>

            <div id="janelaModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Novo Cliente</h3>
                            <button type="button" class="btn btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                                    <div className='mb-3'>
                                        <form>
                                            <label htmlfor="nome">Nome:</label>
                                            <input type="text" id="nome" name="nome" value={nome} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="cpf">CPF:</label>
                                            <input type="text" id="cpf" name="cpf" value={cpf} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="endereco">Endereço:</label>
                                            <input type="text" id="endereco" name="endereco" value={endereco} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="cidade">Cidade:</label>
                                            <input type="text" id="cidade" name="cidade" value={cidade} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="complemento">Complemento:</label>
                                            <input type="text" id="complemento" name="complemento" value={complemento} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="uf">UF:</label>
                                            <input type="text" id="uf" name="uf" value={uf} onChange={(e)=>onInputChange(e)} /><br />

                                            <label htmlfor="celular">Celular:</label>
                                            <input type="text" id="celular" name="celular" value={celular} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="telefone">Telefone:</label>
                                            <input type="text" id="telefone" name="telefone" value={telefone} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="observacao">Observação:</label>
                                            <input type="text" id="observacao" name="observacao" value={observacao} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="rg">RG:</label>
                                            <input type="text" id="rg" name="rg" value={rg} onChange={(e)=>onInputChange(e)}/><br />

                                            <label htmlfor="dataNascmemto">Data de Nascimento:</label>
                                            <input type="date" id="dataNascmemto" name="dataNascmemto" value={dataNascmemto} onChange={(e)=>onInputChange(e)}/><br/>

                                            <label htmlfor="cep">CEP:</label>
                                            <input type="text" id="cep" name="cep" value={cep} onChange={(e)=>onInputChange(e)}/><br />
                                                
                                            <button type='submmit' className='btn btn-outline-primary'>adcionar</button>
                                            <button type='submmit' className='btn btn-outline-danger'>Cancelar</button>
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
