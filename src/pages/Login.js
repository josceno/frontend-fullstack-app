import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import contexto from '../context/Autenticador';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axiosj';
import Clientes from './Clientes';
const LOGIN_URL = '/auth'

export default function Home() {
  let navigate = useNavigate()
  const { setAuth } = useContext(contexto);
  const usuarioRef = useRef();
  const errorRef = useRef();

  const [cpf, setCpf] = useState('');
  const [password, setpassword] = useState('');
  const [erroMsg, setErroMsg] = useState('');
  const [success, setSuccsses] = useState('');

  useEffect(() => {
    usuarioRef.current.focus();
  }, [])



  useEffect(() => {
    setErroMsg('')
  }, [cpf, password])
  const handleSubmmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ cpf, password }),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true
        }
      );
      let resp = JSON.stringify(response?.data)
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response))
      setAuth({ cpf, password })
      setCpf("")
      setpassword("")
      let item = []
      item = resp.split("")
      if (item.length > 2) {
        setSuccsses(true)
      }

    } catch (error) {
      if (!error?.response) {
        setErroMsg("sem resposta do servidor")
      }
      if (!error?.response) {
        setErroMsg("sem resposta do servidor")
      } else if (error.response?.status === 400) {
        setErroMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        setErroMsg('Unauthorized');
      } else {
        setErroMsg('Login Failed');
      }
      errorRef.current.focus();
    }


  }
  return (

    <>
      {success ? (
        navigate("/clientes")

      ) : (

        <section>
          <p ref={errorRef} className={erroMsg ? "errmsg" : "offscreen"} aria-live="assertive">{erroMsg}</p>
          <h1>Login</h1>
          <form onSubmit={handleSubmmit}>
            <label htmlFor='Cpf'>Cpf:</label>
            <input type="text"
              id="Cpf"
              ref={usuarioRef}
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              required />

            <label htmlFor='password'>Senha:</label>
            <input type="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required />

            <button>Entrar</button>
          </form>
          <p>
            Nova conta?<br />
            <span className="line">
              <Link to="/cadastro">Cadastrar</Link>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
