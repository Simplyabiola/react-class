import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, incrementByAmount } from "./Redux/Counterslice";


const Counter = ()=>{
 const {value, increase} = useSelector(state=>state.countslice)
    console.log(value, increase);
    const dispatch = useDispatch()

    return(
        <>
        <h2>{value}</h2>
        <button onClick={()=>dispatch(Increment())} >Increase</button>
        <button onClick={()=>dispatch(Decrement())} >Decrease</button>
        <button onClick={()=>dispatch(incrementByAmount(20))} >Increasebyamount</button>
        


        </>
    )
}

export default Counter