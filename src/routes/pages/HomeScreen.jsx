import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"

export const HomeScreen = () =>  {

  // El UsuarioContext nos provee de la info de usuario
  const {usuario} = useContext(UsuarioContext)

    return (
      <>
        <h1>Soy home </h1>
        <h4>Nombre: {usuario.nombre}</h4>        
        <h4>tecnologia: {usuario.tecnologia}</h4>
        <h4>email: {usuario.email}</h4>
        <h4>redes: {usuario.redes}</h4> 
      </>
    )
  }
  