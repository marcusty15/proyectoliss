import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


export const Context = createContext(null);
const UserProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [userinfo, setUserinfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    orderid: "",
    paypal:'',
    zelle:'',
    bizum:'',
    wise:'',
    binance:''

   

  });
  const handleChange = (e) => {
    setUserinfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
  };

  
  const data = userinfo;

  console.log(data)
  const crearDatos = async () => {
    const response = await axios.post(`https://www.back.lissetalbarracin.com/email`, data);
    console.log(response.data);
    alert("Registro realizado exitosamente, revisa tu correo");
  };
  useEffect(() => {
    if (success) {
      alert(`Pago realizado! tu ${orderID} anotalo para anotarlo en el registro`);
    } else {
      
    }
  },
  [success]
);
const order = () =>{
  alert(`${orderID}`)
}

  return (
    <Context.Provider
      value={{
        handleChange,
        crearDatos,
        show,
        setErrorMessage,
        setOrderID,
        setShow,
        setSuccess,
        success,
        orderID,
        ErrorMessage,
        order
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
