
import { outlet } from 'react-router-dom'


import react from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'



const Landing =()=>{
    const body ={
        width: "76px",
         height: "76px",
          padding: "10px 20px",
          backgroundColor: "black",
          cont:{
             width: "100%",
              width: "100vh",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "space between",
              alignItems: "center"

          }
    }
    return(
        <>
            <Navbar/>
            <div stytle ={body.cont}>
            <Sidenav/>
            <div stytle ={body}>vvvvvv
            <Outlet/>
            </div>
            </div>
        </>
    )
}


export default Landing