import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function handleSubmit(event) {
    event.preventDefault();
  }
 

export default function NovoUsuario() {
    const [usuario, setusuario] = useState({
        nome: "",
        cpf: "",
        password: ""
    })

    const { nome, cpf, password} = usuario

    const onInputChange = (e) => {
        setusuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const onSubmit= async (e)=>{
        await axios.post("http://localhost:8080/usuario",usuario)
    };
  return (
   
     <section>   
       <h1>Login</h1>
       <form onSubmit={(e)=>onSubmit(e)}>
            <label htmlFor='cpf'>Cpf:</label>
            <input type={"text"} 
             className="form-control"
             name='cpf'
            id="cpf" 
            value={cpf} 
            onChange={(e) => onInputChange(e)} 
            required/>
            <label htmlFor="nome">Nome:</label>
            <input type={"text"} className="form-control" 
            id="nome" 
            name="nome" 
            value={nome} onChange={(e) => onInputChange(e)}
            required/>

            <label htmlFor='password'>Senha:</label>
            <input type={"text"} 
             className="form-control"
             name='password'
            id="password" 
            value={password} 
            onChange={(e) => onInputChange(e)} 
            required/>

            <button>Entrar</button>
       </form>
    </section>
    )
   
  
}
