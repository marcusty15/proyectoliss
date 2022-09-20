import React from 'react'
import { Link } from 'react-router-dom'
import './Inscribirse.css'
import img from '../../img/Boton Inscribete.png'

const Inscribirse = () => {
  return (
    <div className='bannerinscribirse'>
        <div>
            <Link to='/'><img src={img} className='boton' alt=''/></Link>
        </div>
    </div>
  )
}

export default Inscribirse