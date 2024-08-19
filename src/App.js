import React from 'react';
import mystyle from './mystyle'
import Home from './Home'
import Navbar from './Navbar'


<Navbar/>
const App = ()=> {
  const mystyle ={
    header:{
      fontSize: "50px",
      color:"yellow"
    },
    backgroundColor: "blue",
    fontSize: "70px",
    color: "red"
  
  }
  const name = 'world'
  return (
    <>
    hello{name}
    <input type="text" name=''/>
    <h1 style={{backgroundColor:"red", fontSize: "30px", color:"green"}}>New class </h1>
    <p style={mystyle}>hello react</p>
    <Home/>
    </>
  )
}



export default App
  

  
    