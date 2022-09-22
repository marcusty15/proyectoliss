import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Pagoinfo from '../../Components/Pagoinfo/Pagoinfo'
import ResForm from '../../Components/ResForm/ResForm'

const Inscripcion = () => {
  return (
    <div>
        <Navbar/>
        <ResForm/>
        <Pagoinfo/>
        <Footer/>
    </div>
  )
}

export default Inscripcion