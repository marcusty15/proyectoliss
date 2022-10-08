import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div className='vid'>
        <iframe className='video'  src="https://www.youtube.com/embed/Fh7kMPx4Exc" title="Encuentro: ¿Cómo transformar el apego en libertad?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video