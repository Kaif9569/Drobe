import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const verify = () => {
  const { navigate, token, setCartItems } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
        if(!token){
            return null;
        }
        const response = await axios.post(backendUrl+'/api/order/verify')
    } catch (error) {
        
    }
  };
  useEffect(() => {
    verifyPayment();
  }, token);
  return <div></div>;
};

export default verify;
