// import React from "react";
// import * as yup from 'yup';
// import { useFormik } from "formik";
// import {ToastContainer, toast } from "react-toastify";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import {useState, useEffect} from 'react'


// const FormikLogin = () => {
//     const[load, setload] = useState(false)
//     const[alluser, setalluser]= useState([])

//     const navigate = navigate()


//     useEffect(()=>{
//         // const existuser=alluser.find((user)=>user.email==email)
//         console.log();
//         axios.get("http://localhost:2222/User")
//         .then((res)=>{
//             console.log(res);
//             setalluser(res.data)

//         }).catch((error)=>{
//             console.log(error);
//         })
//     },[])
      
//     const formik = useFormik({
//         initialValues:{
//             email:"",
//             password:""
//         },
//         validationSchema:yup.object({
//             email:yup.string().email("email must be valid").required("email cannot be empty"),
//             password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password  must have at least one uppercase, a special character").required("cannot be left")
    
//         }),
    
//         onSubmit:(value)=>{
//             console.log(value);
//             console.log(alluser);
//             setload(false)
            
//             axios.get("http://localhost:2222/User")
//             console.log(response);
//             let data = response.data
//             if(response.status){
//                 // console.log(response.data);
//                 let existuser = data.find((user)=>user.email==email)
//                 console.log(existuser);
//                 if(existuser){
//                     toast.success("invlid email")
//                 }else{
//                     toast.error
//                 }
//                 if(!existuser){
//                     toast.error("invalid email")
//                 }else{
//                     if(existuser.password==value.password){
//                         setTimeout(()=>{
//                          navigate("/music")
//                         , 5000})
//                         toast.success("login successful")
//                     }else{
//                         toast.error("incorrect successful")
//                     }
//                 }
                
//             }

   

//     //         .then((res)=>{
//     //             console.log(res.data);

//     //      toast.success("signup successful")
//     // }).catch((error)=>{
//     //    console.log(error.message);
//     // })
//     }
           
//       })
      
//       console.log(formik.errors);
//       console.log(formik.touched);


//     return(
//         <div>
//         <form onSubmit={formik.handleSubmit} className='w-50 mx-auto shadow px-3 py-3' action="">
//             <h1>Login</h1>
//             <div className="form-group mt-3">
//                 <label htmlFor="">Email</label>
//                 <input name="username" onBlur={formik.handleBlur} onChange ={formik.handleChange} className='form-control' type="text"/>
//                 <p className='text-danger fs-6'>{formik.touched.username ? formik.errors.username: ""}</p>
//             </div>
            
//             <div className="form-group mt-3">
//                 <label htmlFor="">Password</label>
//                 <input name="email" onBlur={formik.handleBlur}  onChange={formik.handleChange}  className="form-control"  type="text" />
//                  <p className="text-danger fs-6">{formik.touched.email ? formik.errors.email : ""}</p>
//             </div>
//       </form>
//     </div>
    
//     )

// }

// export default FormikLogin;



import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Formiklogin = () => {
    const [load, setload] = useState(false)
    const [alluser, setalluser] = useState([])

    
    useEffect(()=>{
        // const existuser = alluser.find((user))
        console.log();
        axios.get("http://localhost:3000/user")
        .then((res)=>{
            console.log(res);
            setalluser(res.data)
            
        }).catch((err)=>{
            console.log(err);
        })
    }, [load])

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.string().email("email must be valid").required("email cannot be empty"),
            password:yup.string().matches(`^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])`, "password  must have at least one uppercase, a special character").required("cannot be left")
    
        }),
        onSubmit:(value)=>{ 
            console.log(value);
            console.log(value);
            console.log(alluser);
             setload(false)
           const existuser = alluser.find((user)=> user.email === value.email)
           console.log(existuser);
           if (existuser) {
           toast.success('You have successsfully login')
            setload(false)
           }

          else {
            axios.post("http://localhost:3002/user", value)
            .then((res)=>{
                console.log(res);
                toast.success("You have successfully login")
            }).catch((error)=>{
                console.log(error);
                toast.error(error.message)
            },)
            
            try {
               
            } catch (error) {
                console.log(error);
            }
           }
          
        }
    })
    console.log(formik.errors);
    console.log(formik.touched);
  return (
    <div>

        <form onSubmit={formik.handleSubmit} className='w-50 mx-auto  shadow px-3 py-3' action="">
            <h1>Login</h1>
            <div className="form-group mt-3">
                <label htmlFor="">Email</label>
                <input name='email' onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control'  type="text" />
                <p className='text-danger fs-6'>{formik.touched.email ? formik.errors.email: ""}</p>
            </div>
            <div className="form-group mt-3">
                <label htmlFor="">Password</label>
                <input name='password'  onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control'  type="text" />
                <p className='text-danger fs-6'>{formik.touched.password ? formik.errors.password : ""}</p>
            </div>
          <div className="mt-3">
          <button  className='btn btn-primary' type='submit'>Login</button>
          <ToastContainer/>
          </div>
        </form>

    </div>
  )
}

export default Formiklogin