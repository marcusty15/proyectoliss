import React from 'react'
import Info from '../../Components/Info/Info'
import Inscribirse from '../../Components/Inscribirse/Inscribirse'
import Middle from '../../Components/Middle/Middle'
import Middle2 from '../../Components/middle2/Middle2'
import Navbar from '../../Components/navbar/Navbar'
import Top from '../../Components/Top/Top'
import Video from '../../Components/Video/Video'

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
        </div>
  )
}

export default Home