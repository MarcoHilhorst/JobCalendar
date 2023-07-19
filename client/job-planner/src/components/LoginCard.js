import React from 'react'

const LoginCard = () => {
  return (
    <div>
      <form>
        <label htmlFor="">Username</label>
        <input type="text" className="input input-bordered input-sm w-full max-w-xs" />
        <label htmlFor="">Password</label>
        <input type="text" className="input input-bordered input-sm w-full max-w-xs" />
      </form>
      <div>
        <p>Don't have an account? Register here.</p>
      </div>
    </div>
  )
}

export default LoginCard
