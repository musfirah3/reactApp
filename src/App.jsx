import './App.css'
import Home from './assets/pages/Home';
import LoginProject from './assets/pages/LoginProject'
import RegistrationForm from './assets/pages/RegistrationForm';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import CategoryPage from './assets/pages/CategoryPage';
import ErrorPage from './assets/pages/ErrorPage';
import ProductPage from './assets/pages/ProductPage';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Products from './assets/pages/Home/Products';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginRouteContext } from './context/loginContext/LoginContext';




function App() {
  
  const {state}=useContext(LoginRouteContext)



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />



      <NavigationBar />
      <Routes>
      {state.user ? (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/category/:CategoryName' element={<CategoryPage />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path='*' element={<ErrorPage />} />
        </>

      ) : (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginProject />} />
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='*' element={<Navigate to="/login" replace={true} />} />
        </>

      )
      }
      </Routes>
      <Footer />
    </>
  )
}

export default App
