import React, { useState } from 'react'
export const CartContext = React.createContext();


export default function CartItems({children}) {
  
    const [count , setCount] =  useState(0); 
    const [item , setItem] = useState({});

  return (
     <CartContext.Provider value={{count , setCount , item , setItem }} > 
        {children}
     </CartContext.Provider> 
  )
}
