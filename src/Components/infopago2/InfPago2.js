import React from 'react'
import './InfPago2.css'
import img from "../../img/Recurso 71.png";
import img2 from "../../img/Recurso 72.png";
import img3 from "../../img/Recurso 73.png";
import img4 from "../../img/Recurso 74.png";
import img5 from '../../img/Recurso 75.png';
import img6 from '../../img/Recurso 76.png'
import img8 from '../../img/Recurso 70.png'
import img7 from '../../img/Destello proposito.png'

const InfPago2 = () => {
  return (
    <div className="pbg">
    <img className="dstello" src={img7} alt="" />
        <h2 className="text-center textpago">Métodos de pago</h2>
        <div>
          <img className="imgtotal" src={img8} alt="" />
        </div>
      <div className="d-flex justify-content-center container flex-wrap mtpagos ">
        <div>
          <img className="imgpago" src={img} alt="" />
        </div>
        <div>
          <img className="imgpago" src={img3} alt="" />
        </div>
        <div>
          <img className="imgpago" src={img2} alt="" />
        </div>
        <div>
          <img className="imgpago" src={img4} alt="" />
          </div>
        <div>
          <img className="imgpago" src={img5} alt="" />
        </div>
        <div>
          <img className="imgpago" src={img6} alt="" />
        </div>
        
        
      </div>
    </div>
  )
}

export default InfPago2