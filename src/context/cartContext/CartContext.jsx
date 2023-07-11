import React, { createContext,useReducer } from 'react'
import { CartReducer } from './CartReducer'



const initialData={
cart:[]
}
export const CartContext=createContext("Initial Value")

export default function CartProvider({children}) {
    const [state,dispatch]=useReducer(CartReducer,initialData)
  return (
   <CartContext.Provider value={{state,dispatch}}>
    {children}
   </CartContext.Provider>
  )
}

