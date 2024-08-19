import React from "react";

const NavBar = () => {
    return ( 
        <>
        <div id="navbar">
            <div>
            <img src= {require("./sq2.jpeg")} alt="sqi logo" />
            </div>
            <div id="text">
                <b><p>About</p></b>
                <b><p>programmes</p></b>
                <b><p>Admissions</p></b>
                <b><p>E-Portal</p></b>
                <b><p>SQI Scholarships</p></b>
                <b><p>News</p></b>
                
            </div>
        </div>
        <hr />
        
        </>
     );
}
 
export default NavBar;