import React, { useContext } from "react";
import  {Context}  from "../../Store/Store";


import "./ResForm.css";

const ResForm = () => {
    const {handleChange, crearDatos} = useContext(Context);
  return (
    
    <div className="resbg">
        <h2 className="textc">Estas a un paso de nuestro encuentro de consciencia . . .</h2>
      <section className=" ">
        <div className="container body  ">
          <div className="ro d-flex justify-content-center align-items-center formbody ">
            <div className="col-12">
              <div className=" card-registration card-registration-2 card2">
                <div className="card-body ">
                  <div className="row g-0">
                    <div className="">
                      <div className="p-5">
                        
                        <div>
                          <div className="row">
                            <div className="col-md-6 mb-3 pb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  for="form3Examplev2"
                                >
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  id="form3Examplev2"
                                  className="form-control form-control-lg"
                                  required
                                  name="nombre"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2 ">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  for="form3Examplev3"
                                >
                                  Apellido
                                </label>
                                <input
                                  type="text"
                                  id="form3Examplev3"
                                  className="form-control form-control-lg"
                                  name="apellido"
                                  required
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="mb-3 col-md-6">
                              <div className="form-outline form-white">
                                <label
                                  className="form-label"
                                  for="form3Examplea9"
                                >
                                  Correo
                                </label>
                                <input
                                  type="text"
                                  id="form3Examplea9"
                                  className="form-control form-control-lg"
                                  placeholder="name@example.com"
                                  name="email"
                                  required
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                           
                              <div className="col-md-6 mb-2">
                                <div className="form-outline form-white">
                                  <label
                                    className="form-label"
                                    for="form3Examplea8"
                                  >
                                    Numero de telefono
                                  </label>
                                  <input
                                    type="number"
                                    id="form3Examplea8"
                                    className="form-control form-control-lg"
                                    name="telefono"
                                    required
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            
                            <button onClick={crearDatos} className="checkboton shadow border mt-4">Registrarse</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResForm;
