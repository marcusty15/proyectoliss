import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
   
     <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
         
        </Routes>
        </Router>

    </>
  );
}

export default App;
