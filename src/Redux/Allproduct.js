import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {fetchingFaailed, fetchingSuccessful, fetchingUser} from "./Userslice"
import axios from "axios"



const Allproduct =()=>{
   const dispatch = useDispatch()
   
// const selt = useSelector(state=>state.userslice)
const {alluser, isfetching, fetcherror} = useSelector(state=>state.userslice)
    console.log(alluser);
// useEffect(()=>{
//   dispatch(fetchingUser())
//   axios.get("https://localhost:3000/product")
//  .then((res)=>{
//     dispatch(fetchingSuccessful(res.data))
//     console.log(res);
//  }).catch((error)=>{
//     dispatch(fetchingFaailed())
//     console.log(error);
//  })
    
//     }, [])


return(
    <div>
    {isfetching ? "Loading.....": alluser.map((el)=>{
        <>
        <div className="card" style={{width: "18rem"}}>
        <img src= {el.productimage} className="card-img-top"   alt="....." />
        <div className="card-body">
        <h5 className="card-title">{el.productdescription}</h5>
        <p className="card-text">{el.productdescription}</p>
        <a href=""  className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </>
    })}
    </div>
)
}
 export default Allproduct;
