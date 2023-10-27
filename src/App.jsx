import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./routes/components/NavBar"
import { HomeScreen } from "./routes/pages/HomeScreen"
import { AboutScreen } from "./routes/pages/AboutScreen"
import { ContactScreen } from "./routes/pages/ContactScreen"
import { UsuarioProvider } from "./routes/context/UsuarioProvider"
import {LoginScreen} from "./routes/pages/LoginScreen"


export const App = () =>  {
  return (
    <UsuarioProvider>
      <div className=" container-lg container-md container-sm ">
        <h1>Plantilla Frontend Matias</h1>
        <Navbar/>     

        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/contact" element={<ContactScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />

          <Route path="/*" element={ <Navigate to="/" />}/>
        </Routes>

      </div>
    </UsuarioProvider>
  )
}

