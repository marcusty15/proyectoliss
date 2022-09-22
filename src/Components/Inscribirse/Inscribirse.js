import React from 'react'
import { Link } from 'react-router-dom'
import './Inscribirse.css'
import img from '../../img/Boton Inscribete.png'
import img1 from '../../img/Recurso 2.png'

const Inscribirse = () => {
  return (
    <div className='bannerinscribirse'>
        <div>
            <img className='imgins' src={img1} alt=''/>
            <Link to='/registro'><img src={img} className='boton' alt=''/></Link>
        </div>
    </div>
  )
}

export default Inscribirse