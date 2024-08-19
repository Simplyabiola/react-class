
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Notfound from './Notfound';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import Landing from './Landing';
import Changepassword from './Changepassword';
import Document from './Document';
import Result from './Result';
import Transaction from './Transaction';
import Accomodation from './Accomodation';
import Election from './Election';
import Http from './Http';
import User from './User';
import Oneproduct from './Oneproduct';
import Formik from './Formik';
import Formiklogin from './Formiklogin';
import Music from './Music';
import Product from './Product';
import Counter from "./Counter";
import Allproduct from "./Allproduct"


import { Provider } from 'react-redux';
import Store from './Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={Store}>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route path='/' element={<App/>}/>  
    <Route path='/home' element={<Home/>}/>
    <Route path='/*' element={<Notfound/>}/>
    <Route path='/landing' element={<Landing/>}/>
    <Route path='/password' element={<Changepassword/>}/>
    <Route path='/document' element={<Document/>} />
    <Route path='/result' element={<Result/>} />
    <Route path='/form' element={<Formik/>} />
    <Route path='/formiklogin' element={<Formiklogin/>} />
    <Route path='/music' element={<Music/>} />
    <Route path='/product' element={<Product/>} />
    <Route path='/counter' element={<Counter/>} />
    <Route path='/user' element={<User/>} />
    <Route path='/allproduct' element={<Allproduct/>} />

    <Route path='/navbar' element={<Navbar/>} />
    <Route path='/transaction' element={<Transaction/>} />
    <Route path='/accomodation' element={<Accomodation/>} />
    <Route path='/election' element={<Election/>} />
    <Route path='/http' element={<Http/>} />
    <Route path='/oneproduct' element={<Oneproduct/>} />
    </Routes>    
    
    

    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  // to harsh password - you enter (npm i bcryptjs in the console)
  //then you import and require.

 // you enter import useNavigate and put it in a variable and link to the route3 


