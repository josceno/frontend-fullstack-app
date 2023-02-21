import { createContext,useState } from "react";

const contexto =  createContext({});

export const Autenticador = ({children})=>{
    const [auth,setAuth] = useState({});
   
        
    

    return(
        <contexto.Provider value={{auth, setAuth }}>
            ({children})
        </contexto.Provider>
    )
    
}
export default contexto;