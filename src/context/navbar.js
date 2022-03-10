import React, { createContext, useState } from "react";
import nav from '../mock/mock';
import circlemenu from '../mock/mock'


export const NavbarCreateContext = createContext();

export const PagesContext = ( { children } ) => {
    const [ navlinks, setNav ] = useState( nav );
    const [circle]= useState( circlemenu );
    return <NavbarCreateContext.Provider value={[navlinks, setNav, circle]}>
        { children}
    </NavbarCreateContext.Provider>
};
export default PagesContext;