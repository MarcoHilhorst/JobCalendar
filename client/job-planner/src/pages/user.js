import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'


// Form that will be used by both the register and login parts.
const Form = ({username, setUsername, password, setPassword, label, onSubmit}) => {
    return (
        <div>
        <form onSubmit={onSubmit}>
            <h2>{label}</h2>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id='username' value={username} onChange={(event)=> setUsername(event.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id='password' value={password} onChange={(event)=>setPassword(event.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
            </div>
            <button type='submit' className='btn'>{label}</button>
        </form>
    </div>
    )
}


const User = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  )
}

// Login component that posts username and password to try and establish a match. Creates a json webtoken on success
const Login = () => {
       
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [_, setCookies] = useCookies(['access_token'])

    const navigate = useNavigate()

  

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch('//localhost:3001/user/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
                })
            })

            .then(res => res.json())
            .then(data => {
                // If a message is received from the API we alert the message, otherwise we re-direct to the home page
                
                if(data.message){
                    alert(data.mesasge)
                } else {
                    setCookies("access_token", data.token);
                    window.localStorage.setItem("userID", data.userID)
                    navigate('/')
                    window.location.reload(false);
                }
            })
           
        }
        catch (error) {
            console.error(error)
        }
        
    }

    return <Form 
        username={username} 
        setUsername={setUsername} 
        password={password} 
        setPassword={setPassword}
        label='Login'
        onSubmit={onSubmit}
        />;
}

// Register component that posts username and password to database if it does not already exist
const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const clearForm = () =>{
        setUsername('')
        setPassword('')
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch('//localhost:3001/user/register', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
            })
            .then(res => res.json())
            .then(data => alert(data.message))
        } 
        catch (error) {
            console.error(error)
        }
        clearForm()
    }

    return <Form 
    username={username} 
    setUsername={setUsername} 
    password={password} 
    setPassword={setPassword}
    label='Register'
    onSubmit={onSubmit}
    />;
}

export default User

