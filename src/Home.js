import React from "react";
import { useState } from "react";
// import mystyle from './mystyle'
{/* <Navbar/> */}

const Home = ()=>{
    const array = ['apple', 'banana', 1,2,3]
    let login = true
    let name = 'ola'
    
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const [counter, setCounter] = useState(0)
    const [userarray, setuserarray] = useState({})
    function update(){
        console.log(input2);
        setuserarray([...userarray, input2])
        console.log(userarray);
    }
    function handleChange(event){
        setInput(event.target.value)
        console.log(input);

    }
    return(
        <>
        <h1>
            { login ? "welcome user": "loading...."}
</h1>
hello {name}
<h1>counter: {counter}</h1>
<button onclick={update}>increase</button>
<input type="text" name="" onChange={handleChange} value={input} />
<input type="text" name="" onChange={(e) => {setInput2(e.target.value)}} value={input} />
<ul>
    {array.map((element, index)=>(
        <li key={index}>{element}</li>
    ) 
)}
</ul>
</>
    );
}
    
export default Home