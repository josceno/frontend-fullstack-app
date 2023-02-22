import axios from 'axios';
import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function NovoUsuario() {
    const [success, setSuccsses] = useState('');
    let navigate = useNavigate()
    const [usuario, setusuario] = useState({
        nome: "",
        cpf: "",
        password: ""
    })

    const { nome, cpf, password } = usuario
        ;
    const onInputChange = (e) => {
        setusuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {

        await axios.post("http://localhost:8080/usuario", usuario)
        setSuccsses(true)
    };
    return (
        <>
            {success ? (
                navigate("/")

            ) : (
                <section>

                    <h1>Cadastro</h1>
                    <form onSubmit={(e) => onSubmit(e)}  >
                        <label htmlFor='cpf'>Cpf:</label>
                        <input type={"text"}
                            className="form-control"
                            name='cpf'
                            id="cpf"
                            value={cpf}
                            onChange={(e) => onInputChange(e)}
                            required />
                        <label htmlFor="nome">Nome:</label>
                        <input type={"text"} className="form-control"
                            id="nome"
                            name="nome"
                            value={nome} onChange={(e) => onInputChange(e)}
                            required />

                        <label htmlFor='password'>Senha:</label>
                        <input type={"password"}
                            className="form-control"
                            name='password'
                            id="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
                            required />

                        <button >Entrar</button>
                    </form>
                    <p>
                        já tem usuário?<br />
                        <span className="line">
                            <Link to="/">Entrar</Link>
                        </span>
                    </p>
                </section>

            )}
        </>

    )


}
