import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Inscripcion from "./Pages/Inscripcion/Inscripcion";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/registro" element={<Inscripcion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
