import React from 'react'
import './Footer.css'
import img from '../../img/FB footer.png'
import img1 from '../../img/Insta footer.png'
import img2 from '../../img/Youtube footer.png'


const Footer = () => {
  return (
    <div className='footerbg'>
        <div className='container d-flex todo'>
        <div>
            <h2 className='nametitle'>Lisset Albarracin</h2>
            <h3 className='h3info'><i class="bi bi-geo-alt mbi"></i>Madrid</h3>
            <h3 className='h3info'><i class="bi bi-whatsapp mbi"></i>+34 617 91 56 62</h3>
            <h3 className='h3info'><i class="bi bi-envelope mbi"></i>lissetalbarracin@gmail.com</h3>

        </div>
        <div className='about'>
            <h3 className='h3info'>Psicóloga - Psicoterapeuta</h3>
            <h3 className='h3info'>Facilitadora en expansión de conciencia</h3>
            <h3 className='h3info'>Psicoterapia Online</h3>
            <div>
                <img className='imgfooter' src={img} alt=''/>
                <img className='imgfooter' src={img1} alt=''/>
                <img className='imgfooter' src={img2} alt=''/>
            </div>
        </div>
        </div>
        <h4 className='right h3info'>Todos los derechos reservados Lisset Albarracin 2022</h4>
    </div>
  )
}

export default Footer