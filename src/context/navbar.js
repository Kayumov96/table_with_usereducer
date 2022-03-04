import React, { createContext, useState } from "react";
import nav from '../mock/mock';


export const NavbarCreateContext = createContext();

export const PagesContext = ( { children } ) => {
    const [ navlinks, setNav ] = useState( nav );
    return <NavbarCreateContext.Provider value={[navlinks, setNav]}>
        { children}
    </NavbarCreateContext.Provider>
};
export default PagesContext;