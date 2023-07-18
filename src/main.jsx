import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./context/loginContext/LoginContext.jsx"
import CartContextProvider from './context/addtoCart/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <LoginContext>
  <CartContextProvider>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
      </CartContextProvider>
  </LoginContext>
   
     

  ,
)
