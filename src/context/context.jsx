import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [productItems, setProductItems] = useState([]);
    const [autoIncrement, setAutoIncrement] = useState(1);
    const [filterdMenu, setFilteredMenu] = useState([]);
    const addProductItem = (newItem) => {
        setProductItems((prevItems) => [...prevItems, newItem]);
        setAutoIncrement((prevNum) => prevNum + 1);
        setFilteredMenu((prevFilteredMenu) => [...prevFilteredMenu, newItem]);
      };

    const contextState = {
        productItems,
        setProductItems,
        autoIncrement,
        setAutoIncrement,
        filterdMenu,
        setFilteredMenu,
        addProductItem
    };

    return <AppContext.Provider value={contextState}>
        {children}
    </AppContext.Provider>;
};