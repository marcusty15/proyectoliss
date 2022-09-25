import axios from "axios";
import React, { createContext, useState } from "react";


export const Context = createContext(null);
const UserProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
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

  return (
    <Context.Provider
      value={{
        handleChange,
        crearDatos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
