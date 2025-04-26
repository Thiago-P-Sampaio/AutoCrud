import React from "react";
import Main from "./Pages/Main"
import { Flip, ToastContainer } from "react-toastify";


export default function App(){
  return(
    <>
    <ToastContainer 
    autoClose ={3000} 
    position='top-right'
    newestOnTop = {true}
    theme="colored"
    transition={Flip}
    limit={ 3 }
    />
    <Main />
    </>
  )
}