import React, { useContext } from "react";
import  {Context}  from "../../Store/Store";
import Paypal from '../PayPal/Paypal'


import "./ResForm.css";

const ResForm = () => {
    const {handleChange, crearDatos, order} = useContext(Context);

   
  return (
    
    <div className="resbg" id="registro">
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
                        <Paypal/>
                        <div>
                          <div className="row">
                        <h3 className='form-label col-md-12 mb-2 mt-2 textoinfo ms-2' >Segundo paso: Registra tus datos con el orderID obtenido luego de tu pago</h3>
                        <h3 className='form-label col-md-7  mt-2 textoinfo ms-2'> Haz click para ver tu orderID en el siguiente boton</h3>
               
                        <button type="button" onClick={()=>order()} className="btn col-md-3 mb-2 shadow border-0 ms-4">orderID</button>
                       
                            <div className="col-md-3  ">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplev2"
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
                            <div className="col-md-3 ">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplev3"
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
                            <div className="mb-3 col-md-3">
                              <div className="form-outline form-white">
                                <label
                                  className="form-label"
                                  htmlFor="form3Examplea9"
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
                           
                              <div className="col-md-3 ">
                                <div className="form-outline form-white">
                                  <label
                                    className="form-label"
                                    htmlFor="form3Examplea8"
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
                              <div className="col-md-12 ">
                                <div className="form-outline form-white " required>
                                  <h4 className="form-label textoinfo">Seleciona el metodo de pago e ingresa el vouche o numero de ordenID</h4>
                                  <label className="ms-2"><input type="checkbox" id="cbox1" value={true} onChange={handleChange} name="paypal"/> Paypal</label>
                                  <label className="ms-2"><input type="checkbox" id="cbox1" value={true} onChange={handleChange} name="zelle"/> Zelle</label>
                                  <label className="ms-2"><input type="checkbox" id="cbox1" value={true} onChange={handleChange} name="bizum"/> Bizum</label>
                                  <label className="ms-2"><input type="checkbox" id="cbox1" value={true} onChange={handleChange} name="wise"/> Wise</label>
                                  <label className="ms-2"><input type="checkbox" id="cbox1" value={true} onChange={handleChange} name="wise"/> Binance</label>
                                  
          
                                  
                                  <input
                                    type="text"
                                    id="form3Examplea8"
                                    className="form-control form-control-lg"
                                    name="orderid"
                                    required='required'
                                    onChange={handleChange}
                                    placeholder='Ingrese aqui el orderID o numero de transaccion'
                                    
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
