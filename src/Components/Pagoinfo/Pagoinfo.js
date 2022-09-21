import React from "react";
import "./Pagoinfo.css";
import img from "../../img/Logo Paypal.png";
import img2 from "../../img/Logo Bizum.png";
import img3 from "../../img/Logo Wise.png";
import img4 from "../../img/Logo Zelle.png";
import img5 from '../../img/Destello proposito.png'

const Pagoinfo = () => {
  return (
    <div className="pbg">
    <img className="dstello" src={img5} alt="" />
        <h2 className="text-center textpago">Métodos de pago</h2>
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
      </div>
    </div>
  );
};

export default Pagoinfo;
