import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg">
        <div className='container'>
  <Link class="navbar-brand" to="/">Lisset Albarracin</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    
    <ul class="navbar-nav ms-auto sm-icons">
        <li class="nav-item"><Link class="nav-link" to="#"><i class="bi bi-facebook"></i></Link></li>
        <li class="nav-item"><Link class="nav-link" to="#"><i class="bi bi-instagram"></i></Link></li>
        <li class="nav-item"><Link class="nav-link" to="#"><i class="bi bi-envelope"></i></Link></li>
        
        
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar