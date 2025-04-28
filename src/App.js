import React from "react";
import Main from "./Pages/Main";
import { Flip, ToastContainer } from "react-toastify";
import Header from "./components/Header";
import "./App.css";


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
    <Header />
    <Main />
    </>
  )
}