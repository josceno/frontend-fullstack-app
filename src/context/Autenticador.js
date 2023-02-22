import { createContext,useState } from "react";

const contexto =  createContext({});

export const Autenticador = ({children})=>{
    const [auth,setAuth] = useState({});
   
        
    

    return(
        <div>
        <contexto.Provider value={{auth, setAuth }}>
            {children}
        </contexto.Provider>
        </div>
    )
    
}
export default contexto;