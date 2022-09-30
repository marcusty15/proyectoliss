
import React, { useContext} from "react";
import ReactDOM from "react-dom";
import { Context } from "../../Store/Store";
import './Paypal.css'

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

 


const Paypal = () => {
  const {
    setErrorMessage,
    setOrderID,
    setSuccess,
  } = useContext(Context);
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            desciption: "Encuentro",
            amount: {
              currency_code: "USD",
              value: 11,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
 
  

  return (
    <div className="container paypalbody">
      <h3 className="textinf mb-3">Primer paso: Paga el evento para poder obtener el orderID</h3>
      {/* <button type="button" className=" border-0" onClick={() => setShow(true)}>
               Pagar ahora
             </button>
         {show?<PayPalButton
          
           createOrder={createOrder}
           onApprove={onApprove}
           className='paypalboton'
           onError={onError}
         />:''} */}
         <PayPalButton
          createOrder={createOrder}
          onApprove={onApprove}
          className='paypalboton'
          onError={onError}
          
        />
        
      
    </div>
  );
};

export default Paypal;
