import React, { useState } from "react";
import { EndpointContext } from "./EndpointContext";

export const EndpointProvider = ({children}) => {

    const [endpoint, setEndPoint] = useState({

        store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			loginConfirmation: false
		},
		actions: {
			exampleFunction: () => {
				console.log("test")
			},

            starwars: async () => {
                try{
					const resp = await fetch("https://swapi.dev/api/people/1/")
					const data = await resp.json()
					console.log(data)
					
				}catch(error){
					console.log("Error loading message from backend", error)
				}
            },
        }

})

    return(
        // We pass the user and setUser to be able to use en el children
        <EndpointContext.Provider value={{endpoint, setEndPoint}}>
            {children}
        </EndpointContext.Provider>

    )

}