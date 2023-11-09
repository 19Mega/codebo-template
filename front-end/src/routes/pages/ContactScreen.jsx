import React, { useContext, useEffect } from "react";
import { EndpointContext } from "./../context/EndpointContext";


export const ContactScreen = () =>  {
    // Usar el hook useContext para acceder al contexto
    const { endpoint } = useContext(EndpointContext);
    const { store, actions } = endpoint;


    
    //actions.exampleFunction();

    useEffect(()=>{
      console.log(store.demo);
      actions.starwars();
    },[])



    return (
      <>
        <h1>Soy Contact </h1>
        
      </>
    )
  }
  