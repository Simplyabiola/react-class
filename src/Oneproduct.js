


import React, {useEffect} from "react"; 
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";


const Oneproduct =()=>{
    const[onedata, setonedata] = useState({})
    
const {id}= useParams()
console.log(id);
useEffect(()=>
    axios.get(`https://dummyjson.com/products/${id}`)
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
        })
        }, [])



    return(
        <div>

        </div>
    )
}

// export default Oneproduct

export default Oneproduct;