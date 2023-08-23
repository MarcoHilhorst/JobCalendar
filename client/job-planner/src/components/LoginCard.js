import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginCard = ({ path }) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submitUserInfo = async(username, password) => {
    
    try {
      const res = await fetch(`//localhost:3001${path}`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      if(res.ok){
        console.log('Submitted!', res)
      } else {
        console.log('Something went wrong', res)
      }
      
    }
    catch (err){
      console.error(err)
    }
  }

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
          type="password" 
          id="password" 
          className="input input-bordered input-sm w-full max-w-xs"  
          value={password}
          onChange={(event) => setPassword(event.target.value)} 
        />
        <div>
          <button type='submit' class='btn'>Submit</button>
          {/* <a class='btn' onClick={submitUserInfo(username, password)}>Submit</a> */}
        </div>
      </form>
      <div>
        <button class='btn' onClick={submitUserInfo(username, password)} >Send it</button>
      </div>
      <div>
        <p>{path === '/user/login' ? <Link to="/register">Don't have an account? Register here.</Link> : ""}</p>
      </div>
    </div>
  )
}

export default LoginCard
