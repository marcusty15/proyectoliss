import React from "react";
import "./Middle2.css";
import img from "../../img/Logo Zoom.png";
import img1 from "../../img/Logo rec.png";
import img2 from "../../img/Logo PDF.png"
import img5 from "../../img/Destello proposito.png"
import img3 from "../../img/Recurso 19.png"

const Middle2 = () => {
  return (
    <div className="md2   ">
        <img className="strella" src={img5} alt=""/>
      <h2 className="text-center tx ">
        ¿Qué incluye el espacio de consciencia?
      </h2>
      <div class="container cardView d-flex flex-wrap justify-content-center">
        <div class="">
          <div class="card cards" style={{ width: "280px" }}>
            <div className="card-top bgc ">
              <img
                src={img}
                class="card-img-top imglogo"
                alt="..."
              />
            </div>
            <div class="card-body">
              <h5 class="card-title text-center mb-3 cardtitulo">
                Acceso al encuentro en vivo
              </h5>
              <p class="card-text p mb-3 ct">
                Transmitido por la App Zoom, en un tiempo aproximado de 2 h 30
                minutos.
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="card cards" style={{ width: "280px" }}>
            <div className="card-top bgc">
              <img src={img1} class="card-img-top imglogo" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title text-center mb-3 cardtitulo">
                Grabación del encuentro
              </h5>
              <p class="card-text p mb-3 ct">
                Se enviará a tu correo inscrito luego de finalizar el encuentro.

              </p>
            </div>
          </div>
        </div>
        <div class="">
          <div class="card cards" style={{ width: "280px" }}>
            <div className="card-top bgc">
              <img src={img2} class="card-img-top imglogo1" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title text-center mb-3 cardtitulo">
                Grabación del encuentro
              </h5>
              <p class="card-text p mb-3 ct">
                Se enviará a tu correo inscrito luego de finalizar el encuentro.
                
              </p>
            </div>
          </div>
        </div>
        <img className="recurso19" src={img3} alt=''/>
      </div>
    </div>
  );
};

export default Middle2;
