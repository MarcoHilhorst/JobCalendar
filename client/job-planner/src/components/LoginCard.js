import React, { useState } from 'react'

const LoginCard = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          className="input input-bordered input-sm w-full max-w-xs" 
          value={username}

          onChange={(event) => setUsername(event.target.value)} 
        />
        <label htmlFor="password">Password</label>
        <input 
          type="text" 
          id="password" 
          className="input input-bordered input-sm w-full max-w-xs"  
          value={password}
          onChange={(event) => setPassword(event.target.value)} 
        />
        <div>
          <button type='submit' >Submit</button>
        </div>
      </form>
      <div>
        <p>Don't have an account? Register here.</p>
      </div>
    </div>
  )
}

export default LoginCard
