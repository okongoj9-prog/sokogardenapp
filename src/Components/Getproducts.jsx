import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Getproducts = () => {
  // step 2 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  // step 12 declare the navigate hook
  const navigate = useNavigate()


  // step 11
  const image_url ="https://billylanson.alwaysdata.net/static/images/"

  //step 3
  const fetchProducts = async() =>{
    // step 4
    setLoading("Please wait as we retrieve the product...")

    try{
      const response = await axios.get("https://billylanson.alwaysdata.net/api/getproducts")

      // step 8
      setProducts(response.data)

      // step9
      setLoading("");
    }
    catch(error){
      // stop the site from loading
      setLoading("");

      // update the error with a message
      setError("Ooops, something went wrong", error.message)
    }
  }

  console.log("my products are", products)
  // step 5
  useEffect(
    () => {fetchProducts()}, []
  )

  return (
    <div className="row">
      <h2>Availbale Products</h2>
      <h3 className="text-primary">{loading}</h3>
      {products.map((product) => (
        <div className="col-md-3 justify-content-center mb-4">
        <div className="card shadow  p-2">
          <img src={image_url + product.product_photo} alt="" className='product_img'/>

          <div className="card-body">
            <h5 className="text-info">{product.product_name}</h5>

            <p className="text-primary">{product.product_description.slice(0,50)}...</p>

            <b className="text-danger">Ksh {product.product_cost}</b> <br />

            <button className='btn btn-info mt-3'
            onClick={() => navigate("/makepayment", {state : {product}})}
            >Purchase Now</button>
          </div>
        </div>
      </div>
      ))}
    </div>

  )
}

export default Getproducts;
