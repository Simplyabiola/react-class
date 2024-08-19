import React from "react";
import { Link } from 'react-router-dom'

const Sidenav = () => {
    const mystyl = {
        width:"300px",
        height:"170vh",
        backgroundColor:"rgb(8,13,59)",
        padding:"20px 50px",
        lineHeight:"40px",
        scroll:"vertical",
        iner:{
            color:"white",
            textDecoration:"none"
        },
        h1:{
            color:"rgb(172,166,166)",
            fontSize:"20px",
        },
        
    }
  return (
    <div>
        <div>
            
            <ul style={mystyl}>
                <img id='myimage' src= {require("./sq2.jpeg")} alt="" />
                <h1 style={mystyl.h1}>General</h1>
                <li ><Link style={mystyl.iner} to="/landing/profile">Dashboard</Link></li>
                <h1 style={mystyl.h1}>Profile</h1>
                <li ><Link style={mystyl.iner} to="/home">Change password</Link></li>
                <li ><Link style={mystyl.iner} to="">Resources</Link></li>
                <li ><Link style={mystyl.iner} to="">Document</Link></li>
                <h1 style={mystyl.h1}>Academics</h1>
                <li ><Link style={mystyl.iner} to="">Course registration</Link></li>
                <li ><Link style={mystyl.iner} to="">Resources</Link></li>
                <li ><Link style={mystyl.iner} to="">Registration history</Link></li>
                <li ><Link style={mystyl.iner} to="">Semester Result</Link></li>
                <li ><Link style={mystyl.iner} to="">View Result</Link></li>
                <h1 style={mystyl.h1}>Payments</h1>
                <li ><Link style={mystyl.iner} to="">Pay Tuition</Link></li>
                <li ><Link style={mystyl.iner} to="">Payment History</Link></li>
                <li ><Link style={mystyl.iner} to="">Transaction</Link></li>
                <h1 style={mystyl.h1}>Others</h1>
                <li ><Link style={mystyl.iner} to="">Notice Board</Link></li>
                <li ><Link style={mystyl.iner} to="">Accomodation</Link></li>
                <li ><Link style={mystyl.iner} to="">Election</Link></li>
                <li ><Link style={mystyl.iner} to="">Certificate</Link></li>
                <li ><Link style={mystyl.iner} to="">Help</Link></li>
                <li ><Link style={mystyl.iner} to="">Logout</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidenav