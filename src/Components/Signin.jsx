import React, { useState } from 'react'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefult();
    console.log('Logging in with: ', {email, password})
  }
  return (
    <div style={{maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc'}}>
      <h1>Welcome to Signin page</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
           <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input 
           type="password"
           id="password"
           value={password} 
           onChange={(e) => setPassword(e.target.value)}
           required
            style={{ width: '100%', padding: '8px' }}
            />
        </div>
        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Signin;
