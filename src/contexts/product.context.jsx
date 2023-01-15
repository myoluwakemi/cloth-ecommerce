import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json"



export const ProductContext = createContext({})


export const ProductProvider = ({children}) => {
    const [product] = useState(PRODUCTS)
    const value = {product}
    return( <ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
   
}



