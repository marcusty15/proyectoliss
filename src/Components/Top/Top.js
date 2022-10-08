import React from "react";
import "./Top.css";
import img from "../../img/foto banner.png";
import img2 from "../../img/Recurso 52.png";
import img3 from '../../img/Destello proposito.png'
import img4 from '../../img/flor info_1.png'

const Top = () => {
  return (
    <div className="top">
        <img className="flor" src={img4} alt=''/>
      <div className="d-flex container">
        <div className="mt-4">
          <img className="img" src={img} alt="" />
          <img className="star" src={img3} alt=''/>
        </div>
        <div className="text ">
          <h3 className="text1">Encuentro de consciencia:</h3>
          <h2 className="mt-5 h2title">¿Cómo transformar el apego en libertad?</h2>
          <img className="mt-5 img2" src={img2} alt="" />
          <h4 className="mt-5 inf">¿Sientes que vives relaciones basadas en el apego? </h4>
          <p className="mt-4 inf1">
            Este espacio ha sido creado con la intención de que te permitas
            abrir la mente y el corazón, es un espacio de no juicio, que tiene
            como propósito descubrir otra manera de vivir y de relacionarnos,
            porque si tú al igual que yo has vivido relaciones desde el apego
            sabes que se sufre y a esta vida no vinimos a sufrir.
          </p>
          <h4 className="mt-3 inf2">
            ¿Quieres transformar tus relaciones de apego a relaciones de
            libertad?
          </h4>
          <h2 className="mt-4 h2">¡Este espacio es para ti!</h2>
        </div>
      </div>
    </div>
  );
};

export default Top;
