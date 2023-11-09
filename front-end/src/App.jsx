import { Navigate, Route, Routes } from "react-router-dom"

// Components
import { Navbar } from "./routes/components/NavBar"

// Pages
import { HomeScreen } from "./routes/pages/HomeScreen"
import { AboutScreen } from "./routes/pages/AboutScreen"
import { ContactScreen } from "./routes/pages/ContactScreen"
import { LoginScreen } from "./routes/pages/LoginScreen"

//Providers
import { UserProvider } from "./routes/context/UserProvider"
import { EndpointProvider } from "./routes/context/EndpointProvider"



export const App = () =>  {
  return (
    <EndpointProvider>
        <UserProvider>
          <div className=" container-lg container-md container-sm ">
            <Navbar/>     

            <Routes>
              <Route path="/" element={<HomeScreen/>} />
              <Route path="/about" element={<AboutScreen/>} />
              <Route path="/contact" element={<ContactScreen/>} />
              <Route path="/login" element={<LoginScreen/>} />

              <Route path="/*" element={ <Navigate to="/" />}/>
            </Routes>

          </div>
        </UserProvider>
    </EndpointProvider>
  )
}

