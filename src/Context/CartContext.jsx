import { createContext, useEffect, useState } from "react";

export  const CartContext=createContext(null);
export const CartProvider=({children})=>{
    const [cartList,setCartList]=useState([]);
    
    
    return(
        <CartContext.Provider value={{cartList,setCartList}}>{children}</CartContext.Provider>
    )
}
