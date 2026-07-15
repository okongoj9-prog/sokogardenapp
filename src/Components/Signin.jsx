import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  //step 2
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  // step 4
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] =useState("");


  //step 15
  // use the usenavigate hook to redirect a person just incase the login detials are correct
  const navigate = useNavigate()
  // step 5
  const handleSubmit = async(e) =>{
    // prevent the site from reloading
    e.preventDefault()

    // Step 6
    setLoading("Please wait as we let you in....")


    // step 7
    try{
      // Step 8
      const data = new FormData()

      //step 9
      data.append("email", email)
      data.append("password", password)

      // step 10
      const response = await axios("https://billylanson.alwaysdata.net/api/signin", data)

      // step 11
      setLoading("");

      // step 12
      if(response.data.user){
        // to be redirected to another page
        navigate("/");

        //as the person navigates to the new page , we store some of his information
        localStorage.setItem("user", JSON.stringify(response.data.user))
      }
      else{
        setError(response.data.message)
      }

      // step 14
      setEmail("");
      setPassword("");

    }
    catch(error){
      // stop the site from loading if there is any error
      setLoading("");

      // update the error hook with the error message
      setError(error.message)
    }
  }

  return(
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 shadow p-4'>
        <form onSubmit={handleSubmit}>
          <h2>Signin</h2>
          <h3 className='text-info'>{loading}</h3>
          
          
          <input type="email"
          placeholder='Enter the email Address'
          className='form-control'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />

          {/* {email} */}

          <input type="password"
          placeholder='Enter the password'
          className='form-control'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

          {/* {password} */}

          <input type="submit"
          value="Signin"
          className='btn btn-info' />

          <p>Don't have an account? <Link to="/signup">Register</Link> </p>

        </form>
      </div>
    </div>
  )
}
export default Signin; 