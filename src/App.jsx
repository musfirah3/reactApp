import './App.css'
import Home from './assets/pages/Home';
import LoginProject from './assets/pages/LoginProject'
import RegistrationForm from './assets/pages/RegistrationForm';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import CategoryPage from './assets/pages/CategoryPage';
import ErrorPage from './assets/pages/ErrorPage';
import ProductPage from './assets/pages/ProductPage';
import { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import Products from './assets/pages/Home/Products';




function App() {
 const [user, setUser]=useState(true)



  return (
    <>


      <NavigationBar/>
      {user ? (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/category/:CategoryName' element={<CategoryPage />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path='*' element={<ErrorPage/>}/>
          </Routes>

      ):(
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginProject/>}/>
          <Route path='/registration' element={<RegistrationForm/>}/>
          <Route path='*' element={<Navigate to="/login" replace={true}/>}/>
          </Routes>

       ) 
       } 
      <Footer/> 
    </>
  )
}

export default App
