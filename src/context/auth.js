import React, { createContext, useState } from "react";

export const AutoContext = createContext()

export default function AutProvider({ children }) {

    const [sizeshow, setSizeshow] = useState({})

    //Mostra menu
    function sizeMode(size) {
        if (size !== '') {
            setSizeshow({
                size: size
            })
        }
    }    

    return (
        <AutoContext.Provider value={{ sizeMode, sizeshow }}>
            {children}
        </AutoContext.Provider>
    )
}