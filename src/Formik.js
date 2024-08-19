import React from "react";
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import {useEffect} from 'react'

const Formik = () => {

const[load, setload] = useState(false)
const[alluser, setalluser]= useState([])


useEffect(()=>{
    axios.get("http://localhost:2222/User")
    .then((res)=>{
        console.log(res);
        setalluser(res.data)
    }).catch((error)=>{
        console.log(error);
    })
    }, [load])

    const formik = useFormik({
    initialValues:{
        username:"",
        email:"",
        password:""
    },
    validationSchema:yup.object({
        username:yup.string().min(4, "useraname cannot be less than four characters").required("usercannot be empty"),
        email:yup.string().email("email must be valid").required("email cannot be empty"),
        password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password  must have at least one uppercase, a special character").required("cannot be left")

    }),
    
    onSubmit:(value)=>{
      console.log(value);
      setload(true)
      const existuser = alluser.find((user)=> user.email == value.email)
      console.log(existuser);
      if (existuser){
        toast.info('you have logged in before, login')
        setload(true)
       
      try {
      axios.post("http://localhost:2222/User", value)
      .then((res)=>{
        console.log(res);
        setload(false)

        toast.success("signup successful")
    }).catch((error)=>{
       console.log(error);

       setload(true)
    })
}catch(error){
    console.log(error);
}
       
    }
  }
    
})

console.log(formik.errors);
console.log(formik.touched);
    return(
        <div>
            <form onSubmit={formik.handleSubmit} className='w-50 mx-auto shadow px-3 py-3' action="">
                <h1>Sign up</h1>
                <div className="form-group mt-3">
                    <label htmlFor="">Username</label>
                    <input name="username" onBlur={formik.handleBlur} onChange ={formik.handleChange} className='form-control' type="text"/>
                    <p className='text-danger fs-6'>{formik.touched.username ? formik.errors.username: ""}</p>
                </div>
                
                <div className="form-group mt-3">
                    <label htmlFor="">Email</label>
                    <input name="email" onBlur={formik.handleBlur}  onChange={formik.handleChange}  className="form-control"  type="text" />
                     <p className="text-danger fs-6">{formik.touched.email ? formik.errors.email : ""}</p>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="">Password</label>
                    <input name="password" onBlur={formik.handleBlur}  onChange={formik.handleChange}  className="form-control"  type="text" />
                     <p className="text-danger fs-6">{formik.touched.password ? formik.errors.password : ""}</p>
                </div>
                <div className="mt-3"> 
                    <button className="btn btn-success" type="submit">sign up</button>
                     <ToastContainer/>
                     </div>
                </form> 
            </div>
        )
    }

     export default Formik;
