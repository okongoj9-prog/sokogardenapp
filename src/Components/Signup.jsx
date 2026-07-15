import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {

  // step 2 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // step 4
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // step 5
  const handleSubmit = async(e) =>{
    // prevent the site from reloading
    e.preventDefault()

    // step 6
    setLoading("Please wait as registration is happening...")

    // step 7
    try{
      // step 8
      const data = new FormData()

      // step 9
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      // step 10
      const response = await axios.post("https://billylanson.alwaysdata.net/api/signup", data)

      // step 11
      setLoading("")

      // step 12
      setSuccess(response.data.message)

      //step 13
      setUsername ("");
      setEmail ("");
      setPassword ("");
      setPhone ("");

    }
    catch(error){
      // step 14
      setLoading("")

      setError(error.message)
    }
  }
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card p-4 shadow">
        <h2>Signup</h2>
        <h4 className="text-info">{loading}</h4>
        <h4 className="text-success">{success}</h4>
        <h4 className="text-danger">{error}</h4>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter the username'
          className='form-control'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)} /> <br />

           {/* {username} */}

          <input type="email"
          placeholder='Enter the email Address'
          className='form-control'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />

           {/* {email} */}

          <input type="password"
          placeholder='Enter your password'
          className='form-control'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} /> <br />

          {/* {password} */}

          <input type="number"
          placeholder='Enter the phone number'
          className='form-control'
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)} /> <br /> <br />

          {/* {phone} */}

          <input type="submit"
          value="Signup"
          className='btn btn-info' />
        </form>
      </div>
    </div>
  )
}

export default Signup;

