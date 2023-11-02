import React, { useState } from "react";
import { UserContext } from "./UserContext";

// const usuario = {
//     nombre: 'pepe',
//     tecnologia: 'react',
//     email: 'pepe@gmail.com',
//     redes: '@pepe'
// }

export const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

    return(
        // We pass the user and setUser to be able to use en el children
        <UserContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UserContext.Provider>

    )

}