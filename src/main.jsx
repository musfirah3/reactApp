import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./context/loginContext/LoginContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginContext>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </LoginContext>
  ,
)
