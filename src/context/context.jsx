import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [productItems, setProductItems] = useState([]);
    const [autoIncrement, setAutoIncrement] = useState(1);
    const [filterdMenu, setFilteredMenu] = useState([]);

    const contextState = {
        productItems,
        setProductItems,
        autoIncrement,
        setAutoIncrement,
        filterdMenu,
        setFilteredMenu
    };

    return <AppContext.Provider value={contextState}>
        {children}
    </AppContext.Provider>;
};