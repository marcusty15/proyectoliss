import React from "react";
import "./Info.css";
import img from '../../img/Recurso 53.png'
import img1 from '../../img/info.png'

const Info = () => {
  return (
    <>
    <div className="info">
      <div>
        <h2 className="txt">¡Este espacio es para ti!</h2>
        <img className="imginfo" src={img} alt=""/>
        <img className="imginf2" src={img1} alt="" />
      </div>
    </div>
    
    </>
  );
};

export default Info;
