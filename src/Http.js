 import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Http = () => {
    const [inp, setinp] = useState("");
    const [load, setload] = useState(false);
    const [alldata, setalldata] = useState([]);
    const Navigate = 
    useEffect(() =>{
        //alert("welcome")
        axios.get("https://dummyjson.com/products")
        .then(res=>{
            console.log(res.data.products);
            console.log(alldata);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    // fetch("https://dummyjson.com/products")
    // .then(res => res.json)
    // .then(res => console.log(res));

    const save = () =>{
        setload(!load);
        console.log(inp);
    }

    const more =(id)=>{
        console.log(id);
        const navigate=navigate()
        navigate(`/one/${id}`)

    }
  return (
    <>
    <div>Http
        <input onChange={(e)=>setinp(e.target.value)} type="text" />
        <button onClick={save}>Save</button>


        {alldata.map((el, i)=>
        (
            <>
            <h1>{el.title}</h1>
            {/* <img src={el.thumbnail} alt="" /> */}
            <img src={el.images} alt="" />
            <button onClick={()=>more(el.id)}>See More</button>
            </>
        ))}
    </div>
    </>
  )
}

export default Http;