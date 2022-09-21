import React from 'react'
import Info from '../../Components/Info/Info'
import Inscribirse from '../../Components/Inscribirse/Inscribirse'
import Middle from '../../Components/Middle/Middle'
import Middle2 from '../../Components/middle2/Middle2'
import Navbar from '../../Components/navbar/Navbar'
import Pagoinfo from '../../Components/Pagoinfo/Pagoinfo'
import Top from '../../Components/Top/Top'
import Video from '../../Components/Video/Video'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
      <div>
        <Navbar/>
        <Top/>
        <Video/>
        <Middle/>
        <Middle2/>
        <Info/>
        <Inscribirse/>
        <Pagoinfo/>
        <Footer/>
      </div>
  )
}

export default Home