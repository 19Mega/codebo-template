import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen } from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen"

export const App = () =>  {
  return (
    <>
      <div className="container">
        <h1>Plantilla Frontend Matias</h1>
        <Navbar/>     

        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/about" element={<AboutScreen/>} />
          <Route path="/contact" element={<ContactScreen/>} />

          <Route path="/*" element={ <Navigate to="/" />}/>
        </Routes>

      </div>
    </>
  )
}

