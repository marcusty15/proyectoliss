import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg">
        <div className='container'>
  <Link className="navbar-brand" to="/">Lisset Albarracin</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
    <ul className="navbar-nav ms-auto sm-icons">
        <li className="nav-item"><Link className="nav-link" to="#"><i className="bi bi-facebook nbi" ></i></Link></li>
        <li className="nav-item"><Link className="nav-link" to="#"><i className="bi bi-instagram nbi"></i></Link></li>
        <li className="nav-item"><Link className="nav-link" to="#"><i className="bi bi-envelope nbi"></i></Link></li>
        
        
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar