import axios from 'axios'
import React,{useState} from 'react'

const Product = () => {
    const [productname, setproductname] = useState("")
    const [productdescription, setproductdescription] = useState("")
    const [productimage, setproductimage] = useState("")
      



    const handleimage = (e)=>{
        console.log(e.target.files[0]);
        let imagefile = e.target.files[0]
        let reader = new FileReader()
        reader.onload=(e)=>{
            console.log(e.target.result);
            setproductimage(e.target.result)
        }
        reader.readAsDataURL(imagefile)
    }

    const post = () => {
        console.log(productdescription, productname, productimage);

        axios.post("http://localhost:2567/product", {productdescription, productname, productimage})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
    <div className='w-50 mx-auto shadow px-3 py-3'>
        <h1>Product</h1>
      <input className='form-group mt-3' onChange={(e)=>setproductname(e.target.value)} placeholder='Product Name' type='text' />
      <input className='form-group mt-3' onChange={(e)=>setproductdescription(e.target.value)} placeholder='Product Description' type='text'/>
      <input className='form-group mt-3' onChange={handleimage} placeholder='Product Image' type='file'/>
      <button className='btn btn-primary mt-3' onClick={post}>Post</button>
      </div>
      <img src={productimage} alt='' />
    </div>
  )
}

export default Product ;