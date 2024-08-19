import axios from "axios";
import {fetchingFaailed, fetchingSuccessful, fetchingUser} from "../Redux/Userslice"

export const getproduct = (dispatch)=>{
    dispatch(fetchingUser())
    axios.get("https://localhost:3000/product")
   .then((res)=>{
      dispatch(fetchingSuccessful(res.data))
      console.log(res);
   }).catch((error)=>{
      dispatch(fetchingFaailed())
      console.log(error);
})

}