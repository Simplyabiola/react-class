import React from 'react'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate = useNavigate()
    const gohome = () =>{
        navigate('/')
    }
  return (
    <div>
      <h1>PAGE NOT FOUND</h1>
      <button onClick={gohome} className='btn btn-danger '>Go Home</button>
    </div>
  )
}

export default Notfound;