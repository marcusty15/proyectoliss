import React from "react";
import "./Middle.css";
import img1 from "../../img/Conocer.png";
import img2 from "../../img/Autoindagar.png";
import img3 from "../../img/Descubrir.png";
import img4 from "../../img/Experimentar.png";
import img5 from "../../img/Destello proposito.png"
import img6 from "../../img/Flores propositos.png"

const Middle = () => {
  return (
    <div className="mid1">
      <div>
        <div className="d-flex  justify-content-center">
          <img className="strt" src={img5} alt=""/>
          <h2 className="text-center texto">
            ¿Cuál es el propósito de este encuentro de consciencia?
          </h2>
        </div>
        <div className="d-flex justify-content-center container flex-wrap">
          <div className="">
            <div className="card border-0" style={{ width: "270px" }}>
              <img src={img1} className="card-img-top image " alt="..." />
              <div className="card-body">
                <h3 className="h3 text-center">Conocer</h3>
                <p className="card-text p">
                  Cómo surge el apego en las diferentes relaciones (pareja,
                  familia, trabajo, dinero)
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card border-0" style={{ width: "270px" }}>
              <img src={img2} className="card-img-top image" alt="..." />
              <div className="card-body">
                <h3 className="h3 text-center">Auto Indagar</h3>
                <p className="card-text p">
                  En tus creencias, esas que sostienen las relaciones basadas en
                  el apego.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card border-0" style={{ width: "270px" }}>
              <img src={img3} className="card-img-top image" alt="..." />
              <div className="card-body">
                <h3 className="h3 text-center">Descubrir</h3>
                <p className="card-text p">La forma de deshacer el apego.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card border-0" style={{ width: "270px" }}>
              <img src={img4} className="card-img-top image" alt="..." />
              <div className="card-body">
                <h3 className="h3 text-center">Experimentar</h3>
                <p className="card-text p">
                  La libertad que nos regala el desapego.
                </p>
              </div>
            </div>
          </div>
          <img className="flower" src={img6} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Middle;
