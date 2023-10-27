import React from "react";
import { UsuarioContext } from "./UsuarioContext";

const usuario = {
    nombre: 'pepe',
    tecnologia: 'react',
    email: 'pepe@gmail.com',
    redes: '@pepe'
}

export const UsuarioProvider = ({children}) => {

    return(
        <UsuarioContext.Provider value={{usuario}}>
            {children}
        </UsuarioContext.Provider>

    )

}