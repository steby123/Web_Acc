import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [productItems, setProductItems] = useState([]);

    const contextState = {
        productItems,
        setProductItems
    };

    return <AppContext.Provider value={contextState}>
        {children}
    </AppContext.Provider>;
};