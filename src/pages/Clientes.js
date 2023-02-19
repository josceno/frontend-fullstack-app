import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Clientes() {

    const  [clientes, setClientes]=useState([]);

    useEffect(()=>{
        CarregarClientes();
    },[])

    const CarregarClientes=async()=>{
        const result=await axios.get("http://localhost:8080/clientes")
        setClientes(result.data);
    }

    return (
        <div className='container'>
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
                        {
                            clientes.map((cliente,index)=>(
                                <tr>
                                  <th scope="row" key={index}>
                                    {index + 1}
                </                  th>
                                  <td>{cliente.nome}</td>
                                  <td>{cliente.cpf}</td>
                                  <td>
                                    <button className='btn btn-primary mx-2'>vizualizar</button>
                                    <button className='btn btn-outline-primary mx-2'>Editar</button>
                                    <button className='btn btn-danger mx-2'>Deletar</button>
                                  </td>
                                </tr>
                              ))
                        }
                        
                        
                    </tbody>
                </table>

            </div>
        </div>
    )
}
