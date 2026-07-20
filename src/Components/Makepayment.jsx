import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
    // by use of the use location hook exract the different properties of the product
    const { product } = useLocation().state || {};

    const image_url = "https://billylanson.alwaysdata.net/static/images/";
    
    const [phone, setPhone] = useState('');
    

    const [loading, setLoading] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] =useState("");

    // create a function to handle subbmit
    const handleSubmit = async(e)=>{
        e.preventDefault()

        setLoading("Please wait as your request is being processed..")

        try{
            const data = new FormData()

            data.append("amount", product.product_cost)
            data.append("phone", phone)

            const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/mpesa_payment")

            setLoading("")
        }
        catch(error){
            setLoading("")

            setError(error.message)
        }
    };

    
    

        

   // console.log("The products detials are", product)
  return (
   <div className="container mt-5">
    <h2 className='text-center'>Make Payment Lipa- Na Mpesa</h2> <br />   
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card shadow p-4">
                <h3 className="text-info">{loading}</h3>
                <h3 className="text-danger">{error}</h3>                               
                <form onSubmit={handleSubmit}>
                    {product.product_photo && (
                    <div className="text-center mb-3">
                        <img src={image_url + product.product_photo} alt="" className="img-fluid rounded" style={{ maxHeight: "1000px", objectFit: "contain" }}/>
                    </div>
                )}
                <h4 className="text-info">{product.product_name}</h4>
                <p className="text-muted">{product.product_description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-danger">Ksh {product.product_cost}</h4> <br />
                </div> <br />
                    <input type="number"
                    placeholder='Enter your phone number'
                    className='form-control'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} /> 
                    {/* {phone} */}

                    <button className="btn btn-success btn-lg w-100 mt-4">Pay Ksh {product.product_cost} via M-Pesa</button>
                </form>
                
            </div>
        </div>
    </div>
   </div>
  )
}

export default Makepayment
