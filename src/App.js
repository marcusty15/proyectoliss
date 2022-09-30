import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Inscripcion from "./Pages/Inscripcion/Inscripcion";

function App() {
  return (
    <>
      
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/registro" element={<Inscripcion />} />
        </Routes>
        <Footer/>
      
    </>
  );
}

export default App;
