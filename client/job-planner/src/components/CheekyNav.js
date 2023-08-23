import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie' 


const CheekyNav = () => {
  const [cookies, setCookies] = useCookies(['access_token'])
  const navigate = useNavigate()

  const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate('/user')

  }

  return (
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/" >Home</Link></li>
        <li><Link to="/cal" >Calendar view</Link></li>
        <li><Link to="/joblist" >List view</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Home Button</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/cal" >Calendar view</Link></li>
      {/* <li tabindex="0">
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><Link to="/joblist" >List view</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    
    <a class="btn"> {!cookies.access_token ? (<Link to="/user" >Login</Link>) : (<button onClick={logout}>Logout</button>)}
      </a>
  </div>
</div>
  )
}

export default CheekyNav
