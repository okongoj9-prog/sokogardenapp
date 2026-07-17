import React, { useState } from 'react'
import axios from 'axios';
const Addproducts = () => {

  // step 2
  const [product_name, setProductName] = useState("");
  const [product_decription, setProductDesction] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_category, setProductCategory] = useState("phone");
  const [product_photo, setProductPhoto] = useState("");

  // step 4
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

   // step 5
  const handleSubmit = async(e) =>{
    // prevent the site from reloading
    e.preventDefault()

    setSuccess("");
    setError("");

  // step 6
    setLoading("Please wait as the product is being add...")

  // step 7
    try {
      // step 8
      const data = new FormData()

      // step 9
      data.append("product_name", product_name);
      data.append("product_description", product_decription);
      data.append("product_cost", product_cost);
      data.append("product_category", product_category);
      data.append("product_photo", product_photo);

      //step10
        const response = await axios.post("https://billylanson.alwaysdata.net/api/addproduct", data)

        

      // step 11
      setLoading("")

      // step 12
      setSuccess(response.data.message)

      // step 13
      setProductName("");
      setProductDesction("");
      setProductCost("");
      setProductCategory("");
      setProductPhoto("");
    }
    catch(error){
      // step 14
      setLoading("")

      setError(error.message)
    }
  }

  

  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 card shadow p-4'>
      <form onSubmit={handleSubmit}>
        <h1>Add product</h1>
        <h4 className="text-info">{loading}</h4>
        <h4 className="text-success">{success}</h4>
        <h4 className="text-danger">{error}</h4>


        <input type="text"
        placeholder='Enter the product Name'
        className='form-control'
        required
        value={product_name}
        onChange={(e) => setProductName(e.target.value)} /> <br />

        {/* {product_name} */}

        <input type="text"
        placeholder='Enter Some detials of the product'
        className='form-control'
        required
        value={product_decription}
        onChange={(e) => setProductDesction(e.target.value)} /> <br />

        {/* {product_decription} */}

        <input type="text"
        placeholder='Enter the price'
        className='form-control'
        required
        value={product_cost}
         onChange={(e) => setProductCost(e.target.value)}/> <br />

         {/* {product_cost} */}

        <select className='form-control'
        value={product_category}
        onChange={(e) => setProductCategory(e.target.value)}>
          <option value="phone">Phone</option>
          <option value="Tv">Tv</option>
          <option value="Laptop">Laptop</option>
          <option value="Smartwatch">Smartwatch</option>
          <option value="Fridge">Fridge</option>
        </select> <br />

        {/* {product_category} */}

        <label >Choose your Product Photo</label>
        <input type="file"
        className='form-control'
        accept='image/*'
        onChange={(e) => setProductPhoto(e.target.files[0])} /> <br /> <br />

        <input type="submit"
        value='Addproduct'
        className='btn btn-info' />
      </form>
      </div>
    </div>

  )
}

export default Addproducts;
